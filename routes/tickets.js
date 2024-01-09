const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");

router.get("/", async (req, res) => {
  try {
    let query = {};
    if (req.query.usuario) {
      query.usuario = req.query.usuario;
    }
    const tickets = await Ticket.find(query)
      .limit(req.query.limit)
      .skip(req.query.skip);
    res.json(tickets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoTicket = new Ticket(req.body);
    const ticketGuardado = await nuevoTicket.save();
    res.status(201).json(ticketGuardado);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const ticketActualizado = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(ticketActualizado);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
