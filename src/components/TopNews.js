import React, { useEffect, useState } from "react";
import axios from "axios";

const TopNews = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=380db46efaef4481a0432398727949d7"
      );
      setResults(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "7rem" }}>Popular News</h1>
      {results.map((article) => {
        const { title, description, urlToImage, url } = article;
        return (
          <div key={description} className="ui segment">
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
            <p style={{ textAlign: "center" }}>
              <span dangerouslySetInnerHTML={{ __html: description }}></span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TopNews;
