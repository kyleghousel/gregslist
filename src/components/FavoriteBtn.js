import React from 'react'

const FavoriteBtn = ({isFavorite, handleClick}) => {
  return (
    <>
      {isFavorite ? (
        <button className="emoji-button favorite active" onClick={handleClick}>
          ★
        </button>
      ) : (
        <button className="emoji-button favorite" onClick={handleClick}>
          ☆
        </button>
      )}
    </>
  )
}

export default FavoriteBtn
