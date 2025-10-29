import "./Logout.css";

export default function Logout() {
  return (
    <div className="logout-page">
      <div className="logout-container">
        <h1>Logout</h1>
        <p>Are you sure you want to log out from your account?</p>

        <div className="logout-buttons">
          <button className="confirm">Yes, Logout</button>
          <button className="cancel">Cancel</button>
        </div>

        <div style={{ marginTop: "30px" }}>
          <img src="/images/Emmvee.png" alt="Emmvee Logo" width="80" />
          <p style={{ fontSize: "0.9rem", color: "#004d40" }}>
            YOUR RELIABLE PARTNER FOR SOLAR ENERGY
          </p>
        </div>
      </div>
    </div>
  );
}
