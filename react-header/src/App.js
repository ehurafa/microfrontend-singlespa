import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({ name }) => {

    return (
        <BrowserRouter>
            <header>
                <h1>{name}</h1>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-single">Single</Link>
                    </li>
                    <li>
                        <Link to="/react-lazy">Lazy</Link>
                    </li>
                    <li>
                        <Link to="/react-multiples">Multiples</Link>
                    </li>
                    <li>
                        <Link to="/react-router">Routes</Link>
                    </li>

                </nav>
            </header>
        </BrowserRouter>
    )
}

export default App