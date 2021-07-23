import React from 'react'
import { Link } from "react-router-dom";
import './Styles.css';

const NavPanel = () => {
    return (
        <div>
            <header>
                <nav className="panel">
                    <ul className="list">
                        <li>
                            <Link to="/">Diary</Link>
                        </li>
                        <li>
                            <Link to="/addfood">Add food</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavPanel
