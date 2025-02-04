"use client"
import { useState } from "react";


export default function Signup() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleSignup = async () => {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        alert(data.message);
    }

    return (
        <div className="mt-28">
            <h2>Signup</h2>
            <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    )
}