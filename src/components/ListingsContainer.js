import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

const ListingsContainer = ({ searchTerm }) => {
  const [listings, setListings] = useState([])

  const url = 'http://localhost:6001/listings/'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setListings)
  }, [])

  const onRemove = (id) => {
    console.log(id)
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

  const listingsToDisplay = searchTerm ? filteredListings : listings;

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
