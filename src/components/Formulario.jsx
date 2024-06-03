import React, { useState } from "react"; 
import "./Formulario.css";
import { useNavigate } from "react-router-dom";
import Imagen from "./Image.jsx";

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }
        setError(false);
        setUser([nombre]);
        navigate("/home");
    };

    return (
        <>
            <section className="section-form">
                <div>
                    <h1>TREENET</h1>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email  "
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <input type="password" placeholder="Password"
                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}
                        />
                        <button>Login</button>
                        <p><a href="/signup">If you don't have an account, create one</a></p>
                    </form>
                    {error && <p className="validation-camps">All fields are required</p>}
                   
                </div>
            </section>
            <Imagen />
        </>
    );
}
