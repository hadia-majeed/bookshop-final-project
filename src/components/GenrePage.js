

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GenrePage = ({ products }) => {
  const { genre } = useParams(); 

  const genreBooks = products.filter(product => product.genre.toLowerCase() === genre.toLowerCase());


  return (
    <div>
      <div className="container" style={{ marginTop: '20px' }}>
        <h2 className="text my-5" style={{ fontWeight: 'bold' }}>{`${genre.charAt(0).toUpperCase() + genre.slice(1)} Books`}</h2>
        <div className="row">
          {genreBooks.length ? (
            genreBooks.map(book => (
              <div className="col-md-3 mb-4" key={book.id}>
                <div className="card product-card">
                  <img src={book.imgSrc} className="card-img-top" alt={book.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{book.title}</h5>
                    <p><b>{book.price}</b></p>
                    <Link to={`/products/${book.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No books available in this genre.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
