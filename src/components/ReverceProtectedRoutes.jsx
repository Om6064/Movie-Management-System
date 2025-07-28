import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ReverceProtectedRoutes = ({Component}) => {
    const [isLogin, setIsLogin] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = async () => {
            const res = await axios.get("http://localhost:5000/islogin");
            const status = res.data[0].status;
            setIsLogin(status);

            if (status) {
                navigate("/dashboard");
            }
        };

        loginStatus();
    }, []);

    if (isLogin === null) return null;

    return <Component />;
}

export default ReverceProtectedRoutes