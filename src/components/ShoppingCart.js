import React from 'react';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      imgSrc: `${process.env.PUBLIC_URL}imagesfolder/Aleph-Paulo-Coelho.webp`,
      title: "Aleph (Paulo Coelho)",
      price: "Rs500",
      quantity: 1,
    },
    {
      id: 2,
      imgSrc: `${process.env.PUBLIC_URL}imagesfolder/A-Little-Princess-Puffin-Classic.webp`,
      title: "A Little Princess (Puffin Classic)",
      price: "Rs1,080",
      quantity: 1,
    },
    {
      id: 3,
      imgSrc: `${process.env.PUBLIC_URL}imagesfolder/Big-Shot(DIary Of a Wimpy Kid).webp`,
      title: "Big Shot (DIary Of a Wimpy Kid)",
      price: "Rs1,500",
      quantity: 1,
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace("Rs", "").replace(",", ""));
    return total + price * item.quantity;
  }, 0);
  return (
    <div className="container" style={{marginTop:'-70px'}}>
      <h1 className="text-center my-5">Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cartItems.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.imgSrc} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text"><b>{item.price}</b></p>
                    <p className="card-text">
                      Quantity: {item.quantity}
                    </p>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Order Summary</h4>
              <p>Subtotal: Rs{totalAmount}</p>
              <p>Shipping Fee: Rs200</p>
              <h5>Total: Rs{totalAmount}</h5>
              <button className="btn btn-primary btn-block">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
