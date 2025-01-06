import React from "react";

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        className="form-control"
      />
      <input
        disabled={isLoading || !value}
        type="submit"
        className="btn"
        value="Search"
      />
    </form>
  );
};

export default SearchBar;
