import React, { useState } from 'react'

export default function SignUpForm() {
    const [formData, setFormData] = useState({ email: "", username: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = fetch(`/api/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (!res.ok) {
                console.log("Error in Sending Data");
            }

            setMessage(data.message);
            setFormData({ username: "", email: "", password: "" })
            console.log(data)
        }
        catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>SignUp Form</h1>
            <form style={{ width: "350px", display: "flex", flexDirection: "column" }}  >
                <input
                    type="text"
                    name="username"
                    placeholder='UserName'
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={{ marginTop: "10px", padding: "10px" }}
                />
                <input
                    type='email'
                    name="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ marginTop: "10px", padding: "10px" }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{ margin: "10px 0", padding: "10px" }}
                />

                <button
                    type="submit"
                    style={{ margin: "10px 0", padding: "10px", cursor: "pointer" }}
                >
                    SignUp
                </button>
            </form>
        </div>
    )
}
