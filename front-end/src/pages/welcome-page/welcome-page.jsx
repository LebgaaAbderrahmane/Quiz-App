import Feature from "../../components/feature/feature";
import NavBar from "../../components/nav-bar/nav-bar";
import "./welcome-page.css";
import features from "../../components/feature/features";
import { useEffect, useState} from "react";
import CallToAction from "../../components/Call To Action Section/call-to-action";
function WelcomePage() {
    const currentYear = new Date().getFullYear();
    const [visible, setvisible] = useState(false);
    const [lastScrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll  = ()=>{
            if(window.scrollY > lastScrollY ){
                setvisible(true);  
            }else {
                setvisible(false);
            }
            setScrollY(window.scrollY);
        }

        // window.scrollTo(0, window.innerHeight);

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);

    },[lastScrollY]);

    

    return (
        <div className="welcome-page">
            <NavBar visible={visible} />
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
            <CallToAction title="Start Creating Your Quizzes Today" text="Unleash your creativity and engage others by crafting unique quizzes that challenge and entertain." image={"question.jpg"} />
            <CallToAction title="Discover Exciting Quizzes Today!" text="Dive into a world of engaging quizzes created by fellow users. Unleash your curiosity and challenge yourself with a variety of topics!" image={"question2.jpg"} />
            {/* <CallToAction title= "Share Quizzes, Boost Interaction!" text="Invite your friends to join the fun and discover new quizzes together!" image={"question3.jpg"} /> */}
            <footer>
                <div className="footer-container">
                    <div className="news-letter">
                        <img src="/Quizly.png" width={80} />
                        <p>Subscribe to our newsletter for the latest features and updates.</p>
                        <div className="input-container">
                            <input type="text" placeholder="Your Email here" />
                            <button>Join</button>
                        </div>
                        <p id="policy" >By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
                    </div>
                    <div className="links quick-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home Page</a></li>
                            <li><a href="#">Explore Quizzes</a></li>
                            <li><a href="#">User Profiles</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="links Connect">
                        <h4>Connect With Us</h4>
                        <ul>
                            <li><a href="#">Blog Posts</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Kit</a></li>
                        </ul>
                    </div>

                    <div className="links follow">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#"><i className='bx bxl-facebook'></i>Facebook</a></li>
                            <li><a href="#"><i className='bx bxl-instagram' ></i>Instagram</a></li>
                            <li><a href="#"><i className="bi bi-twitter-x"></i>X</a></li>
                            <li><a href="#"><i className='bx bxl-linkedin'></i>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="rights">
                    <p>&copy; {currentYear} Innovex. All rights reserved.</p>
                    <div className="privacy-links">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Settings</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default WelcomePage;