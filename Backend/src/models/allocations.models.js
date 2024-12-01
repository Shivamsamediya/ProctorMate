import mongoose from 'mongoose';

const allocationSchema = mongoose.Schema({
    date: { type: Date, required: true },
    hall: { type: String, required: true }, // Store hall name directly
    teachers: [{ type: String, required: true }], // Store teacher names directly
}, { timestamps: true });

const Allocation = mongoose.model('Allocation', allocationSchema);

export default Allocation;
