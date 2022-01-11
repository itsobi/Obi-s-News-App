import React from "react";

const MainNewsFeed = ({ results }) => {
  const renderedResults = results.map((article) => {
    const { title, description, urlToImage, url, author } = article;
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
        <p style={{ textAlign: "center" }}>{author}</p>
        <p style={{ textAlign: "center" }}>
          <span dangerouslySetInnerHTML={{ __html: description }}></span>
        </p>
      </div>
    );
  });
  return <div className="ui celled List">{renderedResults}</div>;
};

export default MainNewsFeed;
