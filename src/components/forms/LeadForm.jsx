import { useState } from "react";
import { services } from "../../data/services";
import { submitLead } from "../../services/leadService";

const EMPTY_FORM = { fullName: "", email: "", phone: "", service: "", message: "" };

export default function LeadForm({ source = "contact", defaultService = "" }) {
  const [values, setValues] = useState({ ...EMPTY_FORM, service: defaultService });
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const isSending = status.type === "sending";

  const handleChange = (event) =>
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "sending", text: "" });
    try {
      await submitLead({ ...values, source });
      setValues({ ...EMPTY_FORM, service: defaultService });
      setStatus({ type: "ok", text: "Thank you. A tax professional will contact you shortly." });
    } catch (error) {
      setStatus({ type: "err", text: error.message });
    }
  };

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" name="fullName" required minLength={2} value={values.fullName} onChange={handleChange} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={values.email} onChange={handleChange} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required minLength={7} value={values.phone} onChange={handleChange} autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="service">What do you need help with?</label>
        <select id="service" name="service" value={values.service} onChange={handleChange}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Briefly describe your situation</label>
        <textarea id="message" name="message" maxLength={2000} value={values.message} onChange={handleChange} />
      </div>
      {status.text && <div role="status" className={`form__msg form__msg--${status.type}`}>{status.text}</div>}
      <button className="btn btn--primary" disabled={isSending}>{isSending ? "Sending..." : "Request a consultation"}</button>
      <p className="disclaimer">Your information is kept confidential and is used only to respond to your request.</p>
    </form>
  );
}
