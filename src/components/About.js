import React, { useEffect, useState, useContext } from "react";
import NoteContext from "../context/noteContext";

const About = () => {
  const { notes } = useContext(NoteContext);
  const [userData, setUserData] = useState(null);

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("https://inotebook-backend-f46v.onrender.com/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const response = await fetch("https://inotebook-backend-f46v.onrender.com/api/auth/updatepassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(passwords),
    });

    const json = await response.json();

    if (json.success) {
      setMessage("✔ Password updated successfully!");
      setPasswords({ oldPassword: "", newPassword: "" });
    } else {
      setMessage(`❌ ${json.error || "Something went wrong"}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const onChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      {!userData ? (
        <h4>Loading profile...</h4>
      ) : (
        <div className="card shadow p-4 text-center" style={{ width: "380px" }}>
          <h2>👤 Profile</h2>

          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Joined:</strong> {new Date(userData.date).toLocaleDateString()}</p>

          <hr />
          <p><strong>Total Notes:</strong> {notes.length}</p>

          <hr />
          <h4 className="mt-3">🔐 Change Password</h4>

          <form onSubmit={handleChangePassword}>
            <input
              type="password"
              name="oldPassword"
              className="form-control my-2"
              placeholder="Enter Old Password"
              value={passwords.oldPassword}
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="newPassword"
              className="form-control"
              placeholder="Enter New Password"
              value={passwords.newPassword}
              onChange={onChange}
              required
            />

            {message && <p className="mt-2">{message}</p>}

            <button className="btn text-white mt-3 w-100" style={{ backgroundColor: "#103725" }}>
              Update Password
            </button>
          </form>

          <button
            className="btn text-white mt-3 w-100"
            style={{ backgroundColor: "#103725" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
