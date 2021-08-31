import React, { useState, useEffect } from 'react';

const API_URL = `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${process.env.REACT_APP_API_KEY}`;
console.log(API_URL)

function App() {
  const [menuItem, setMenuItem] = useState('');
  const fetchMenuItem = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMenuItem(data.products.menuItem))
  }

  useEffect(() => {
    fetchMenuItem();
  }, [])

  return (
    <div className="search">
        <h3>What to eat</h3>
    </div>
  );
}

export default App;
