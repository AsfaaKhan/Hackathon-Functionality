// "use client"

// import { useState } from "react"


// export default function Login() {
//     const [user, setUser] = useState({ email: "", password: "" })

//     const handleLogin = async () => {
//         const response = await fetch("/api/auth/login", {
//             method: "POST",
//             body: JSON.stringify(user),
//             headers: { "Content-Type ": "application/json" },

//         });

//         const data = await response.json();
//         if (data.token) {
//             localStorage.setItem("token", data.token);
//         }
//         alert(data.message)
//     }

//     return (
//         <div>
//             <div className=" mt-28">
//                 <h2>Login</h2>
//                 <input 
//                 type="email" 
//                 placeholder="Email" 
//                 onChange={(e) => setUser({ ...user, email: e.target.value })} />

//                 <input 
//                 type="password" 
//                 placeholder="Password" 
//                 onChange={(e) => setUser({ ...user, password: e.target.value })} />
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         </div>
//     )
// }