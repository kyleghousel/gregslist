import React, { useState } from "react";
import AddListingForm from "./AddListingForm";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSorted, setIsSorted] = useState(false)
  const [addedListing, setAddedListing] = useState(null)

  const onSearch = (term) => {
    setSearchTerm(term)
  }

  const onSort = () => {
    setIsSorted(!isSorted)
  }

  const onAddListing = (newListing) => {
    setAddedListing(newListing)
  }

  return (
    <div className="app">
      <Header isSorted={isSorted} onSearch={onSearch} onSort={onSort}/>
      <AddListingForm onAddListing={onAddListing}/>
      <ListingsContainer addedListing={addedListing} isSorted={isSorted} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
