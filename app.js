const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

// Cấu hình EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Cấu hình public folder (JS, CSS, ảnh)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Session để xác thực key
app.use(
  session({
    secret: "luyentap-secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => {
  res.render("index"); // index.ejs
});

// Middleware kiểm tra key
const checkKey = (req, res, next) => {
  if (req.session.validKey) return next();
  return res.redirect("/key");
};

app.post("/key", (req, res) => {
  const { key } = req.body;
  if (key === "TS2024") {
    req.session.validKey = true;
    return res.redirect("/");
  }
  res.send("Sai key! Quay lại thử lại.");
});

// Trang chủ
app.get("/", checkKey, (req, res) => {
  res.render("index"); // index.ejs sẽ là menu chọn bài học
});

// Các bài học: bai1, bai2,...
app.get("/bai:so", checkKey, (req, res) => {
  const so = req.params.so;
  res.render(`bai${so}`);
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
const admin = require("./firebase");
const db = admin.firestore();
app.get("/test-firebase", async (req, res) => {
  const snapshot = await db.collection("keys").limit(1).get();
  const docs = snapshot.docs.map((doc) => doc.data());
  res.json(docs);
});
