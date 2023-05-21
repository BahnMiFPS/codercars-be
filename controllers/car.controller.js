const mongoose = require("mongoose");
const Car = require("../models/Car");
const { MongoChangeStreamError } = require("mongodb");
const carController = {};

carController.createCar = async (req, res, next) => {
	try {
		const { make, model, release_date, transmission_type, size, style, price } =
			req.body;
		if (!make || !model || !release_date)
    // 	  {
    //     "make": "Plymouth",
    //     "model": "Colt",
    //     "release_date": 2002,
    //     "transmission_type": "MANUAL",
    //     "size": "Compact",
    //     "style": "Coupe",
    //     "price": 23000
    // }
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

carController.getCars = async (req, res, next) => {
  const { page } = req.query;
  const limit = 10;
  try {
    const carList = await Car.find().limit(limit).skip(page);
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
    res.status(500).send({ data: { message: "Error retrieving car list" } });
  }
};

carController.editCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

carController.deleteCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

module.exports = carController;
