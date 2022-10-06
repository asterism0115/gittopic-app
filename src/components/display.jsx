import React, { useState } from "react";
import SearchResult from './searchResult';

const DisplayContent = ({search}) => {
    const [searchTerm, setSearchTerm] = useState(search);

    const handleChange = (value) => {
        if(value!==searchTerm){
            setSearchTerm(value);
            console.debug("handleChange:", value);
        }
    };

    //Separate the body and the search result 
    return (
        <div>
            <h3 className="display-4" title="topic of search term">TOPIC: <span className="badge badge-secondary">{search}</span></h3>
            <SearchResult key={search} value={search} onChange={handleChange} ></SearchResult>
        </div>
    );
}

export default DisplayContent;
