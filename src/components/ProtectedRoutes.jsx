import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ Component }) => {
  const [isLogin, setIsLogin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = async () => {
      try {
        const res = await axios.get("http://localhost:5000/islogin");
        const status = res.data[0].status;
        setIsLogin(status);

        if (!status) {
          navigate("/login");
        }
      } catch (err) {
        console.error("Error checking login status:", err);
      }
    };

    loginStatus();
  }, []);

  if (isLogin === null) return null;

  return <Component />;
};

export default ProtectedRoutes;
