import React, { useState } from "react";
import FavoriteBtn from "./FavoriteBtn";

const ListingCard = ({description, id, image, location, onRemove}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image ? image : "https://via.placeholder.com/300x300"} alt={description ? description : "description"} />
      </div>
      <div className="details">
        {<FavoriteBtn isFavorite={isFavorite} handleClick={handleFavoriteClick}/>}
        <strong>{description && description}</strong>
        <span> · {location && location}</span>
        <button className="emoji-button delete" onClick={() => onRemove(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
