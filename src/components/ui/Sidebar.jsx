import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {/* End Dashboard Nav */}

        <li className="nav-item">
          <Link className="nav-link " to="/create-user">
            <i className="bi bi-grid"></i>
            <span>Create User</span>
          </Link>
        </li>
        {/* End Create User Nav */}
      </ul>
    </aside>
  );
};

export default Sidebar;
