import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-zinc-900 shadow-md">
            <div className="flex items-center space-x-3">
                <img src="minecraft_logo.png" alt="Logo" className="w-6 h-6 rounded-sm" />
                <h1 className="text-white text-xl font-semibold">Freelas</h1>
            </div>
            <ul className="flex">
                <li><Link to="/projects" className="text-pink-400 font-bold p-4">/projetos</Link></li>
                <li><Link to="/" className="text-pink-400 font-bold p-4">/home</Link></li>
            </ul>
        </header>
    );
}


export default Header;

