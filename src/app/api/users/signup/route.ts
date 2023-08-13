import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'

connect()


export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { username, email, password } = reqBody

    const user = await User.findOne({ email })

    if (user) {
      return NextResponse.json({ error: "User already exists," }, { status: 400 })
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPasswod = await bcryptjs.hash(password, salt)
    const newUser = new User({
      username, email, password: hashedPasswod,
    })
    const savedUser = await newUser.save()
    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser,
    }, { status: 201 })

  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}

