// backend/models/Vet.js
import mongoose from 'mongoose';

const vetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  phone: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Vet', vetSchema);