import express from "express";
import { ContentController } from "./content.controller";

const router = express.Router();

router.post("/create-content", ContentController.createContent);

router.get("/", ContentController.getAllContents);

router.get("/:id", ContentController.getContentById);

router.put("/:id", ContentController.updateContent);

router.delete("/:id", ContentController.deleteContent);

export const ContentRoutes = router;
