const express = require("express");
const bodyParser = require("body-parser");
const Bill = require("../model/Bill");

const billRouter = express.Router();
billRouter.use(bodyParser.json());

///// get all bill

billRouter.get("/", async (req, res, next) => {
  try {
    const billlist = await Bill.find();
    res.status(200).json(billlist);
  } catch (error) {
    next(error);
  }
});
//// create bill
billRouter.post("/createBill", async (req, res, next) => {
  try {
    const {
      created_time,
      updated_time,
      total_cost,
      table_id,
      payment,
      status,
      product_list,
    } = req.body;
    const newBill = new Bill({
      created_time,
      updated_time,
      total_cost,
      table_id,
      payment,
      status,
      product_list,
    });
    const savedBill= await newBill.save();
    res.status(201).json({
        message: "Bill created successfully",
        result: savedBill
    })
  } catch (error) {
    console.log(error);
    res.status(400).jsonp({
        message: "Error creating bill",
        error: error.message
    })
  }
});

///// get bill by id
billRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
  } catch (error) {
    next(error);
  }
});
module.exports= billRouter;
