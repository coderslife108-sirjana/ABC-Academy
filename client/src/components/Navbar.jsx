import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";

const links = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Notices", path: "/notices" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand" aria-label="ABC Academy home">
            <span className="brand-logo" aria-hidden="true">ABC</span>
            <span>
              <span className="brand-name">ABC Academy</span>
              <span className="brand-address">Murshidabad, West Bengal</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            {user ? (
              <>
                {user.role === "admin" && <Link to="/admin/dashboard">Dashboard</Link>}
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/teacher-login">Teacher login</Link>
                <Link to="/admin-login">Admin login</Link>
              </>
            )}
            <Link to="/contact" className="header-cta">Get in touch</Link>
          </div>
          <button
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true">&#9776;</span>
          </button>
        </div>
      </header>

      {open && (
        <>
          <button className="menu-backdrop" onClick={closeMenu} aria-label="Close menu" />
          <aside className="menu-panel" id="mobile-menu" aria-label="Mobile navigation">
            <div className="menu-header">
              <h2>Explore ABC Academy</h2>
              <button onClick={closeMenu} aria-label="Close menu">&times;</button>
            </div>
            <nav>
              {links.map((link) => (
                <NavLink key={link.path} to={link.path} end={link.path === "/"} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="menu-actions">
              {user ? (
                <>
                  {user.role === "admin" && (
                    <Link to="/admin/dashboard" onClick={closeMenu}>Admin Dashboard</Link>
                  )}
                  <button onClick={() => { logout(); closeMenu(); }}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/teacher-login" className="btn-primary" onClick={closeMenu}>Teacher Login</Link>
                  <Link to="/admin-login" onClick={closeMenu}>Admin Login</Link>
                </>
              )}
              <Link to="/contact" onClick={closeMenu}>Contact the school</Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
