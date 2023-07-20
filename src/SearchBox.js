import React from "react";

 const SearchBox = ({ searchChange }) => {
    return(
        <div className="pa2">
       <input
        className='tc pa3 ma2 b--red bg-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
        />
       </div>
    );
 }

 export default SearchBox;