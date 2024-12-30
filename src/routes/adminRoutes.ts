import express from "express";
const router = express.Router();

import { isAdmin } from "../middlewares/authMiddlewares.js";
import adminControllers from "../controllers/adminControllers.js";

router.route("/login")
    .get(adminControllers.getAdminLogin)
    .post(adminControllers.adminLogin);

router.route("/signup")
    .get(adminControllers.getAdminSignup)
    .post(adminControllers.adminSignup);

router.get("/logout", adminControllers.adminLogout);

router.get("/dashboard", isAdmin, adminControllers.getAdminDashboard);

router.route("/addProduct")
    .get(isAdmin, adminControllers.getAddProduct)
    .post(isAdmin, adminControllers.addProduct);

router.get("/viewProduct/:id", isAdmin, adminControllers.viewProduct);

router.route("/editProduct/:id")
    .get(isAdmin, adminControllers.getEditProduct)
    .put(isAdmin, adminControllers.editProduct);

router.post("/deleteProduct/:id", isAdmin, adminControllers.deleteProduct);

router.post("/searchProduct", isAdmin, adminControllers.searchProduct);

export default router;