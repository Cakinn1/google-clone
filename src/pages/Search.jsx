import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("test", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <ButtonBase type="submit" onClick={search} className="btn">
            Google Search
          </ButtonBase>
          <ButtonBase className="btn">I'm Feeling Lucky</ButtonBase>
        </div>
      ) : (
        <div className="search__buttons">
          <ButtonBase
            type="submit"
            onClick={search}
            className="search__buttonsHidden"
          >
            Google Search
          </ButtonBase>
          <ButtonBase className="search__buttonsHidden">
            I'm Feeling Lucky
          </ButtonBase>
        </div>
      )}
    </form>
  );
}

export default Search;
