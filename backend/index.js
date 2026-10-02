
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");

const cors = require("cors");
const bodyparser = require("body-parser");

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyparser.json());


// =========================
// VERIFY JWT TOKEN
// =========================

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Access Denied"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};


// =========================
// GET USER'S HOLDINGS
// =========================

app.get("/allHoldings", verifyToken, async (req, res) => {

    try {

        const allHoldings = await HoldingsModel.find({
            userId: req.user.id
        });

        res.json(allHoldings);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});


// =========================
// GET USER'S POSITIONS
// =========================

app.get("/allPositions", verifyToken, async (req, res) => {

    try {

        const allPositions = await PositionsModel.find({
            userId: req.user.id
        });

        res.json(allPositions);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});


// =========================
// GET USER'S ORDERS
// =========================

app.get("/allOrders", verifyToken, async (req, res) => {

    try {

        const allOrders = await OrdersModel.find({
            userId: req.user.id
        });

        res.json(allOrders);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});


// =========================
// NEW ORDER
// BUY + SELL
// =========================

app.post("/newOrder", verifyToken, async (req, res) => {

    try {

        const { name, qty, price, mode } = req.body;

        const quantity = Number(qty);
        const orderPrice = Number(price);


        // =========================
        // BASIC VALIDATION
        // =========================

        if (!name || !quantity || quantity <= 0 || !orderPrice || orderPrice < 0) {

            return res.status(400).json({
                message: "Invalid order details"
            });
        }


        // =========================
        // BUY
        // =========================

        if (mode === "BUY") {

            // -------------------------
            // FIND USER'S HOLDING
            // -------------------------

            let holding = await HoldingsModel.findOne({
                userId: req.user.id,
                name
            });


            // -------------------------
            // UPDATE EXISTING HOLDING
            // -------------------------

            if (holding) {

                const totalQty =
                    holding.qty + quantity;

                const avgPrice =
                    (
                        holding.avg * holding.qty +
                        orderPrice * quantity
                    ) / totalQty;


                holding.qty = totalQty;

                holding.avg = avgPrice;

                holding.price = orderPrice;


                await holding.save();

            }


            // -------------------------
            // CREATE NEW HOLDING
            // -------------------------

            else {

                const newHolding = new HoldingsModel({

                    userId: req.user.id,

                    name,

                    qty: quantity,

                    avg: orderPrice,

                    price: orderPrice,

                    net: "0%",

                    day: "0%"
                });


                await newHolding.save();
            }


            // =========================
            // POSITION
            // =========================

            let position = await PositionsModel.findOne({

                userId: req.user.id,

                name

            });


            // -------------------------
            // UPDATE POSITION
            // -------------------------

            if (position) {

                const totalQty =
                    position.qty + quantity;


                const avgPrice =
                    (
                        position.avg * position.qty +
                        orderPrice * quantity
                    ) / totalQty;


                position.qty = totalQty;

                position.avg = avgPrice;

                position.price = orderPrice;


                await position.save();

            }


            // -------------------------
            // CREATE POSITION
            // -------------------------

            else {

                const newPosition = new PositionsModel({

                    userId: req.user.id,

                    product: "CNC",

                    name,

                    qty: quantity,

                    avg: orderPrice,

                    price: orderPrice,

                    net: "0%",

                    day: "0%",

                    isLoss: false

                });


                await newPosition.save();
            }


            // =========================
            // SAVE BUY ORDER
            // =========================

            const newOrder = new OrdersModel({

                userId: req.user.id,

                name,

                qty: quantity,

                price: orderPrice,

                mode: "BUY"

            });


            await newOrder.save();


            return res.status(200).json({

                message: "Buy Order Placed Successfully"

            });
        }


        // =========================
        // SELL
        // =========================

        if (mode === "SELL") {

            // -------------------------
            // FIND USER'S HOLDING
            // -------------------------

            const holding = await HoldingsModel.findOne({

                userId: req.user.id,

                name

            });


            // -------------------------
            // CHECK OWNERSHIP
            // -------------------------

            if (!holding) {

                return res.status(400).json({

                    message: "You don't own this stock"

                });
            }


            // -------------------------
            // CHECK QUANTITY
            // -------------------------

            if (quantity > holding.qty) {

                return res.status(400).json({

                    message: "You don't have enough quantity to sell"

                });
            }


            // =========================
            // UPDATE HOLDING
            // =========================

            holding.qty =
                holding.qty - quantity;

            holding.price =
                orderPrice;


            if (holding.qty === 0) {

                await HoldingsModel.deleteOne({

                    _id: holding._id

                });

            } else {

                await holding.save();

            }


            // =========================
            // UPDATE POSITION
            // =========================

            const position = await PositionsModel.findOne({

                userId: req.user.id,

                name

            });


            if (position) {

                position.qty =
                    position.qty - quantity;

                position.price =
                    orderPrice;


                if (position.qty === 0) {

                    await PositionsModel.deleteOne({

                        _id: position._id

                    });

                } else {

                    await position.save();

                }
            }


            // =========================
            // SAVE SELL ORDER
            // =========================

            const newOrder = new OrdersModel({

                userId: req.user.id,

                name,

                qty: quantity,

                price: orderPrice,

                mode: "SELL"

            });


            await newOrder.save();


            return res.status(200).json({

                message: "Sell Order Placed Successfully"

            });
        }


        // =========================
        // INVALID MODE
        // =========================

        return res.status(400).json({

            message: "Invalid order mode"

        });


    } catch (err) {

        console.log(err);

        res.status(500).json({

            message: "Internal Server Error"

        });
    }
});


// =========================
// SIGNUP
// =========================

app.post("/signup", async (req, res) => {

    try {

        const {
            username,
            email,
            password
        } = req.body;


        if (!username || !email || !password) {

            return res.status(400).json({

                message: "All fields are required"

            });
        }


        const existingUser =
            await UserModel.findOne({ email });


        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });
        }


        const hashedPassword =
            await bcrypt.hash(password, 10);


        const user = new UserModel({

            username,

            email,

            password: hashedPassword

        });


        await user.save();


        res.status(201).json({

            message: "Signup Successful"

        });


    } catch (err) {

        console.log(err);

        res.status(500).json({

            message: "Internal Server Error"

        });
    }
});


// =========================
// LOGIN
// =========================

app.post("/login", async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        const user =
            await UserModel.findOne({ email });


        if (!user) {

            return res.status(400).json({

                message: "Invalid Credentials"

            });
        }


        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid Credentials"

            });
        }


        const token = jwt.sign(

            {
                id: user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );


        res.status(200).json({

            message: "Login Successful",

            token

        });


    } catch (err) {

        console.log(err);

        res.status(500).json({

            message: "Internal Server Error"

        });
    }
});


// =========================
// START SERVER
// =========================

app.listen(PORT, () => {

    console.log("App started");

    mongoose.connect(uri);

    console.log("db connected");

});
