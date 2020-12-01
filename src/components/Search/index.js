import React from "react";

function Search({ handleChange }) {
  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
}

export default Search;
