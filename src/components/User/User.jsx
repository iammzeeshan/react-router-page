import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams()
    return (
        <div className="h-22 w-auto flex items-center justify-center text-4xl font-bold bg-gray-700 text-white">User: {userid}</div>
    )
}
export default User;