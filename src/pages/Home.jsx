import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white">
        <img src="https://images.pexels.com/photos/5210380/pexels-photo-5210380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="card-img" alt="background" />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export {Home};
