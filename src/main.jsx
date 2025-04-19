import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap Template CSS Files
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';

// Bootstrap Template JS Files
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendor/apexcharts/apexcharts.min.js'
import './assets/vendor/chart.js/chart.umd.js';
import './assets/vendor/echarts/echarts.min.js';
import './assets/vendor/quill/quill.js';
import './assets/vendor/simple-datatables/simple-datatables.js';
import './assets/vendor/tinymce/tinymce.min.js';
import './assets/vendor/php-email-form/validate.js';
import './assets/js/main.js';

import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

// "bootstrap": "^5.3.3",
