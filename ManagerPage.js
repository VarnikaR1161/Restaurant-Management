import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManagerPage.css";
import SalesReport from "./SalesReport"; // ✅ IMPORTING THE SALES REPORT

function ManagerPage() {
  const [managers, setManagers] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const [selectedManager, setSelectedManager] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_URL = "http://localhost:8080/api/managers";

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    try {
      const res = await axios.get(API_URL);
      setManagers(res.data);
    } catch (error) {
      console.error("Error fetching managers:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this manager?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchManagers();
      } catch (error) {
        console.error("Error deleting manager:", error);
      }
    }
  };

  const handleEdit = (manager) => {
    setForm(manager);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put(`${API_URL}/${form.id}`, form);
      } else {
        await axios.post(API_URL, form);
      }
      setForm({
        id: null,
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
      });
      fetchManagers();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNameClick = (manager) => {
    setSelectedManager(manager);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedManager(null);
  };

  const getManagerImage = (manager) => {
    if (manager.gender?.toLowerCase() === "female") {
      return "/manager-images/female.jpg";
    } else if (manager.gender?.toLowerCase() === "male") {
      return "/manager-images/male.png";
    } else {
      return "/manager-images/default.png";
    }
  };

  return (
    <div className="container">
      <h2>Manage Manager</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">{form.id ? "Update" : "Add"} Manager</button>
      </form>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name (Click to View)</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((m, index) => (
              <tr key={m.id}>
                <td>{index + 1}</td>
                <td>
                  <button className="link-btn" onClick={() => handleNameClick(m)}>
                    {m.name}
                  </button>
                </td>
                <td>{m.email}</td>
                <td>{m.phone}</td>
                <td>{m.age}</td>
                <td>{m.gender}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(m)}>✏</button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(m.id)}>🗑</button>
                </td>
              </tr>
            ))}
            {managers.length === 0 && (
              <tr>
                <td colSpan="8" style={{ color: "#999", padding: "20px" }}>
                  No managers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && selectedManager && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img
              src={getManagerImage(selectedManager)}
              alt="Manager"
              className="manager-image"
            />
            <div className="manager-details">
              <p><strong>Name:</strong> {selectedManager.name}</p>
              <p><strong>Email:</strong> {selectedManager.email}</p>
              <p><strong>Phone:</strong> {selectedManager.phone}</p>
              <p><strong>Age:</strong> {selectedManager.age}</p>
              <p><strong>Gender:</strong> {selectedManager.gender}</p>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ SALES REPORT SECTION */}
      <div className="sales-report-section">
        <h2>Sales Report</h2>
        <SalesReport />
      </div>
    </div>
  );
}

export default ManagerPage;
