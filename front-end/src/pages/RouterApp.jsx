import LoginPage from './login-page/login-page'
import SignupPage from './signup-page/signup-page'
import {Routes, Route} from 'react-router-dom';
import WelcomePage from './welcome-page/welcome-page';
import HomePage from './home-page/home-page';
function RouterApp(){

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>

    )

}

export default RouterApp;