import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [term, setTerm] = useState("basketball");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${term}&apiKey=380db46efaef4481a0432398727949d7`
      );
      setResults(data.articles);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((article) => {
    const { title, description, urlToImage, url, author } = article;
    return (
      <div key={title} className="ui segment">
        <img
          className="ui centered big rounded image"
          src={urlToImage}
          alt={title}
        />
        <h2 style={{ textAlign: "center" }}>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {title}
          </a>
        </h2>
        <p style={{ textAlign: "center" }}>{author}</p>
        <p style={{ textAlign: "center" }}>{description}</p>
      </div>
    );
  });

  return (
    <>
      <div className="ui form">
        <div className="field">
          {/* <label>Enter Topic</label> */}
          <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
            Obi's News App
          </h1>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
            placeholder="Enter a topic..."
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </>
  );
};

export default SearchBar;
