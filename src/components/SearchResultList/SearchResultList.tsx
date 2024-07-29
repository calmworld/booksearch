import { SearchResultData } from "../../App";
import SearchResult from "../SearchResult/SearchResult";

interface SearchResultListProps {
    searchResults: SearchResultData[];
}
  
const SearchResultList: React.FC<SearchResultListProps> = ({ searchResults }) => {
    if (searchResults.length === 0) {
        return <p>No results</p>;
    }

    return (
        <div className="search-results">
            <h2>Search Results:</h2>
            {searchResults.map((result) => (
                <SearchResult
                key={result.isbn}
                result={result}
                />
        ))}
        </div>
    );
};

export default SearchResultList;