import Feature from "../../components/feature/feature";
import NavBar from "../../components/nav-bar/nav-bar";
import "./home-page.css";
import features from "../../components/feature/features";
import { useEffect } from "react";
function HomePage() {

    useEffect(()=>{
        document.title = "Quizly - Home";
    },[])


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
                <Feature image={features[0].image} title={features[0].title} text={features[0].text} action={features[0].action} />
            </div>
        </div>
    )
}

export default HomePage;