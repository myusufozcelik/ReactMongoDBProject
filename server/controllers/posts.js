import PostMessage from '../models/postMessage.js'
import CustomError from "../models/CustomError.js"

export const getPosts = async (req, res, next) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        //res.status(404).json(next(new CustomError(error.message)))
         next(new CustomError(error, 400));
    }
}

export const createPost = async (req, res, next) => {
    const body = req.body;  
    const newPost = new PostMessage(post);
  
    try {
        await newPost.save();

        res.status(201).json(newPost);
   } catch (error) {
       next(new CustomError(error, 409));
   }
}