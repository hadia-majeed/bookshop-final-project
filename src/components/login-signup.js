import React, { useEffect } from "react";

const LoginSignupForm = () => {
  
  useEffect(() => {
   
    const showFormBtn = document.getElementById('showFormBtn');
    const hideFormBtn = document.getElementById('hideFormBtn');
    const form = document.getElementById('loginForm');
    
    if (showFormBtn && hideFormBtn && form) {
      showFormBtn.addEventListener('click', () => {
        form.style.display = 'block';
      });
      
      hideFormBtn.addEventListener('click', () => {
        form.style.display = 'none';
      });
    }

    
    return () => {
      if (showFormBtn && hideFormBtn) {
        showFormBtn.removeEventListener('click', () => {
          form.style.display = 'block';
        });
        hideFormBtn.removeEventListener('click', () => {
          form.style.display = 'none';
        });
      }
    };
  }, []);

  return (
    <div >
      
      <button id="showFormBtn" style={{marginLeft:'570px', marginTop:'-90px'}}className="btn btn-primary mt-3" >Show Login/Sign Up Form</button>

      <div id="loginForm" style={{ display: "none", marginTop: "20px", marginBottom:'70px'}}>
        <div className="card" style={{ maxWidth: "400px", margin: "auto", padding: "20px", height:'350px'}}>
          <h2>Login or Sign Up</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
            <button type="button" className="btn btn-secondary mt-3" style={{ marginLeft: "10px", marginRight:'10px'}}>
              Sign Up
            </button>
            <button
              type="button"
              id="hideFormBtn"
              className="btn btn-danger mt-3"
              style={{ marginTop: "10px" }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
