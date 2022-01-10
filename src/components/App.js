import React from "react";
import MainNewsFeed from "./MainNewsFeed";
import SearchBar from "./SearchBar";
import TopNews from "./TopNews";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <SearchBar />
          </div>
          <div className="five wide column">
            <TopNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
