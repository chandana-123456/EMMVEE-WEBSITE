import React from "react";
import "./Contact.css";

export default function Contact() {
  const offices = [
    {
      name: "Emmvee Photovoltaic Power Limited",
      address:
        "#13/1, International Airport Road, Bettahalasur Post, Bengaluru – 562 157, India",
      email: "info@emmvee.in",
      phone: "+91 80 2217 4333",
    },
    {
      name: "Emmvee Solar Systems Private Limited",
      address:
        "No. 55 Solar Tower, 6 Main, 11 Cross, Lakashmaiah Block, Ganganagar, Bengaluru, Karnataka 560 024, India",
      email: "info@emmvee.in",
      phone: "+91 80 2217 4333",
    },
    {
      name: "Emmvee Technologies Private Limited",
      address:
        "No. 55 Solar Tower, 6 Main, 11 Cross, Lakashmaiah Block, Ganganagar, Bengaluru, Karnataka 560 024, India",
      email: "info@emmvee.in",
      phone: "+91 80 2217 4333",
    },
    {
      name: "Emmvee Green Power Private Limited",
      address:
        "No. 55 Solar Tower, 6 Main, 11 Cross, Lakashmaiah Block, Ganganagar, Bengaluru, Karnataka 560 024, India",
      email: "info@emmvee.in",
      phone: "+91 80 2217 4333",
    },
  ];

  return (
    <div className="contact">
      <div className="contact-header">
        <img
          src="/images/emmvee-logo.png"
          alt="Emmvee Logo"
          className="contact-logo"
        />
        <h1>Registered Offices</h1>
      </div>

      <div className="contact-grid">
        {offices.map((office, index) => (
          <div key={index} className="contact-card">
            <div className="contact-title">
              <i className="fa-solid fa-house contact-icon"></i>
              <h3>{office.name}</h3>
            </div>
            <p>{office.address}</p>
            <div className="contact-info">
              <p>
                <i className="fa-solid fa-envelope"></i> {office.email}
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> {office.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
