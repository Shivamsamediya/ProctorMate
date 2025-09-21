import mongoose from 'mongoose';

const hallSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true }
});

export default mongoose.model('Hall', hallSchema);