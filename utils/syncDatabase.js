const fs = require("fs");

const syncDatabase = () => {
  let db = fs.readFileSync("cars.json", "utf-8");
  const parsedDb = JSON.parse(db);
  let cars = parsedDb;

  const updatedCars = cars.map((car) => {
    return {
      _id: car._id,
      make: car.Make,
      model: car.Model,
      release_date: car.Year,
      transmission_type: car["Transmission Type"],
      engine_fuel_type: car["Engine Fuel Type"],
      engine_hp: car["Engine HP"],
      engine_cylinders: car["Engine Cylinders"],
      driven_wheels: car.Driven_Wheels,
      number_of_doors: car["Number of Doors"],
      market_category: car["Market Category"],
      size: car["Vehicle Size"],
      style: car["Vehicle Style"],
      highway_mpg: car["highway MPG"],
      city_mpg: car["city mpg"],
      popularity: car.Popularity,
      price: car.MSRP,
      isDeleted: false,
    };
  });

  const updatedDbJson = JSON.stringify(updatedCars);
  fs.writeFileSync("db.json", updatedDbJson);
};

module.exports = {
  syncDatabase,
};
