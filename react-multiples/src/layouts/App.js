import React from 'react'

import { Link } from 'react-router-dom'

const App = ({ children }) => (
    <main>
        <h1>@rg/react-multiples</h1>
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </nav>
        {children}
    </main>
)

export default App