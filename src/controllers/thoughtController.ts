import { Request, Response } from 'express';
import { Thought, User} from '../models/index.js';

/**
 * GET All Courses /courses
 * @returns an array of Courses
*/
export const getAllThoughts = async(_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch(error: any){
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Course based on id /course/:id
 * @param string id
 * @returns a single Course object
*/
export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if(thought) {
        res.json(thought);
      } else {
        res.status(404).json({
          message: 'Thought not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  /**
 * POST Course /courses
 * @param object username
 * @returns a single Course object
*/
export const createThought = async (req: Request, res: Response) => {

	try {
		const newThought = await Thought.create(req.body);
        // add the thought to the user
        const user= await User.findOneAndUpdate(
            {
                username: req.body.username
            },
            {
                $push:{thoughts:newThought._id}
            },
            {
               new:true 
            }
        )
        if(!user){
            res.status(404).json({
                message:"Could not find user."
            })
        }
		res.status(201).json(newThought);
	} catch (error: any) {
		res.status(400).json({
			message: error.message,
		});
	}
};

/**
 * PUT Course based on id /courses/:id
 * @param object id, username
 * @returns a single Course object
*/
export const updateThought = async (req: Request, res: Response) => {
	try {
		const course = await Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		);

		if (!course) {
			res.status(404).json({ message: "No course with this id!" });
		}

		res.json(course);
	} catch (error: any) {
		res.status(400).json({
			message: error.message,
		});
	}
};

  /**
 * DELETE Course based on id /courses/:id
 * @param string id
 * @returns string 
*/
export const deleteThought = async (req: Request, res: Response) => {
    try {
      const course = await Thought.findOneAndDelete({ _id: req.params.thoughtId});
      
      if(!course) {
        res.status(404).json({
          message: 'No course with that ID'
        });
      } 
      res.json(course)
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  export const createReaction = async (req: Request, res: Response) => {
		try {
			const course = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $push: {reactions:req.body} },
				{ runValidators: true, new: true }
			);

			if (!course) {
				res.status(404).json({ message: "No course with this id!" });
			}

			res.json(course);
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	};
    export const deleteReaction = async (req: Request, res: Response) => {
			try {
				const course = await Thought.findOneAndUpdate(
					{ _id: req.params.thoughtId },
					{ $pull: { reactions: {reactionId:req.body.reactionId}} },
					{ runValidators: true, new: true }
				);

				if (!course) {
					res.status(404).json({ message: "No course with this id!" });
				}

				res.json(course);
			} catch (error: any) {
				res.status(400).json({
					message: error.message,
				});
			}
		};
