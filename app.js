require("dotenv").config();

const express = require("express");
const session = require("express-session");
const admin = require("firebase-admin");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// 🔐 Khởi tạo Firebase Admin từ biến môi trường
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});
const db = admin.firestore();

// 🛠 Cấu hình view
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 🧩 Middleware xử lý
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "luyentap-secret", // Có thể cho vào biến môi trường nếu muốn
    resave: false,
    saveUninitialized: true,
  })
);

// ------------------ ROUTES ------------------ //

// 🏠 Trang chủ
app.get("/", (req, res) => {
  res.render("index");
});

// 📚 Trang bài học
app.get("/bai:so", (req, res) => {
  const so = req.params.so;
  res.render(`bai${so}`);
});

// ✅ API xác thực key và fingerprint
app.post("/api/session", async (req, res) => {
  const { key, fingerprint } = req.body;

  try {
    if (!key || !fingerprint) {
      return res
        .status(400)
        .json({ success: false, message: "Thiếu key hoặc fingerprint." });
    }

    const doc = await db.collection("keys").doc(key).get();
    if (!doc.exists) {
      return res
        .status(404)
        .json({ success: false, message: "❌ Key không tồn tại!" });
    }

    const data = doc.data();
    const now = Date.now();
    const createdAt = data.createdAt || 0;
    const duration = data.duration || 2 * 60 * 60 * 1000;

    if (data.banned) {
      return res
        .status(403)
        .json({ success: false, message: "🚫 Key đã bị khóa!" });
    }

    if (now - createdAt > duration) {
      return res
        .status(403)
        .json({ success: false, message: "⏰ Key đã hết hạn!" });
    }

    if (data.fingerprint && data.fingerprint !== fingerprint) {
      return res.status(403).json({
        success: false,
        message: "❌ Key đã dùng trên thiết bị khác!",
      });
    }

    if (!data.fingerprint) {
      await db.collection("keys").doc(key).update({ fingerprint });
    }

    req.session.validKey = true;
    return res.json({ success: true, message: "✅ Key hợp lệ!" });
  } catch (err) {
    console.error("🔥 Lỗi xác thực session:", err);
    return res.status(500).json({ success: false, message: "❌ Lỗi server." });
  }
});

// 🔧 Kiểm tra Firebase
app.get("/test-firebase", async (req, res) => {
  try {
    const snapshot = await db.collection("keys").limit(1).get();
    const docs = snapshot.docs.map((doc) => doc.data());
    res.json(docs);
  } catch (err) {
    console.error("🔥 Firebase error:", err); // 👈 Ghi log chi tiết
    res
      .status(500)
      .json({ error: "Không kết nối được Firebase", detail: err.message });
  }
});

// 🚀 Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
