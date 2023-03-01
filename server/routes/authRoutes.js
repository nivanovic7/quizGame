const {Router} = require("express");
const router = Router();
const authController = require("../controllers/authController.js")
const {requireAuth, checkUser} = require("../middleware/authMiddleware.js")
const cookieParser = require("cookie-parser")
const express = require("express");
const app = express();

app.use(cookieParser())

router.get("*", checkUser)
// router.get("/",redirect("/login"));
router.get("/", authController.local_get);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);

router.get("/home",requireAuth, authController.home_get);
router.get("/game",requireAuth, authController.game_get);



module.exports = router;