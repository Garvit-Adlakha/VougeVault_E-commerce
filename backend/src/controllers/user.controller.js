import { User } from '../models/user.model.js'; // Correct import
import jwt from 'jsonwebtoken';
// User signup
export const signup = async (req, res) => {
    try {
        const { email, password, fullname } = req.body;
        // Check if user already exists
        let check = await User.findOne({ email });

        if (check) {
            return res.status(400).json({ success: false, error: 'Existing user found with the same email address' });
        }
        // Initialize cart data
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Create a new user
        const user = new User({
            fullname,
            password,
            email,
            cartData: cart,
        });

        // Save the user
        await user.save();

        // Generate token
        const data = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(data, process.env.JWT_SECRET || 'secret_ecom'); // Use env variable for secret
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// User login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user
        let user = await User.findOne({ email });

        if (user) {
            // Check if password is correct
            const passCompare = await user.isPasswordCorrect(password); // Use custom method to compare password

            if (passCompare) {
                // Generate token
                const data = {
                    user: {
                        id: user.id,
                    },
                };

                const token = jwt.sign(data, process.env.JWT_SECRET || 'secret_ecom'); // Use env variable for secret
                res.json({ success: true, token });
            } else {
                res.json({ success: false, error: "Wrong Password" });
            }
        } else {
            res.json({ success: false, error: "Wrong email id" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
