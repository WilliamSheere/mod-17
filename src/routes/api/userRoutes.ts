import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  // getStudentById,
   createUser,
  // deleteStudent,
  // addAssignment,
  // removeAssignment,
} from '../../controllers/userController.js';

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/students/:studentId
// router.route('/:studentId').get(getStudentById).delete(deleteStudent);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

export { router as userRouter} ;
