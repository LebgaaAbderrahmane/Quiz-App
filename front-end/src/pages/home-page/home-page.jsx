import Feature from "../../components/feature/feature";
import NavBar from "../../components/nav-bar/nav-bar";
import "./home-page.css";
import features from "../../components/feature/features";
import { useEffect } from "react";
function HomePage() {

    useEffect(() => {
        document.title = "Quizly - Home";
    }, [])


    return (
        <div className="home-page">
            <NavBar />
            <div className="hero-section">
                <div className="text-container">
                    <div className="text">
                        <h2>Unlock Your Potential: Discover the Benefits of Using Quizly Today!</h2>
                        <p>Quizly enhances your knowledge through engaging quizzes that challenge your mind.
                            Connect with friends and fellow quiz enthusiasts while having a blast!</p>
                        <ul>
                            <li><img src="/rocket.png" />Boost your knowledge with fun and interactive quizzes.</li>
                            <li><img src="/molecule.png" />Connect with others and share your quiz experiences.</li>
                            <li><img src="/face.png" />Enjoy learning in a playful and engaging environment.</li>
                        </ul>
                    </div>
                </div>
                <div className="image">
                    <img src="/Unleash Your Curiosity.png" alt="Unleash Your Curiosity Image" />
                </div>
            </div>
            <div className="feature-section">
                <div className="title">
                    <h2>Unlock Your Creativity: Create Engaging Quizzes with Quizly</h2>
                </div>
                <div className="feature-container">
                    {
                        features.map((feature, index) => {
                            return <Feature key={index} image={feature.image} title={feature.title} text={feature.text} action={feature.action} />
                        })
                    }
                </div>
            </div>
            <div className="cta">
                <div className="text">
                    <h3>Share Quizzes, Boost Interaction!</h3>
                    <p>Invite your friends to join the fun and discover new quizzes together!</p>
                    <div className="buttons">
                        <button>Share</button>
                        <button>Invite</button>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default HomePage;