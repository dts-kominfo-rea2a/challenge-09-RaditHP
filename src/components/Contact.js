// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <>
      <div>
        <div className="contact-card">
          <img src={props.data.photo} class="profile-pic" alt="prof" />
          <div class="details">
            <p class="name">{props.data.name}</p>
            <p class="phone">{props.data.phone}</p>
            <p class="email">{props.data.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
