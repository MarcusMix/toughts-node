import e from "express";
const router = e.Router();
import ToughtController from "../controllers/ToughtController.js";

router.get("/", ToughtController.showToughts);

export default router;
