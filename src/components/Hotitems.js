import React from 'react';

  
  const Hotitems = ({ imgSrc, title, price }) => (
    
    <div className="col-md-3 mb-4">
      <div className="card product-card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p><b>{price}</b></p>
          <p style={{ color:'blue' }}><i className="fas fa-star"></i><b> BEST SELLER</b></p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
    
  );

  export default Hotitems;
  
  