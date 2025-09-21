import Hall from '../models/hall.models.js';

export const getHalls = async (req, res) => {
  const halls = await Hall.find();
  res.json(halls);
};

export const addHall = async (req, res) => {
  const { number } = req.body;
  if (!number) return res.status(400).json({ message: 'Hall number required' });
  const hall = new Hall({ number });
  await hall.save();
  res.status(201).json(hall);
};

export const deleteHall = async (req, res) => {
  await Hall.findByIdAndDelete(req.params.id);
  res.json({ message: 'Hall deleted' });
};