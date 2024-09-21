import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    
    <div className="min-h-screen bg-teal-500 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-slate-700 p-4 text-white">
        <div className="logo">
          <img src="logof3.png" alt="Description of Image" className="w-30 h-18" />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder=" Search here..."
            className="w-96 h-10 px-4 py-2 text-lg rounded-lg border-2 border-darkslategray"
          />
          <button className="px-4 py-2 bg-gray-600 text-white border-2 border-darkslategray rounded-lg font-bold hover:bg-gray-300 hover:text-white">
            Search
          </button>
        </div>

        <div className="space-x-4">
          <a href="login2.html">
            <button className="px-4 py-2 bg-salmon-300 text-white border-2 border-darkslategray rounded font-bold hover:bg-gray-100 hover:text-white">
              Login
            </button>
          </a>
          <a href="cart.html">
            <button className="px-4 py-2 bg-salmon-300 text-white border-2 border-darkslategray rounded font-bold hover:bg-gray-100 hover:text-white">
              🛒 Add to Cart
            </button>
          </a>
          <a href="seller.html">
            <button className="px-4 py-2 bg-salmon-300 text-white border-2 border-darkslategray rounded font-bold hover:bg-gray-100 hover:text-white">
              💰 Sell
            </button>
          </a>
          <a href="profile.html">
            <button className="px-4 py-2 bg-salmon-300 text-white border-2 border-darkslategray rounded font-bold hover:bg-gray-100 hover:text-white">
              👤 Profile
            </button>
          </a>
        </div>
      </header>

      {/* Portrait Image Section */}
      <section>
        <img src="bodyf1.jpeg" alt="User Portrait" className="w-full h-96 object-cover" />
      </section>

      {/* Main Content */}
      <main className="p-10">
        <section className="bg-slate-700 p-6 rounded-lg shadow-lg text-center text-white">
          <h1 className="mb-6 text-3xl font-bold">Categories</h1>
          <div className="flex justify-around">
            <a href="#" className="text-red-500">
              <img src="electronics.jpeg" alt="Electronics" className="w-64 h-96 rounded-lg mb-2 transform hover:scale-110 transition-transform" />
              <p className="bg-gray-800 text-white p-2 rounded">Electronics</p>
            </a>
            <a href="#" className="text-red-500">
              <img src="apperals.jpeg" alt="Apparels" className="w-64 h-96 rounded-lg mb-2 transform hover:scale-110 transition-transform" />
              <p className="bg-gray-800 text-white p-2 rounded">Apparels</p>
            </a>
            <a href="#" className="text-red-500">
              <img src="essentials.jpeg" alt="Essentials" className="w-64 h-96 rounded-lg mb-2 transform hover:scale-110 transition-transform" />
              <p className="bg-gray-800 text-white p-2 rounded">Essentials</p>
            </a>
            <a href="#" className="text-red-500">
              <img src="utilities.jpeg" alt="Utilities" className="w-64 h-96 rounded-lg mb-2 transform hover:scale-110 transition-transform" />
              <p className="bg-gray-800 text-white p-2 rounded">Utilities</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; 2024 Buzz-R Marketplace. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-red-400 hover:text-red-300 mx-2">About Us</a>
          <a href="#" className="text-red-400 hover:text-red-300 mx-2">Contact</a>
          <a href="#" className="text-red-400 hover:text-red-300 mx-2">Privacy Policy</a>
          <a href="#" className="text-red-400 hover:text-red-300 mx-2">Terms of Service</a>
        </div>
        <p className="mt-2">
          Follow us on: 
          <a href="#" className="text-red-400 hover:text-red-300 mx-1">Facebook</a> | 
          <a href="#" className="text-red-400 hover:text-red-300 mx-1">Twitter</a> | 
          <a href="#" className="text-red-400 hover:text-red-300 mx-1">Instagram</a>
        </p>
      </footer>
    </div>


  )
}

export default App


