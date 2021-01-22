"use strict";

const Reservation = require("../models/reservation");


exports.reservationForm = async (req, res, next) => {
  res.render("reservation-form", { title: "Contacts | thirtten", name: "reservation-form" });
};

exports.reservation = [
  async (req, res, next) => {
    const {
      username,
      date,
      time,
      tel
    } = req.body;

    try {
      const reservation = new Reservation({
        userSurname: username,
        dateReservation: date,
        timeReservation: time,
        phoneNumber: tel
      });

      await reservation.save();

      res.render("index", { title: "Contacts | thirtten", name: "index" });
    } catch (err) {
      console.error(err);
      return next(err);
    }
  }
];
