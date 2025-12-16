import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("Message sent! I will reply soon 😊");
      else throw new Error("Failed to send");
    } catch (err) {
      setStatus("Something went wrong 🙁");
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-24">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-6">
        Let’s Get In Touch
      </h1>

      <p className="text-center text-lg text-gray-700 max-w-2xl mb-10 font-sans">
        Got a question, want to work together, or just want to say hi? I’d love to hear from you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg"
      >
        <div className="flex flex-col gap-4">
          {/* Name */}
          <label className="font-sans text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label className="font-sans text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <label className="font-sans text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            rows={6}
            className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
          )}
        </div>
      </form>
    </section>
  );
}
