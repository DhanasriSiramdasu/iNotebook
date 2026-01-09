const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const fetchuser=require('../middleware/fetchuser');

const JWT_SECRET = "dhana@dhana";

//ROUTE-1 creating the api key to create user i.e http://localhost:5000/api/auth/createuser
router.post('/createuser',
    [body('name'),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = await User.findOne({ email: req.body.email });
        //checking the unique email,if exists it sends bad request
        if (user) {
            return res.status(400).json({ error: "The email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        try {
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json(authtoken);
        }
        //this catch is for if if we use userd.create method above then it gives error so to handle that
        catch (err) {
            console.log(err)
            res.status(500).send("Some error occurred");
        }
    });

//ROUTE-1.1 updating password i.e http://localhost:5000/api/auth/updatepassword
router.put('/updatepassword', fetchuser, async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await User.findById(req.user.id);

        const comparePassword = await bcrypt.compare(oldPassword, user.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "Incorrect old password" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(newPassword, salt);

        user.password = secPass;
        await user.save();

        res.json({ success: true, message: "Password updated successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});



//ROUTE-2 creating the api key for login i.e http://localhost:5000/api/auth/login
router.post('/login',
    [body('email', 'Please enter a valid email').isEmail(),
    body('password', 'please enter the correct password').exists()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { email, password } = req.body;
        let success=false;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "please try to login with corresct email" });
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({ error: "The password is incorrect! Please try to login with correct password" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success=true;
            return res.json({ success,authtoken });
            if(success){
                console.log("logged in successfully");
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send("Internal server error occurred");
        }
    });

//ROUTE-3 Get logged in user details by using authtoken i.e http://localhost:5000/api/auth/getuser
router.post('/getuser', fetchuser, async (req,res)=>{
try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (err) {
    console.log(err)
    res.status(500).send("Internal server error occurred");
}});
module.exports = router