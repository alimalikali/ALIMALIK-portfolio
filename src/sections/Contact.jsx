"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import Alert from "../components/Alert.jsx";


const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);
    

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ali Malik",
          from_email: form.email,
          to_email: "alimalikali1928@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="c-space mb-32 "  id="contact">
      <div className="w-full space-y-6 ">
        <h3 className="text-3xl font-semibold text-white">Let&apos;s talk</h3>
        <p className="text-gray-400">
          Ready to build, refine, or transform your online presence? Let’s collaborate to create something exceptional.
        </p>

        {alert.show && <Alert {...alert} />}
        <form  ref={formRef} onSubmit={handleSubmit} className="space-y-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="ex., Ali Zulfiqar"
              className="w-full px-4 py-3 text-white bg-[#1d1c21]   rounded-lg outline-none   "
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="ex., alimalikali1928@gmail.com"
              className="w-full px-4 py-3 text-white bg-[#1d1c21]   rounded-lg outline-none   "
            />
          </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Your message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Share your thoughts or inquiries..."
              className="w-full px-4 py-3 text-white bg-[#1d1c21]   rounded-lg outline-none   "
            />
          </div>

          <button
            type="submit"
            className="w-full px-5 py-3 text-white bg-[#3f3d42] rounded-lg hover:bg-[#1d1c21]   "
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"} ↗
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
