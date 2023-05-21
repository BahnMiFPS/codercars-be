const mongoose = require("mongoose");
const Car = require("../models/Car");
const { MongoChangeStreamError } = require("mongodb");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    const { make, model, release_date, transmission_type, size, style, price } =
      req.body;
    if (
      !make ||
      !model ||
      !release_date ||
      !transmission_type ||
      !size ||
      !style ||
      !price
    ) {
      throw new Error("Missing required info!");
    }

    const result = {
      message: "Create Car Successfully!",
      car: {
        make,
        model,
        release_date,
        transmission_type,
        size,
        style,
        price,
      },
    };
    await Car.create(result.car);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: err.message });
  }
};

carController.getCars = async (req, res, next) => {
  const { page } = req.query;
  const limit = 10;
  try {
    const carList = await Car.find({ isDeleted: false })
      .limit(limit)
      .skip(page);
    const totalCars = await Car.countDocuments();
    const totalPage = Math.floor(totalCars / limit);

    const result = {
      data: {
        message: "Get Car List Successfully!",
        cars: carList,
        page: Number(page),
        // total pages
        total: totalPage,
      },
    };
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(400).send({ data: { message: "Error retrieving car list" } });
  }
};

carController.editCar = async (req, res, next) => {
  try {
    const updatedInfo = req.body;
    const Id = req.params.id;
    const newCar = await Car.findByIdAndUpdate(Id, updatedInfo, {
      returnDocument: "after",
    });
    res
      .status(200)
      .send({ data: { message: "Updated Car successfully", newCar } });
  } catch (err) {
    console.error(err);
    res.status(400).send({ data: { message: err.message } });
  }
};

carController.deleteCar = async (req, res, next) => {
  // Hard delete
  //   try {
  //     const Id = req.params.id;
  //     const deleted_car = await Car.findByIdAndDelete(Id);
  //     res
  //       .status(200)
  //       .send({ data: { message: "Deleted Car successfully", deleted_car } });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(400).send({ data: { message: err.message } });
  //   }

  //Soft Delete
  try {
    const updatedInfo = { isDeleted: true };
    const Id = req.params.id;
    const deleted_car = await Car.findByIdAndUpdate(Id, updatedInfo, {
      returnDocument: "after",
    });
    res
      .status(200)
      .send({ data: { message: "Deleted Car successfully", deleted_car } });
  } catch (err) {
    console.error(err);
    res.status(400).send({ data: { message: err.message } });
  }
};

module.exports = carController;
