import React from 'react';

// Define the shape of the result prop
interface Result {
  coverSrc: string;
  name: string;
  author: string;
  abstract: string;
}

// Define the props for the SearchResult component
interface SearchResultProps {
  result: Result;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <article className="search-result">
      <div className="image-container">
        <img
          alt=""
          src={result.coverSrc}
        />
      </div>
      <div className="description">
        <p className="name">
          {result.name}
        </p>
        <p className="author">
          By <b>{result.author}</b>
        </p>
        <p className="abstract">
          {result.abstract}
        </p>
      </div>
    </article>
  );
};

export default SearchResult;
