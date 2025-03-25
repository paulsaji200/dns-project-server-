import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [menuItemSchema],
});

export const Menu = mongoose.model('Menu', menuSchema);
