import MsgNot from "../notification/message-notification/msg-not";
import "./post.css";

function Post() {

    return (
        <div className="post-container" >
            <div className="header">
                <MsgNot image="person.png" username="Username" msg="2/11/2025" />
                <div className="unfollow-mask">
                    <p>Unfollow</p>
                    <i className="bi bi-x-lg"></i>
                </div>
            </div>
            <img src="/quiz-post1.jpg" width={480} />
            <div className="description">
                <div className="title-difficulty">
                    <h2>Quiz Title Here</h2>
                    <p>Medium</p>
                </div>
                <p id="description-text" >
                    Lorem ipsum dolor sit amet consectetur. Duis ipsum gravida neque amet in viverra.
                    Amet fermentum suscipit ultricies quam urna vitae.
                </p>
                <div className="category-timer">
                    <div className="category">
                        <p>Category</p>
                        <p>Category</p>
                        <p>Category</p>
                    </div>
                    <p>Timer: 10min</p>
                </div>
                <div className="reactions">
                    <p><i className="bi bi-heart"></i> 1.5K</p>
                    <p><i className="bi bi-heart" id="dislike" ></i>45</p>
                    <p><i className="bi bi-chat"></i>905</p>
                    <p><i className="bi bi-send"></i>120</p>
                    <p><i className="bi bi-bookmark-plus"></i>30</p>
                </div>
                <button>Solve</button>
            </div>
        </div>
    )
}

export default Post;