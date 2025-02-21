import SideBar from "../../components/side-bar/side-bar";
import Notification from "../../components/notification/notification";
import "./home-page.css";
import Post from "../../components/post/post";
import Footer from "../../components/footer/footer";

function HomePage() {


    return <div className="home-page" >
        <SideBar />
        <div className="posts-sction">
            <div className="create-quizz-section">
                <h3>Turn Ideas into Quizzes, Fun into Learning! 🎓</h3>
                <button>Create Your Quiz Now</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Footer />
        </div>

        <Notification />
    </div>
}

export default HomePage;