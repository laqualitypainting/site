import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const MAX_CHARS = 2000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMessage("");
    setButtonText("Send Message");

    // ----------------------------
    // Validation
    // ----------------------------
    if (!name || !email || !message) {
      setFeedbackMessage("All fields are required.");
      const firstEmpty = !name ? "name" : !email ? "email" : "message";
      document.getElementById(firstEmpty)?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedbackMessage("Please enter a valid email address.");
      document.getElementById("email")?.focus();
      return;
    }

    setButtonText("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setButtonText("Message Sent");
        setFeedbackMessage("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFeedbackMessage(data.message || "Something went wrong. Please try again.");
        setButtonText("Send Message");
        document.getElementById("name")?.focus();
      }
    } catch (err) {
      console.error(err);
      setFeedbackMessage("Failed to send message. Please try again.");
      setButtonText("Send Message");
      document.getElementById("name")?.focus();
    }
  };

  return (
    <section id="contact" className="relative z-10 pt-40 pb-20 bg-[#111111] text-[#C7AE6A]">
      <div className="max-w-4xl mx-auto text-center px-8">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-[#C7AE6A]">
          Get in Touch
        </h2>
        <p className="text-xl mb-12 text-[#D5C28F]">
          Interested in our painting services? Have questions? Reach out to us below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-[#2A2A2A] text-[#D5C28F] p-8 shadow-xl rounded-2xl"
        >
          {/* Name */}
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-6 p-4 border border-[#C7AE6A]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7AE6A] transition bg-[#111111] text-[#C7AE6A]"
          />

          {/* Email */}
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-6 p-4 border border-[#C7AE6A]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7AE6A] transition bg-[#111111] text-[#C7AE6A]"
          />

          {/* Message */}
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            maxLength={MAX_CHARS}
            className="w-full mb-4 p-4 border border-[#C7AE6A]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7AE6A] transition bg-[#111111] text-[#C7AE6A] resize-none"
          />
          <div className="text-right text-sm text-[#D5C28F] mb-4">
            {MAX_CHARS - message.length} characters remaining
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={buttonText !== "Send Message"}
            className={`font-bold px-6 py-3 rounded-full w-full transition 
              ${buttonText === "Message Sent"
                ? "bg-[#2A2A2A] cursor-not-allowed text-[#C7AE6A]"
                : "bg-[#C7AE6A] hover:bg-[#D5C28F] text-[#111111]"}`
            }
          >
            {buttonText}
          </button>

          {/* Feedback / ARIA live */}
          <p
            aria-live="polite"
            className={`mt-4 text-sm ${feedbackMessage.includes("successfully") ? "text-green-400" : "text-red-500"}`}
          >
            {feedbackMessage}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
