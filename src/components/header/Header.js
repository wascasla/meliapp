import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Header.scss";
import lupa from "./lupa.svg";

const Header = ({ paramSearch, setParamSearch }) => {
  let history = useHistory();

  const buscar = () => {
    if (paramSearch) {
      history.push(`/items?search=${paramSearch}`);
    }
  };

  return (
    <header className="App-header header">
      <div className="header-content">
        <Link to="/">
          <div className="nav-logo"></div>
        </Link>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setParamSearch(e.target.value)}
            onKeyPress={(e) => e.code === "Enter" && buscar()}
            value={paramSearch}
          />
          <button className="button" onClick={buscar}>
            <img src={lupa} className="app-lupa" alt="lupa" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
