import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";

export default function App() {

const [ cart, setCart ] = useState({})

function addToCart (id, sku) {
  setCart( (items) => {
    const itemsInCart = items.find((i) => i.sku === sku);
    if (itemsInCart){
      return items.map((i) => i.sku === sku ? { ...i, quantity: i.quantity + 1} : i )
    }
  })
}

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
