/*
const Order = require("../models/orderModel");
const Product = require("../models/productModel");

//! Creating a NEW ORDER
exports.newOrder = async (req, res, next) => {
  try {
    const { shippingInfo, orderItems } = req.body;

    let items = [];

    // ! getting products from database by refrence of cart items
    var promises = orderItems.map(async (element) => {
      return Product.findById(element._id)
        .then((product) => {
          let obj = {
            product: product._id,
            name: product.name,
            price: product.price,
            image: product.images[0].url,
            quantity: element.quantity,
          };

          items.push(obj);
        })
        .catch((error) => {
          console.log("Error: ", error);
          return "false";
        });
    });

    Promise.all(promises).then(async (result) => {
      if (result[0] === "false") {
        // if cart is invalid or does have any product which is nt in database return error
        res.status(404).json({
          success: false,
          message: "Cart Error. Please Clean Cart And Try Again",
        });
      } else {
        // create total of all products
        var total = items.reduce(
          (total, item) => total + +item.price * +item.quantity,
          0
        );

        // create order
        const order = await Order.create({
          shippingInfo,
          orderItems: items,
          totalPrice: total,
          paidAt: Date.now(),
          user: req.user._id,
        });

        res.status(201).json({
          success: true,
          order: order,
        });
      }
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

// ! Get a Single Order

exports.getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return next(new ErrorHandler("Order Not Found", 400));
    }

    res.status(200).json({
      success: true,
      order: order,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

// ! Get User All Order

exports.getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
      success: true,
      orders: orders,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};
*/
