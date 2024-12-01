import Allocation from '../models/allocations.models.js'; // Adjust the import path as necessary

// Allocate Teachers
export const allocateTeachers = async (req, res) => {
    const { date, hall, teachers } = req.body;

    // Basic validation
    if (!date || !hall || !teachers || !Array.isArray(teachers)) {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    try {
        // Create the new allocation with plain hall and teacher data
        const newAllocation = new Allocation({
            date,
            hall,
            teachers, // Here, teachers is an array of strings (names)
        });

        await newAllocation.save();
        res.status(201).json(newAllocation);
    } catch (error) {
        console.error('Error allocating teachers:', error);
        res.status(500).json({ message: 'Error allocating teachers' });
    }
};

// Get Allocations
export const getAllocations = async (req, res) => {
    try {
        // Find all allocations directly
        const allocations = await Allocation.find({});
        res.status(200).json(allocations);
    } catch (error) {
        console.error('Error fetching allocations:', error);
        res.status(500).json({ message: 'Error fetching allocations' });
    }
};

// Delete All Allocations
export const deleteAllocations = async (req, res) => {
    try {
        await Allocation.deleteMany({}); // Delete all allocations
        res.status(200).json({ message: 'All allocations deleted successfully' });
    } catch (error) {
        console.error('Error deleting allocations:', error);
        res.status(500).json({ message: 'Failed to delete allocations' });
    }
};
