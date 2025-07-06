const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

const admin = require("./firebase");
const db = admin.firestore();

// Cấu hình EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Cấu hình public folder (JS, CSS, ảnh)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Để đọc JSON từ fetch

// Session để xác thực key
app.use(
  session({
    secret: "luyentap-secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware kiểm tra key từ session
const checkKey = (req, res, next) => {
  if (req.session.validKey) return next();
  return res.status(403).send("🚫 Chưa xác thực key!");
};

// Trang chủ
app.get("/", (req, res) => {
  res.render("index"); // index.ejs không cần checkKey
});

// Các bài học: /bai1, /bai2, ...
app.get("/bai:so", checkKey, (req, res) => {
  const so = req.params.so;
  res.render(`bai${so}`);
});

// API xác thực key từ client
app.post("/api/session", async (req, res) => {
  const { key } = req.body;

  try {
    const doc = await db.collection("keys").doc(key).get();
    const data = doc.data();

    if (!doc.exists || data.banned === true) {
      return res
        .status(403)
        .json({
          success: false,
          message: "❌ Key không tồn tại hoặc đã bị khóa.",
        });
    }

    // Có thể thêm kiểm tra expired, fingerprint... nếu muốn

    req.session.validKey = true;
    return res.json({ success: true });
  } catch (err) {
    console.error("🔥 Lỗi xác thực session:", err);
    return res.status(500).json({ success: false, message: "Lỗi server." });
  }
});

// Test route (không bắt buộc)
app.get("/test-firebase", async (req, res) => {
  const snapshot = await db.collection("keys").limit(1).get();
  const docs = snapshot.docs.map((doc) => doc.data());
  res.json(docs);
});

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
