
import "./singup.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SignupPage() {
    const [swipeR, setSwipeR] = useState(100);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [reset, setReset] = useState(0);
    const [changed, setChanged] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [formData, setFormData] = useState({email: "", password: "", confirm: ""});

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        document.title = "Quizly - Sign Up";
    }, []);

    console.log(formData);

    useEffect(() => {
        const interval = setInterval(() => {

            setChanged(true);
            setSwipeR(swipeR => swipeR - 100);
            setTimeout(() => {
                setChanged(false);
            }, 3000);
        }, 5000);

        return () => {

            clearInterval(interval);

        }
    }, [reset]);


    useEffect(() => {
        if (swipeR === -200) {
            setTimeout(() => {
                setIsTransitioning(false);
                setSwipeR(100);

                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 1500);
        } else if (swipeR === 200) {
            setTimeout(() => {
                setIsTransitioning(false);
                setSwipeR(-100);

                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 1500);
        }

    }, [swipeR]);
    return <>
        <div className="login-container">
            <div className="taglines-container" >
                <Link to="/" ><i className='back-arrow bx bx-arrow-back'></i></Link>
                <div className="parent" style={{ transform: `translateX(${swipeR}%)`, transition: isTransitioning ? "transform 1.5s" : "none" }}>
                    <div className="tagline">
                        <div className="text">
                            <h1>Quiz with Friends!</h1>
                            <p>Follow your friends and favorite creators. Never miss a new challenge!</p>
                        </div>
                        <img src="Quiz with Friends.png" alt="friends" width={250} />
                    </div>
                </div>
                <div className="parent" style={{ transform: `translateX(${swipeR}%)`, transition: isTransitioning ? "transform 1.5s" : "none" }} >
                    <div className="tagline" >
                        <div className="text">
                            <h1>Unleash Your Curiosity!</h1>
                            <p>Explore thousands of quizzes created by people like you. From fun facts to deep dives—there’s something for everyone!</p>
                        </div>
                        <img src="/Unleash Your Curiosity.png" alt="curiosity" width={220} />
                    </div>
                </div>
                <div className="parent" style={{ transform: `translateX(${swipeR}%)`, transition: isTransitioning ? "transform 1.5s" : "none" }}>
                    <div className="tagline">
                        <div className="text">
                            <h1>Be the Quizmaster!</h1>
                            <p>Turn your ideas into fun, interactive quizzes. Share with friends or challenge the world!</p>
                        </div>
                        <img src="/Be the Quizmaster.png" alt="quizmaster" width={220} />
                    </div>
                </div>
                <div className="parent" style={{ transform: `translateX(${swipeR}%)`, transition: isTransitioning ? "transform 1.5s" : "none" }}>
                    <div className="tagline">
                        <div className="text">
                            <h1>Quiz with Friends!</h1>
                            <p>Follow your friends and favorite creators. Never miss a new challenge!</p>
                        </div>
                        <img src="Quiz with Friends.png" alt="friends" width={250} />
                    </div>
                </div>
                <div className="parent" style={{ transform: `translateX(${swipeR}%)`, transition: isTransitioning ? "transform 1.5s" : "none" }} >
                    <div className="tagline" >
                        <div className="text">
                            <h1>Unleash Your Curiosity!</h1>
                            <p>Explore thousands of quizzes created by people like you. From fun facts to deep dives—there’s something for everyone!</p>
                        </div>
                        <img src="/Unleash Your Curiosity.png" alt="curiosity" width={220} />
                    </div>
                </div>
                <div className="arrows">
                    <i className='bx bx-chevron-left right' onClick={() => {
                        if (!changed) {
                            setChanged(true);
                            setSwipeR(swipeR => swipeR + 100);
                            setReset(reset => reset + 1);
                            setTimeout(() => {
                                setChanged(false);
                            }, 1600);
                        }
                    }} ></i>
                    <div className="circle-parent">
                        <div className={swipeR === 100 || swipeR === -200 ? "circle selected-circle" : "circle"}></div>
                        <div className={swipeR === 0 ? "circle selected-circle" : "circle"} ></div>
                        <div className={swipeR === -100 || swipeR === 200 ? "circle selected-circle" : "circle"}></div>
                    </div>
                    <i className="bx bx-chevron-right left" onClick={() => {
                        if (!changed) {
                            setChanged(true);
                            setSwipeR(swipeR => swipeR - 100);
                            setReset(reset => reset + 1);
                            setTimeout(() => {
                                setChanged(false);
                            }, 1600);
                        }
                    }} ></i>
                </div>
            </div>
            <div className="external-form">
                <div className="internal-form">
                    <div className="form-header">
                        <h1 style={{ lineHeight: "4rem" }} >SIGN UP</h1>
                        <p style={{ marginTop: "10px" }}>Already have an account? <Link to="/login">Login here</Link></p>
                    </div>
                    <div className="form-body">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" autoFocus onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input type={showPassword1 ? "text" : "password"} id="password" placeholder="password" name="password" onChange={handleChange} />
                            <i className={showPassword1 ? "bx bx-lock-alt" : "bx bx-lock-open-alt"} onClick={() => {
                                setShowPassword1(!showPassword1);
                            }} ></i>
                        </div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="password-container">
                            <input type={showPassword2 ? "text" : "password"} id="confirm-password" placeholder="password" name="confirm" onChange={handleChange} />
                            <i className={showPassword2 ? "bx bx-lock-alt" : "bx bx-lock-open-alt"} onClick={() => {
                                setShowPassword2(!showPassword2);
                            }} ></i>
                        </div>
                        <button style={{ marginTop: "15px" }}  >Sign up</button>
                    </div>
                    <div className="form-bottom">
                        <div className="or">
                            <p>OR</p>
                        </div>
                        <div className="social-media" style={{ marginTop: "15px" }}>
                            <a href="#" className="google"><img src="/google.png" alt="google image" /> Google</a>
                            <a href="#" className="github"><img src="/github.png" alt="github image" /> Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignupPage;