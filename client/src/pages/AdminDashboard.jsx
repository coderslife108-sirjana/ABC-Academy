import { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const loadNotices = () => api.get("/notices").then((res) => setNotices(res.data));

  useEffect(() => {
    if (user) loadNotices();
  }, [user]);

  if (!user || (user.role !== "admin" && user.role !== "teacher")) {
    return <Navigate to="/admin-login" replace />;
  }

  const addNotice = async (e) => {
    e.preventDefault();
    await api.post("/notices", { title, date });
    setTitle("");
    setDate("");
    loadNotices();
  };

  const deleteNotice = async (id) => {
    await api.delete(`/notices/${id}`);
    loadNotices();
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard — {user.name} ({user.role})</h2>

      <section>
        <h3>Post a Notice</h3>
        <form onSubmit={addNotice} className="notice-form">
          <input
            type="text"
            placeholder="Notice title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">Post Notice</button>
        </form>
      </section>

      <section>
        <h3>Existing Notices</h3>
        <ul className="admin-notice-list">
          {notices.map((n) => (
            <li key={n._id}>
              <span>{new Date(n.date).toLocaleDateString()} — {n.title}</span>
              {user.role === "admin" && (
                <button onClick={() => deleteNotice(n._id)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
