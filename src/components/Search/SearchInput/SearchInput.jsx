import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SearchCard from "../../Search/SearchCard/SearchCard";
import BlockPlaceholder from "../../UI/BlockPlaceholder/BlockPlaceholder";
import { Input, Spinner } from "@chakra-ui/react";
import { searchMedia } from "../../../api/media.api";

import "./searchinput.scss";

const SearchInput = ({ searchVisible }) => {
  const [searchValue, setsearchValue] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  useEffect(() => {
    if (searchValue !== "" && searchValue.length > 0) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const data = await searchMedia({ query: searchValue, page: 1 });
          setSearchResults(data.searchResults);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    } else if (searchValue === "") {
      setSearchResults([]);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchVisible) {
      inputRef.current.focus();
    }
    setSearchResults([]);
    setsearchValue("");
  }, [searchVisible]);

  const handleChange = (event) => setsearchValue(event.target.value);

  return (
    searchVisible && (
      <div className="search-input__main-wrapper">
        <div className="search-input__search-section">
          <Input placeholder="Search something..." focusBorderColor="green" ref={inputRef} width={"100%"} onChange={handleChange} />
        </div>

        {isLoading ? (
          <div className="search-input__cards-loader-wrapper">
            <Spinner size="xl" />
          </div>
        ) : searchResults.length > 0 ? (
          <div className="search-input__search-results">
            <div className="search-input__search-results-grid">
              {searchResults?.slice(0, 7).map((result) => (
                <SearchCard key={result.id} media={result} mediaType={result.media_type} />
              ))}
            </div>
            <div className="search-input__show-all">
              <Link>
                <span>Show all results {searchResults ? "true" : "false"}</span>
              </Link>
            </div>
          </div>
        ) : (
          searchValue.length > 0 && (
            <div className="search-input__search-results">
              <BlockPlaceholder text={"No results :("} />
            </div>
          )
        )}
      </div>
    )
  );
};

export default SearchInput;
