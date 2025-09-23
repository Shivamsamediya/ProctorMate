import Teacher from '../models/teacher.models.js';

// Get all teachers for logged-in admin
export const getTeachers = async (req, res) => {
  try {
    const adminId = req.admin._id;
    const teachers = await Teacher.find({ admin: adminId });
    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ message: 'Failed to fetch teachers' });
  }
};

// Add teacher for logged-in admin
export const addTeacher = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Teacher name required' });

    const adminId = req.admin._id;
    const teacher = new Teacher({ name, admin: adminId });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    console.error('Error adding teacher:', error);
    res.status(500).json({ message: 'Failed to add teacher' });
  }
};

// Delete teacher for logged-in admin
export const deleteTeacher = async (req, res) => {
  try {
    const adminId = req.admin._id;
    const teacher = await Teacher.findOneAndDelete({ _id: req.params.id, admin: adminId });
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json({ message: 'Teacher deleted' });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    res.status(500).json({ message: 'Failed to delete teacher' });
  }
};
