const { Products } = require("../models/model");

const ProductsController = {
  addProducts: async (req, res) => {
    try {
        const newProducts = new Products(req.body)
        const saveProducts = await newProducts.save()
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAll : async (req,res) =>{
    try {
      const allProducts = await Products.find()
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  GetAnProducts: async (req, res) => {
    try {
      const Product = await Products.findById(req.params.id).populate("comment")
      res.status(200).json(Product);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  UpdateProducts: async (req, res) => {
    try {
      const IdProducts = await Products.findById(req.params.id);
      await IdProducts.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully !");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteProducts: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id)
      res.status(200).json("Delete Succesfully !!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = ProductsController