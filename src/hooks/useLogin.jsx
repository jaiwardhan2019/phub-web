import { useState } from 'react';
import axios from 'axios';

import { baseURL } from '../constants';
import { useAuth } from '../context/AuthContext';

const useLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const performLogin = async (email, password) => {
    setLoading(true);

    try {
      const response = await axios.post(`${baseURL}/validate-admin-account`, {
        loginName: email,
        password,
      });

      if (response.status === 200 && response.data?.data?.logonStatus) {
        const { data } = response.data;

        const { adminAccount, bearerToken } = data;

        setUserData({
          ...adminAccount,
          token: bearerToken,
        });

        login(bearerToken, ...adminAccount);
      } else {
        setError(response.data?.message || 'Login failed!');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed!');
    } finally {
      setLoading(false);
    }
  };

  return { performLogin, loading, error, userData };
};

export default useLogin;
