import React from 'react';
import "../css/main.css";
import { Link } from 'react-router-dom';


export const Train = () => {
  return (
    <div>
      <nav class="flex justify-center space-x-4">
  <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Seat Availability</a>
  <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">PNR Status</a>
  <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About Trains</a>
  <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Booking</a>
</nav>
 <p class =" flex justify-center space-x-4 text-2xl text-bold m-10">Welcome to  John Doe Railways</p>
 <Link to="/Delhi" >Delhi Train <button
  type="submit"
  className="w-40 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
  Get Details
</button></Link>
 <div class ="flex justify-center mt-5">
 
  <img src='/image.png'></img> </div>
  <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 mt-2">Train Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter train number"
          />
        </div>
        <div className="mb-4 mt-2">
          <label className="block text-sm font-medium mb-1">Departure Time</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter departure time"
          />
        </div>
        <div className="mb-4 mt-2">
          <label className="block text-sm font-medium mb-1">Arrival Time</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter arrival time"
          />
        </div>
        <div className="mb-4 mt-2">
          <label className="block text-sm font-medium mb-1">Origin</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter origin"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Destination</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter destination"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
        Search
        </button>
      </form>

    
  
   
    </div>
  )
}
