import { Router } from "express";
import marketRouter from "./market";

const router = Router();

router.use("/market", marketRouter);

export default router;
