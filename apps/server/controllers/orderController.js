const Order = require('../models/orderModel');
const orderSeed = require('../seedData/orderSeed');

const seedOrder = async (req, res) => {
  await Order.deleteMany({});

  const result = await Order.insertMany(orderSeed);

  try {
    if (!result) return res.status(400).json({ message: "Error in seeding orders"})
    else return res.status(201).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `${error}` })
  }
}

const handleNewOrder = async (req, res) => {

  const { shippingInfo, orderItems, user } = req.body;
  console.log(shippingInfo, orderItems, user)
  const { address, city, state, country, pinCode, phoneNo } = shippingInfo;

  if (!address || !city || !state || !country || !pinCode || !phoneNo) {
    return res.status(400).json({ message: "Shipping info form incomplete"})
  }
  
  // const { name, quantity, price, image, product } = orderItems;
  // console.log(name, quantity, price, image, product);

  orderItems.map(item => {
    if (/*!item.name ||*/ !item.quantity || !item.price || /*!item.image ||*/ !item.product) {
      return res.status(400).json({ message: "Product info incomplete"})
    }
  })

  if (!user) return res.status(400).json({ message: "User info not found"})

  const result = await Order.create({
    shippingInfo,
    orderItems,
    user
  })
  
  try {
    if (result) return res.status(201).json({ success: true, order: result});
    if (!result) return res.status(400).json({ message: "Error: order not created"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `${error}`})   
  }
}

const getOrdersByUser = async (req, res) => {
  const { user } = req.params;

  const result = await Order.find({user: user});


  try {
    if (!result) return res.status(204).json({ message: "Error, user not found" })
    if (result) {
      // const orderItems = result.map(order => {
      //   return order.orderItems
      // })
      // console.log(orderItems)
      return res.status(200).json({order: result})
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` })
  }
}

const getOrderById = async (req, res) => {
  const { id } = req.params;

  const result = await Order.findOne({_id: id}).populate({
    path: "orderItems",
    populate: { path: 'product'}
  }).exec();

  console.log(result.orderItems[0].product)

  try {
    if (!result) return res.status(204).json({ message: "Error, order not found" })
    if (result) {
      
      // console.log(result)
      return res.status(200).json({
        order: result,
        success: true
      })
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` })
  }
}

const deleteOrderById = async (req, res) => {
  const { id } = req.params;

  const result = await Order.findOneAndDelete({_id: id})

  try {
    if (!result) return res.status(204).json({ message: "Error, order not found" })
    if (result) {
      
      console.log(result)
      return res.status(200).json({
        order: result,
        success: true
      })
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` })
  }
}

module.exports = { seedOrder, handleNewOrder, getOrdersByUser, getOrderById, deleteOrderById }


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
