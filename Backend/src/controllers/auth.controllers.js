import Admin from '../models/admin.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Creating a token function
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token will expire in 30 days
    });
};

export const signupAdmin = async (req, res) => {
    const { collegeName, email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (admin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            collegeName,
            email,
            password: hashedPassword
        });

        await newAdmin.save();

        // Generate JWT token for the new admin
        const token = generateToken(newAdmin._id);

        res.status(201).json({
            message: "Admin created successfully!",
            admin: {
                collegeName: newAdmin.collegeName,
                _id: newAdmin._id,
                email: newAdmin.email,
                token
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token for the logged-in admin
        const token = generateToken(admin._id);

        res.status(200).json({
            message: "Logged in successfully!",
            admin: {
                collegeName: admin.collegeName,
                _id: admin._id,
                email: admin.email,
                token
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
