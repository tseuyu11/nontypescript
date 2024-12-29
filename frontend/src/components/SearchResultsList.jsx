/* eslint-disable react/prop-types */
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
    return (
      <div >
        {results.map((result, _id) => {
          return <SearchResult result={result.diseases} key={_id} />;
        })}
      </div>
    );
  };