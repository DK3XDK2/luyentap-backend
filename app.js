require("dotenv").config(); // ⬅️ Bắt buộc nếu bạn dùng biến môi trường

const express = require("express");
const session = require("express-session");
const admin = require("./firebase");

const app = express();
const db = admin.firestore();
const PORT = process.env.PORT || 8080;

// Thiết lập EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "luyentap-secret", // Có thể chuyển sang biến môi trường
    resave: false,
    saveUninitialized: true,
  })
);

// Trang chính
app.get("/", (req, res) => {
  res.render("index");
});

// Trang bài học theo số
app.get("/bai:so", (req, res) => {
  const so = req.params.so;
  res.render(`bai${so}`);
});

// ✅ API xác thực key từ Firebase
app.post("/api/session", async (req, res) => {
  const { key } = req.body;

  try {
    const doc = await db.collection("keys").doc(key).get();
    const data = doc.data();

    if (!doc.exists || data.banned === true) {
      return res.status(403).json({
        success: false,
        message: "❌ Key không tồn tại hoặc đã bị khóa.",
      });
    }

    req.session.validKey = true;
    return res.json({ success: true });
  } catch (err) {
    console.error("🔥 Lỗi xác thực session:", err);
    return res.status(500).json({ success: false, message: "Lỗi server." });
  }
});

// 🔧 Kiểm tra Firebase kết nối (tùy chọn)
app.get("/test-firebase", async (req, res) => {
  try {
    const snapshot = await db.collection("keys").limit(1).get();
    const docs = snapshot.docs.map((doc) => doc.data());
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: "Không kết nối được Firebase" });
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
