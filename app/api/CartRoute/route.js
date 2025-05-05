"use server";
import { NextResponse } from "next/server";
import ConnectDB from "@/lib/connectDB";
import CartModel from "@/models/CartModel";

export const POST = async (req) => {
  try {
    await ConnectDB();

    const body = await req.json();

    const { name, brand, price, quantity } = body;

    if (!name || !brand || !price) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const existingItem = await CartModel.findOne({ name });

    if (existingItem) {
      return NextResponse.json(
        {
          message: "Item already exists in the cart",
        },
        { status: 400 }
      );
    }

    const newItem = await new CartModel({
      name,
      brand,
      price,
      quantity,
    });

    await newItem.save();

    return NextResponse.json(
      {
        message: "Item has been added to the cart successfully",
      },
      { data: newItem }
    );
  } catch (err) {
    console.log(err);
  }
};

export const DELETE = async (req) => {
  try {
    await ConnectDB();

    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    if (!name) {
      return NextResponse.json(
        { error: "Product of given name is not found" },
        { status: 404 }
      );
    }

    const deletedItem = await CartModel.findOneAndDelete({ name: name });

    return NextResponse.json(
      { message: "Item has been deleted successfully" },
      { data: deletedItem }
    );
  } catch (err) {
    console.log(err);
  }
};

export const GET = async (req) => {
  try {
    await ConnectDB();

    const cartItems = await CartModel.find();

    return NextResponse.json({ data: cartItems }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
};

export const PUT = async (req) => {
  try {
    await ConnectDB();
    const body = await req.json();
    const { _id ,action} = body;

    if (!_id) {
      return NextResponse.json(
        { error: "Product of given id is not found" },
        { status: 404 }
      );
    }

    const increament = action === "increase" ? 1 : -1;

    const updatedItem = await CartModel.findByIdAndUpdate(
      _id,
      { $inc: { quantity: increament } },
      { new: true }
    );

    return NextResponse.json(
      { message: "Item has been updated successfully" },
      { data: updatedItem }
    );
  } catch (err) {
    console.log(err);
  }
};


