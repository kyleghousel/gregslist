import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

const ListingsContainer = ({ addedListing, isSorted, searchTerm }) => {
  const [listings, setListings] = useState([])

  const url = 'http://localhost:6001/listings/'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setListings)
  }, [])

  useEffect(() => {
    if (addedListing) {
      setListings(prev => [...prev, addedListing]);
    }
  }, [addedListing]);

  const onRemove = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setListings(prevListings => prevListings.filter(listing => listing.id !== id));
        } else {
          throw new Error("Delete failed");
        }
      })
      .catch(error => console.error(error));
  };

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let listingsToDisplay = searchTerm ? filteredListings : listings;

  if (isSorted) {
    listingsToDisplay = [...listingsToDisplay].sort((a, b) => a.location.localeCompare(b.location));
  }

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map(({ description, id, image, location }) => (
          <ListingCard
            key={id}
            id={id}
            description={description}
            image={image}
            location={location}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </main>
  );
};

export default ListingsContainer;
