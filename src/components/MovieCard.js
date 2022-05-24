import React from 'react'

function MovieCard(props) {
  const { movie: {_id, title, director, IMDBRating, clickToDelete} } = props;

  return (
    <div className="MovieCard">
      <h3>{title}</h3>
      <p>Director: {director}</p>
      <p>Rating: {IMDBRating}</p>
      <button onClick={ () => clickToDelete(_id) } className="btn-delete">
        Delete 🗑
      </button>
    </div>
  )
}

export default MovieCard;