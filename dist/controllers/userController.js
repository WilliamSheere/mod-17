// import { ObjectId } from "mongodb";
import { User } from "../models/index.js";
// Aggregate function to get number of students overall
// export const headCount = async () => {
//     const numberOfStudents = await Student.aggregate()
//         .count('studentCount');
//     return numberOfStudents;
// }
// Aggregate function for getting the overall grade using $avg
// export const grade = async (studentId: string) =>
//     Student.aggregate([
//         // only include the given student by using $match
//         { $match: { _id: new ObjectId(studentId) } },
//         {
//             $unwind: '$assignments',
//         },
//         {
//             $group: {
//                 _id: new ObjectId(studentId),
//                 overallGrade: { $avg: '$assignments.score' },
//             },
//         },
//     ]);
/**
 * GET All Students /students
 * @returns an array of Students
 */
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
/**
 * GET Student based on id /students/:id
 * @param string id
 * @returns a single Student object
 */
export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const student = await User.findById(userId)
            .populate('thoughts');
        res.json(student);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const updateUser = async (req, res) => {
    try {
        const course = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true });
        res.json(course);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
/**
 * POST Student /students
 * @param object student
 * @returns a single Student object
 */
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
/**
 * DELETE Student based on id /students/:id
 * @param string id
 * @returns string
 */
export const deleteUser = async (req, res) => {
    try {
        const student = await User.findOneAndDelete({ _id: req.params.userId });
        if (!student) {
            return res.status(404).json({ message: 'No such student exists' });
        }
        // const course = await User.findOneAndUpdate(
        //     { students: req.params.studentId },
        //     { $pull: { students: req.params.studentId } },
        //     { new: true }
        // );
        // if (!course) {
        //     return res.status(404).json({
        //         message: 'Student deleted, but no courses found',
        //     });
        // }
        return res.json({ message: 'Student successfully deleted' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
