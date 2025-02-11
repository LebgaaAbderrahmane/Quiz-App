import Feature from '../components/feature/feature';
import HomePage from './home-page/home-page';
import LoginPage from './login-page/login-page'
import SignupPage from './signup-page/signup-page'
import {Routes, Route} from 'react-router-dom';
function RouterApp(){

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/feature" element={<Feature />} /> 
        </Routes>

    )

}

export default RouterApp;