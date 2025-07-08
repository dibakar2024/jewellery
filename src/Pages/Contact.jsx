import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 border rounded resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
          )}
        </form>

        {/* Google Map */}
        <div className="rounded overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14927213.450027445!2d110.3068557340453!3d-24.019100166100714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSouth%20Clintborough%2C%20WA%2041222-0367!5e0!3m2!1sen!2sin!4v1751018680250!5m2!1sen!2sin" 
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
