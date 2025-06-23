import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ isSorted, onSearch, onSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <Sort onSort={onSort} isSorted={isSorted}/>
    </header>
  );
}

export default Header;
