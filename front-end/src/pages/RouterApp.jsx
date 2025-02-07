import LoginPage from './login-page/login-page'
import SignupPage from './signup-page/signup-page'
import {Routes, Route} from 'react-router-dom';
function RouterApp(){

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>

    )

}

export default RouterApp;