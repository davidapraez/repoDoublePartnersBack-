const mongoose = require("mongoose");
const Counter = require("./Counter");

const ticketSchema = new mongoose.Schema({
  incrementalId: Number,
  usuario: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  estatus: { type: String, enum: ["abierto", "cerrado"] },
});

ticketSchema.pre("save", async function (next) {
  let doc = this;
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "ticketId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    doc.incrementalId = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
