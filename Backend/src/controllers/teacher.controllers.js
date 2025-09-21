import Teacher from '../models/teacher.models.js';

export const getTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

export const addTeacher = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Teacher name required' });
  const teacher = new Teacher({ name });
  await teacher.save();
  res.status(201).json(teacher);
};

export const deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: 'Teacher deleted' });
};