import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB().then(() => {
  console.log(`db connected`)
}).catch((error) => {console.log(`Error message : ${error}`)})

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
