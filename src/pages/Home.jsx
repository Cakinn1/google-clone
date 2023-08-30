import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";

function Home( ) {
  return (
    <div className="home">
      {/* <h1>This is homepage</h1> */}

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
