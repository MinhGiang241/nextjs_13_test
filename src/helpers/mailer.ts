import nodemailer from 'nodemailer'
import User from '@/models/userModels'
import bcryptjs from 'bcryptjs'

export const sendMail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10)

    if (emailType === 'VERIFY') {

      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000
      })
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000
      })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });

    let mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      text: `wellome to my app`,
      html: `<p>Click<a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}"></a></p>`
    };
    const mailResponse = await transporter.sendMail(mailOptions)
    return mailResponse

  } catch (error: any) {
    throw new Error(error.message)
  }
}
