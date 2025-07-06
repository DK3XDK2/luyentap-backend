const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

const admin = require("./firebase");
const db = admin.firestore();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "luyentap-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/bai:so", (req, res) => {
  const so = req.params.so;
  res.render(`bai${so}`);
});

// API xác thực key từ Firebase
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

app.get("/test-firebase", async (req, res) => {
  const snapshot = await db.collection("keys").limit(1).get();
  const docs = snapshot.docs.map((doc) => doc.data());
  res.json(docs);
});

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
