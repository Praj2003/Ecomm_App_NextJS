import ConnectDB from "@/lib/connectDB";
import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await ConnectDB();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email is required!" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Data found!", info: user },
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { error: "Database error occurred!", details: err.message },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  try {
    await ConnectDB();

    const body = await req.json();

    const {
      username,
      email,
      profilepic,
      coverpic,
      razorpayid,
      razorpaysecret,
    } = body;

    const updatedUser = await UserModel.findOneAndUpdate(
      { email },
      { username, profilepic, coverpic, razorpayid, razorpaysecret },
      { new: true, upsert: true }
    );

    return NextResponse.json({
      message: "User Updated Successfully",
      info: updatedUser,
    });
  } catch (err) {
    console.log(err);
  }
};
