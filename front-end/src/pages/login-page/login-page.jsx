import "./login-page.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function LoginPage() {
    const [swipeR, setSwipeR] = useState(100);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [reset, setReset] = useState(0);
    const [changed, setChanged] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = "Quizly - Login";
    }, []);

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
            <div className="external-form">
                <Link to="/" ><i className='back bx bx-arrow-back'></i></Link>
                <div className="internal-form">
                    <div className="form-header">
                        <h1>LOGIN</h1>
                        <p>Don't have an account? <Link to="/signup">Create now</Link></p>
                    </div>
                    <div className="form-body">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" autoFocus />
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="password" />
                            <i className={showPassword ? "bx bx-lock-alt" : "bx bx-lock-open-alt"} onClick={() => {
                                setShowPassword(!showPassword);
                            }} ></i>
                        </div>
                        <div className="remember-forgot">
                            <label htmlFor="remember">
                                <input type="checkbox" name="remember" id="remember" />
                                Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button>Login</button>
                    </div>
                    <div className="form-bottom">
                        <div className="or">
                            <p>OR</p>
                        </div>
                        <div className="social-media">
                            <a href="#" className="google"><img src="/google.png" alt="google image" /> Google</a>
                            <a href="#" className="github"><img src="/github.png" alt="github image" /> Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="taglines-container" >
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
        </div>
    </>
}

export default LoginPage;

