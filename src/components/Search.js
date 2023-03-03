import React, { useState, useEffect } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=" + search)
      .then((res) => res.json())
      .then(setResults);
  }, [search]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h3>Search a repo...</h3>
      <input
        type="text"
        onChange={onChange}
        value={search}
      />
      <ul>
        {results?.items?.map((item) => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
}
