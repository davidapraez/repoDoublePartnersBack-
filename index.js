const express = require("express");
const bodyParser = require("body-parser");
const ticketRoutes = require("./routes/tickets");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

// URL de conexión a MongoDB Atlas
const uri =
  "mongodb+srv://xkill10:olw0jjl18CqnQFRO@tickets.txuljvs.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB Atlas");

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a MongoDB Atlas", error);
    process.exit(1);
  }
}

connectToDatabase();

app.use("/tickets", ticketRoutes);

app.use((err, req, res, next) => {
  res.status(500).send("Ocurrió un error en el servidor");
});
