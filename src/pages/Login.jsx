import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../hooks';

import logo from '../assets/img/logo.png';
import TopBarLoader from '../components/ui/TopBarLoader';

const Login = () => {
  const { performLogin, loading, error, userData } = useLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
  if (!error && userData) {
      navigate('/dashboard', { replace: true });
    }
  }, [error, userData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await performLogin(email, password);
  };

  return (
    <main>
      <TopBarLoader loading={loading} />
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src={logo} alt="Company Logo" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>
                {/* End logo */}

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your email & password to login
                      </p>
                    </div>
                    {/* End header */}

                    {error && (
                      <div className="pt-1 pb-1 alert alert-danger">
                        <p className="text-center small mt-1 mb-1">{error}</p>
                      </div>
                    )}
                    {/* End Error section */}

                    {/* Login form */}
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          {/* <span className="input-group-text" id="inputGroupPrepend">
                            @
                          </span> */}
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your email.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      {/* <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                      {/* <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{' '}
                          <a href="pages-register.html">Create an account</a>
                        </p>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
