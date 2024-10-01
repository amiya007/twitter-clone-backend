import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {

    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try {
            const like = await this.Like.findOne(data);
            return like;
        } catch (error) {
            console.log("Something went wrong in like-repository");
            throw {error};
        }
    }
}

export default LikeRepository;
