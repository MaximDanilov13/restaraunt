"use strict";

const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
  userSurname: {
    type: String,
    required: true,
  },
  dateReservation: {
    type: String,
    required: true,
  },
  timeReservation: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = model("Reservation", reservationSchema);
