import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {
        console.log(modelId, modelType, userId);
        if(modelType == 'Tweet') {                    //api/v1/likes/toggle?id=modelId&type=Comment
            var commentable = await this.tweetRepository.get(modelId);
            console.log("inside the model ")
        }
        else if (modelType == 'Comment') {
            var commentable = await this.commentRepository.get(modelId);
            console.log(commentable);
        } else {
            throw new Error('unknown model type');
        }

        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });

        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}
 export default CommentService;

