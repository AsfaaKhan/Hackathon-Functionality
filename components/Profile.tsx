// "use client"

// import { useEffect, useState } from "react"


// interface IUser {
//     name : string
// }
// export default function Profile() {
//     const [user, setUser] = useState<IUser | null> (null)

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             fetch("/api/protected-route", {
//                 headers: { Authorization: `Bearer ${token} ` },
//             })
//                 .then((response) => response.json())
//                 .then((data) => setUser(data.user));
//         }
//     }, []);

//     return (
//         <div>
//             {user ?
//                 <h2>Welcome , {user.name} </h2> :
//                 <p>Please Login in </p>
//             }
//         </div>
//     )
// }