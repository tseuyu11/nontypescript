import express from "express";
import { getSymptoms, createSymptoms, updateSymptoms, deleteSymptoms, findSymptoms } from "../controllers/symptomsController.model.js";

  const router = express.Router();

    router.get("/", getSymptoms);
    
    router.post("/", createSymptoms);

    router.put("/:id", updateSymptoms);

    router.delete("/:disease_id", deleteSymptoms);

    router.get("/:id", findSymptoms);

export default router;