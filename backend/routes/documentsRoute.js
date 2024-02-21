import express from "express";
import { Document } from "../models/documentModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const documents = await Document.find({});
    return res.status(200).json({
      count: documents.length,
      data: documents,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);
    if (!document) {
      return res.status(404).send({ message: "Document not found" });
    }
    return res.status(200).send(document);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.text) {
      return res.status(400).send({ message: "Some data is missing" });
    }

    const newDocument = {
      title: req.body.title,
      text: req.body.text,
    };
    const document = await Document.create(newDocument);
    return res.status(201).send(document);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.text) {
      return res.status(400).send({ message: "Send all required fields!" });
    }
    const { id } = req.params;
    const result = await Document.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Document not found" });
    }

    return res.status(200).send({ message: "Document updated successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Document.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Document not found" });
    }

    return res.status(200).send({ message: "Document deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

export default router;
