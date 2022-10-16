import { useState } from "react";
import { httpClient } from "../util/http-client";
import Swal from "sweetalert2";

export default function Newsletter() {
  const defaultUserDetails = {
    name: "",
    email: "",
  };
  const [userDetails, setUserDetails] = useState(defaultUserDetails);

  const sendNewsLetter = async () => {
    const { data } = await httpClient.post(`$/{}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendNewsLetter();
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section id="contactUs" className="page-section-padding">
      <h2 className="page-section-header">Subscribe to our Newsletter </h2>
      <form onSubmit={handleSubmit} className="Home-contact-form">
        <div>
          <label htmlFor="first-name" className="Home-contact-form-label">
            Your Name
          </label>
          <input
            value={userDetails.name}
            onChange={handleChange}
            name="name"
            id="first-name"
            className="Home-contact-form-input"
            type="text"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="email" className="Home-contact-form-label">
            Your E-mail
          </label>
          <input
            id="email"
            value={userDetails.email}
            onChange={handleChange}
            name="email"
            className="Home-contact-form-input"
            type="email"
          />
        </div>
        <div className="md:col-span-2">
          <button className="Home-contact-form-button" type="submit">
            Subscribe!
          </button>
        </div>
      </form>
    </section>
  );
}
