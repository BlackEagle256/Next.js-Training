import React, { useState } from 'react'

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending Data...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })

            const data = await res.json();

            if (res.ok) {
                setStatus("Successfull Status");
                setForm({ name: "", email: "", message: "" });
            }
            else {
                setStatus("Error", data.error);
            }
        }
        catch (err) {
            setStatus("Unknown Error");
        }
    }

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Contact Us Now</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='Your Name'
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="email"
                    name='email'
                    placeholder='email Address'
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <textarea
                    name="message"
                    placeholder='Your Message'
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Send Message</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    )
}
