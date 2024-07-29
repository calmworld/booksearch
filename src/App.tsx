import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import SearchResult from './components/SearchResult/SearchResult';
import TextInput from './components/TextInput/TextInput';

export interface SearchResultData {
  isbn: string;
  name: string;
  author: string;
  coverSrc: string;
  abstract: string;
}

// Define the possible states for the status
type Status = 'idle' | 'loading' | 'success' | 'error' | 'empty';

const ENDPOINT = 'https://jor-test-api.vercel.app/api/book-search';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResultData[] | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus('loading');

    try {
      const url = `${ENDPOINT}?searchTerm=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(url);
      const json = await response.json();

      if (json.ok) {
        setSearchResults(json.results);
        setStatus(json.results.length > 0 ? 'success' : 'empty');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <header>
        <form onSubmit={handleSearch}>
            <TextInput
              required
              label="Search"
              placeholder="The Fifth Season"
              value={searchTerm}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button type="submit">Go!</button>
          </form>
      </header>

      <main>
        {status === 'idle' && <p>Welcome to book search!</p>}
        {status === 'loading' && <p>Searching...</p>}
        {status === 'error' && <p>Something went wrong!</p>}
        {status === 'empty' && <p>No results</p>}
        {status === 'success' && (
          <div className="search-results">
            <h2>Search Results:</h2>
            {searchResults?.map((result) => (
              <SearchResult key={result.isbn} result={result} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}

// const EXAMPLE: SearchResultData = {
//   isbn: '9781473621442',
//   name: 'A Closed and Common Orbit',
//   author: 'Becky Chambers',
//   coverSrc: 'https://sandpack-bundler.vercel.app/img/book-covers/common-orbit.jpg',
//   abstract: "Lovelace was once merely a ship's artificial intelligence. When she wakes up in a new body, following a total system shut-down and reboot, she has no memory of what came before. As Lovelace learns to negotiate the universe and discover who she is, she makes friends with Pepper, an excitable engineer, who's determined to help her learn and grow.",
// };

export default App