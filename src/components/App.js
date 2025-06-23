import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="app">
      <Header onSearch={onSearch}/>
      <ListingsContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
