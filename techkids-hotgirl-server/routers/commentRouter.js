const express = require('express');
const CommentRouter = express.Router();

const CommentModel = require('../models/commentModel');

// "/api/comments" => get all
CommentRouter.get("/",async (req, res) => {
	console.log("Get all image");
    // CommentModel.find({})
    //     .populate("user","name avatar ")
    //     .exec((err, images) => {
	// 	if(err) res.status(500).json({ success: 0, error: err })
	// 	else res.json({ success: 1, images });
    // });
    try {
        const comments = await CommentModel.find({},"name avatar").populate("user");
        res.json({success:1, comments});
    } catch (error) {
        res.status(500).json({success:0, error: error});
    }
});

// get comment by id
CommentRouter.get("/:id", (req, res) => {
	let commentId = req.params.id;
	CommentModel.findById(commentId, (err, commentFound) => {
		if(err) res.status(500).json({ success: 0, message: err })
		else if(!commentFound) res.status(404).json({ success: 0, message: "Not found!" })
		else res.json({ success: 1, user: commentFound });
	});
});

// Create comment
CommentRouter.post("/", (req, res) => {
	console.log(req.body)
	const { user, content } = req.body;
	CommentModel.create({ user, content }, (err, commentCreated) => {
		if(err) res.status(500).json({ success: 0, message: err })
		else res.status(201).json({ success: 1, user: commentCreated });
	});
});

// Edit comment
CommentRouter.put("/:id", async (req, res) => {
	const commentId = req.params.id;
	const { url, content } = req.body;

	// CommentModel.findById(commentId, (err, commentFound) => {
	// 	if(err) res.status(500).json({ success: 0, message: err })
	// 	else if(!commentFound) res.status(404).json({ success: 0, message: "Not found!" })
	// 	else {
	// 		for(key in { url, content }) {
	// 			if(commentFound[key] && req.body[key]) commentFound[key] = req.body[key];
	// 		}

	// 		commentFound.save((err, commentUpdated) => {
	// 			if(err) res.status(500).json({ success: 0, message: err })
	// 			else res.json({ success: 1, comment: commentUpdated });
	// 		});
	// 	};
    // });
    try {
        const commentFound = await CommentModel.findById(commentId);
        if(!commentFound){
            res.status(404).json({success:0, message:"Not found!"});
        }else{
            for(key in {url, content}){
                if(commentFound[key]&& req.body[key]) commentFound[key]= req.body[key];
            }
            let commentUpdated = await commentFound.save();
            res.json({success:1, comments: commentUpdated});
        }
    } catch (error) {
        res.status(500).json({success:0, message:error});
    }
});

// Delete comment => BTVN
CommentRouter.delete("/:id", (req, res) => {
	const commentId = req.params.id;
	CommentModel.remove({ _id: commentId }, (err) => {
		if(err) res.status(500).json({ success: 0, message: err})
		else res.json({ success: 1 });
	});
});

module.exports = CommentRouter;