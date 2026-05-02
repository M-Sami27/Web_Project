import React, { useContext } from 'react';
import styles from './Login.module.css';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { setLogin, setUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userData = {
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            };

            // save in context
            setUserInfo(userData);
            setLogin(true);

            // save in localStorage
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("userInfo", JSON.stringify(userData));

            // redirect
            navigate('/dashboard');

        } catch (err) {
            console.log(err);
            alert("Login Failed");
        }
    };

    return (
        <div className={styles.Login}>
            <div className={styles.loginCard}>

                <div className={styles.loginCardTitle}>
                    <h2>Login</h2>
                    <VpnKeyIcon />
                </div>

                <div className={styles.googleBtn} onClick={handleLogin}>
                    <GoogleIcon sx={{ fontSize: 20, color: "red" }} />
                    Sign in with Google
                </div>

            </div>
        </div>
    );
};

export default Login;