import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../assets/style.css'


function Search(props) {

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSearch(input)
        setInput("")   
    }

    return (

        <div className='wrapperForm'>
            <form onSubmit={handleSubmit} className='form' >
                <input className="search" type='search' placeholder='Search...' onChange={handleChange} value={input} />
                <button className='btnSearch'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>

            <div className='d-flex justify-content-between mt-4'>
                <div className='suggestSearch'>Mountain</div>
                <div className='suggestSearch'>Beaches</div>
                <div className='suggestSearch'>Birds</div>
                <div className='suggestSearch'>Food</div>
            </div>
            
        </div>
        


    );
}

export default Search;