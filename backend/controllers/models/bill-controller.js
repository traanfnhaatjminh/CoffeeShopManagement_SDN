const Bill = require("../../model/Bill");
const mongoose = require('mongoose');  // To create an ObjectId

const createNewBill = async (req, res, next) => {
  try {
    const { total_cost, table_id, product_list, payment, status } = req.body;

    // Create a new bill document
    const newBill = new Bill({
      _id: new mongoose.Types.ObjectId(),  // Automatically generate ObjectId
      total_cost: total_cost,
      table_id: table_id,
      payment: payment,
      status: status,
      product_list: product_list
    });

    // Save the new bill to the database
    const savedBill = await newBill.save();

    // Return success response
    res.status(201).json(savedBill);
  } catch (error) {
    console.error('Error creating bill:', error);
    res.status(500).json({ message: 'Failed to create bill', error: error.message });
  }
};

module.exports = { createNewBill };
