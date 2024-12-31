import { useState } from "react";
import Shopping from "./Shopping";

export default function Login({user}) {
    const [click, setClick] = useState(false);
    if (click) {
        return (
            <Shopping user = {user} />
        )
    }
    return (
        <div>
            <h1>Login Component</h1>
            <h3>{user.username}, ₹{user.balance}</h3>
            <button onClick={() => {setClick(true)}}>Shopping</button>
        </div>
    );
}