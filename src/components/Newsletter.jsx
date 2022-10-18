import { useState } from "react";
import { httpClient } from "../util/http-client";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Newsletter() {
  const defaultUserDetails = {
    name: "",
    email: "",
  };
  const [userDetails, setUserDetails] = useState(defaultUserDetails);
  const [loading, setLoading] = useState(false);

  const sendNewsLetter = async () => {
    setLoading(true);
    const formID = import.meta.env.VITE_CONVERTKIT_FORM_ID;
    try {
      const { data } = await httpClient.post(`/forms/${formID}/subscribe`, {
        email: userDetails.email,
        name: userDetails.name,
        api_key: import.meta.env.VITE_CONVERTKIT_API_KEY,
      });
      if (data.subscription) {
        setUserDetails(defaultUserDetails);
        Swal.fire({
          title: "Confirmation email sent!",
          text: "Please check your email to confirm your subscription",
          icon: "success",
        });
        return;
      }
      throw new Error("Error sending confirmation email");
    } catch (err) {
      Swal.fire({
        title: "Something went wrong!",
        text: "Please verify that your email is correct and try again.",
        icon: "info",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userDetails.name.trim() === "" || userDetails.email.trim() === "") {
      Swal.fire({
        title: "Something went wrong!",
        text: "Please input your name and email.",
        icon: "error",
      });
    }
    await sendNewsLetter();
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section id="contactUs" className="page-section-padding">
      <h2 className="page-section-header">Subscribe to our Newsletter </h2>
      <form onSubmit={handleSubmit} className="Home-contact-form">
        <div className="md:col-span-2">
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
            placeholder="Your firstname"
            required
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
            required
            placeholder="Your email"
          />
        </div>
        <div className="md:col-span-2">
          <button
            disabled={loading}
            className="Home-contact-form-button"
            type="submit"
          >
            Subscribe!{" "}
            {loading && (
              <FontAwesomeIcon className="ml-2" icon={faSpinner} spin />
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
