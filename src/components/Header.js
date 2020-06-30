import React from 'react'
import SearchBox from './SearchBox'
function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Search your current employees here!</p>
                <SearchBox/>
            </div>
        </div>
    )
}
export default Header;