const express = require("express");
const Document = require("../models/documentModel.js");
const ensureAuthorised = require("../middlewares/isUserAuthenticated.js");

const router = express.Router();

router.get("/", ensureAuthorised, async (req, res) => {
  try {
    const user = req.user;
    const documents = await Document.find({ createdBy: user._id });
    return res.status(200).json({
      count: documents.length,
      data: documents,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id", ensureAuthorised, async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const document = await Document.findOne({ _id: id, createdBy: user._id });
    if (!document) {
      return res.status(404).send({ message: "Document not found" });
    }
    return res.status(200).send(document);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.post("/", ensureAuthorised, async (req, res) => {
  try {
    if (!req.body.title || !req.body.text) {
      return res.status(400).send({ message: "Some data is missing" });
    }

    const newDocument = {
      title: req.body.title,
      text: req.body.text,
      createdBy: req.user._id,
    };
    const document = await Document.create(newDocument);
    return res.status(201).send(document);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.put("/:id", ensureAuthorised, async (req, res) => {
  try {
    const user = req.user;
    if (!req.body.title || !req.body.text) {
      return res.status(400).send({ message: "Send all required fields!" });
    }
    const { id } = req.params;
    const document = await Document.findOne({ _id: id, createdBy: user._id });
    if (!document) {
      return res.status(404).send({ message: "Document not found" });
    }

    const updatedDocument = await Document.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({
      message: "Document updated successfully!",
      data: updatedDocument,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", ensureAuthorised, async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const document = await Document.findOne({ _id: id, createdBy: user._id });
    if (!document) {
      return res.status(404).send({ message: "Document not found" });
    }

    const result = await Document.findByIdAndDelete(id);
    return res.status(200).send({ message: "Document deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
