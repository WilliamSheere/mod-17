import { Router } from 'express';
const router = Router();
import { getAllUsers, getUserById, createUser, deleteUser, updateUser,
// addAssignment,
// removeAssignment,
 } from '../../controllers/userController.js';
// /api/users
router.route('/').get(getAllUsers).post(createUser);
// /api/users/:userId
router.route('/:userId').get(getUserById).delete(deleteUser).put(updateUser);
// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);
// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);
export { router as userRouter };
