import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

export const PerfilMenu = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
            navigate("/login"); 
        }
    }, [navigate]);

    return (
        <div className="container">
            <h1>Private Menu</h1>
        </div>
    );
};
