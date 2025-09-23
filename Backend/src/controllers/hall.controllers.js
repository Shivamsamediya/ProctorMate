import Hall from '../models/hall.models.js';

// Get all halls for logged-in admin
export const getHalls = async (req, res) => {
  try {
    const adminId = req.admin._id;
    const halls = await Hall.find({ admin: adminId });
    res.json(halls);
  } catch (error) {
    console.error('Error fetching halls:', error);
    res.status(500).json({ message: 'Failed to fetch halls' });
  }
};

// Add hall for logged-in admin
export const addHall = async (req, res) => {
  try {
    const { number } = req.body;
    if (!number) return res.status(400).json({ message: 'Hall number required' });

    const adminId = req.admin._id;
    const hall = new Hall({ number, admin: adminId });
    await hall.save();
    res.status(201).json(hall);
  } catch (error) {
    console.error('Error adding hall:', error);
    res.status(500).json({ message: 'Failed to add hall' });
  }
};

// Delete hall for logged-in admin
export const deleteHall = async (req, res) => {
  try {
    const adminId = req.admin._id;
    const hall = await Hall.findOneAndDelete({ _id: req.params.id, admin: adminId });
    if (!hall) return res.status(404).json({ message: 'Hall not found' });
    res.json({ message: 'Hall deleted' });
  } catch (error) {
    console.error('Error deleting hall:', error);
    res.status(500).json({ message: 'Failed to delete hall' });
  }
};
