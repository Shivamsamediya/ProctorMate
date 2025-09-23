import mongoose from 'mongoose';

const hallSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

export default mongoose.model('Hall', hallSchema);