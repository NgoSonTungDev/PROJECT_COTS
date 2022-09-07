const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartUSers" }],
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: "HistoryUsers" }],
  },
  { timestamps: true }
);

const CartUser = new mongoose.Schema({
  ProductID: {
    type: String,
    required: true,
  },
  NameProduct: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  AccountUSer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountUSers",
  },
});

const PurchaseHistory = new mongoose.Schema(
  {
    codeOrders: {
      type: Number,
      required: true,
    },
    ProductID: {
      type: String,
      required: true,
    },
    NameProduct: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    Size: {
      type: String,
      required: true,
    },
    Color: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Amount: {
      type: Number,
      required: true,
    },
    Total: {
      type: Number,
      required: true,
    },
    AccountUSer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AccountUSers",
    },
  },
  { timestamps: true }
);

const Product = new mongoose.Schema({
  NameProduct: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Introduce: {
    type: String,
    required: true,
  },
  warehouse: {
    type: Number,
    required: true,
  },
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
});

const CommentProduct = new mongoose.Schema({
  nameUser: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
});

const consolidation = new mongoose.Schema({
  NameAccount: {
    type: String,
    required: true,
  },
  NameProduct: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

//user
let Users = mongoose.model("AccountUSers", userShema);
//Product
let Products = mongoose.model("Products", Product);
//cmt
let Comment = mongoose.model("Comments", CommentProduct);
//cart
let Cart = mongoose.model("CartUSers", CartUser);
//histori order
let Orderhistory = mongoose.model("HistoryUsers", PurchaseHistory);
//sum order
let OrderConsolidation = mongoose.model("TotalOdered", consolidation);

module.exports = {
  Users,
  Products,
  Comment,
  Cart,
  OrderConsolidation,
  Orderhistory,
};
