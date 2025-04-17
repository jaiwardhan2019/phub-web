import { useNavigate } from 'react-router-dom';

import pageNotFound from '../assets/img/not-found.svg';

const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = (e) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <main>
      <div className="container">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1>404</h1>
          <h2>The page you are looking for doesn't exist.</h2>
          <button className="btn" onClick={navigateToHome}>
            Back to home
          </button>
          <img
            src={pageNotFound}
            className="img-fluid py-5"
            alt="Page Not Found"
          />
        </section>
      </div>
    </main>
  );
};

export default NotFound;
