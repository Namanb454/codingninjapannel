import { compare } from "bcrypt";
import { comparePassword, hashPassword } from "../helpers/authHelper.js"
// import userModel from "../models/userModel.js"
import eventModel from "../models/eventModel.js";
import JWT from 'jsonwebtoken'


export const registerController = async (req, res) => {
    try {
        const { title, date } = req.body
        //validation
        if (!title) {
            return res.send({ message: "Title is Required" })
        }
        if (!date) {
            return res.send({ message: "Date is Required" })
        }
        // if (!password) {
        //     return res.send({ message: "Password is Required" })
        // }
        // if (!phone) {
        //     return res.send({ message: "Phone is Required" })
        // }
        // if (!address) {
        //     return res.send({ message: "Address is Required" })
        // }

        //check user
        // const existingUser = await userModel.findOne({ email })
        //existing user
        // if (existingUser) {
        //     return res.status(200).send({
        //         success: false,
        //         message: 'Already Register please login',
        //     })
        // }
        //register user
        // const hashedPassword = await hashPassword(password)
        //save
        const event = await new eventModel({ title, date }).save()

        res.status(201).send({
            success: true,
            message: "Event Created Successfully",
            event,
        })

    }


    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};


//POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        // check
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registred'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password',
            })
        }
        // token 
        const token = await JWT.sign({ _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7D' });
        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    }

    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }
};

// test Controller 
export const testController = (req, res) => {
    res.send('Protected Route');
}