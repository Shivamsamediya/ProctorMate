import Allocation from '../models/allocations.models.js'; // Adjust path if needed

// Allocate Teachers (per admin)
export const allocateTeachers = async (req, res) => {
    const { date, hall, teachers } = req.body;
    const adminId = req.admin._id; // Auth middleware should set req.admin

    // Basic validation
    if (!date || !hall || !teachers || !Array.isArray(teachers)) {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    try {
        const newAllocation = new Allocation({
            admin: adminId,  // link allocation to the admin
            date,
            hall,
            teachers,
        });

        await newAllocation.save();
        res.status(201).json(newAllocation);
    } catch (error) {
        console.error('Error allocating teachers:', error);
        res.status(500).json({ message: 'Error allocating teachers' });
    }
};

// Get Allocations (only for logged-in admin)
export const getAllocations = async (req, res) => {
    try {
        const adminId = req.admin._id;
        const allocations = await Allocation.find({ admin: adminId });
        res.status(200).json(allocations);
    } catch (error) {
        console.error('Error fetching allocations:', error);
        res.status(500).json({ message: 'Error fetching allocations' });
    }
};

// Delete All Allocations (only for logged-in admin)
export const deleteAllocations = async (req, res) => {
    try {
        const adminId = req.admin._id;
        await Allocation.deleteMany({ admin: adminId }); // delete only this admin's allocations
        res.status(200).json({ message: 'All allocations deleted successfully' });
    } catch (error) {
        console.error('Error deleting allocations:', error);
        res.status(500).json({ message: 'Failed to delete allocations' });
    }
};
