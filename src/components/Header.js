import React from 'react'
import '../styles/Header.css'
function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Search your current employees here!</p>
                
            </div>
        </div>
    )
}
export default Header;