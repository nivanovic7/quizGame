const {Router} = require("express");
const router = Router();
const authController = require("../controllers/authController.js")


// router.get("/",redirect("/login"));
router.get("/", authController.local_get);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);

router.get("/home", authController.home_get);
router.get("/game", authController.game_get);



module.exports = router;