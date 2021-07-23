import React from 'react'
import { Link } from "react-router-dom";

const NavPanel = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
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
