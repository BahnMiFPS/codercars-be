const mongoose = require("mongoose");
const Car = require("../models/Car");
const { MongoChangeStreamError } = require("mongodb");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

carController.getCars = async (req, res, next) => {
  const carModel = new Car();
  try {
    const carList = await carModel.find(carController);

    console.log(carList);
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
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
