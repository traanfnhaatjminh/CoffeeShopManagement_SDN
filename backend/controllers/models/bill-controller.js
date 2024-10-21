const express= require("express");
const mongoose= require("mongoose")
const Bill = require("../../model/Bill");
const Table = require("../../model/TableList");

const postBill= async(req, res)=>{
    try {
        const { created_time, updated_time, total_cost, table_id, payment, status, product_list } = req.body;
    
        // Tạo hóa đơn mới
        const newBill = new Bill({
          created_time,
          updated_time,
          total_cost,
          table_id,
          payment,
          status,
          product_list,
        });
    
        // Lưu hóa đơn vào database
        const savedBill = await newBill.save();
    
        // Cập nhật trạng thái bàn (occupied = true) sau khi tạo hóa đơn
        await Table.findByIdAndUpdate(table_id, { status: false });
    
        res.status(201).json({
          message: "Bill created successfully",
          result: savedBill,
        });
      } catch (error) {
        console.log(error);
        res.status(400).jsonp({
          message: "Error creating bill",
          error: error.message,
        });
      }
}

const getBill= async (req,res) =>{
    try {
        const { tableId } = req.params;
    
        // Tìm hóa đơn theo table_id
        const bill = await Bill.findOne({ table_id: tableId }).populate('product_list.productId');
    
        if (!bill) {
          return res.status(404).json({ message: "No bill found for this table" });
        }
    
        res.status(200).json(bill);
      } catch (error) {
        next(error);
      }
}

const postBillUpdate= async (req, res) =>{
    try {
        const { billId } = req.params;
    
        // Tìm hóa đơn theo ID và cập nhật trạng thái thanh toán
        const bill = await Bill.findByIdAndUpdate(billId, { status: 2 }, { new: true }); // status 2: Paid
    
        if (!bill) {
          return res.status(404).json({ message: "Bill not found" });
        }
    
        // Cập nhật trạng thái bàn về trống
        await Table.findByIdAndUpdate(bill.table_id, { status: true });
    
        res.status(200).json({ message: "Payment successful, table is now available", bill });
      } catch (error) {
        next(error);
      } 
}
module.exports= {postBill, postBillUpdate, getBill};