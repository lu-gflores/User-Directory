import React, {useState, useEffect} from 'react'
import employees from '../employees.json'

const SearchBox = () => {

    const[search, setSearch] = useState("");
    const[results, setResults] = useState("");

    const handleChange = event => {
        setSearch(event.target.value);
    };
    useEffect(()=> {
        const searchResults = employees.results.filter(employee=> {
            return employee.name.first.toLowerCase() !== -1
        });
        setResults(searchResults);
    }, [search]);

    return (
        <input className="form-control" onChange={handleChange} value={search} type="text" placeholder="John Smith" />
    )
}

export default SearchBox;