import React from 'react';


const Delhi = () => {
  return (
    <div><nav class="flex justify-center space-x-4">
    <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
    <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Seat Availability</a>
    <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">PNR Status</a>
    <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About Trains</a>
    <a href="" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Booking</a>
  </nav>
  <p class =" flex justify-center space-x-4 text-2xl text-bold underline m-10 ">Details About Delhi Door Hai Exp</p>
  <img src='/delhi.jpg'></img> 

  <table className="border-collapse border">
  <thead>
    <tr>
      <th className="border p-2">Departure Time</th>
      <th className="border p-2">Seats Available</th>
      <th className="border p-2">Price</th>
      <th className="border p-2">Delayed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">9 hrs,45 mins </td>
      <td className="border p-2">32 sl ,1AC</td>
      <td className="border p-2"> SL-1,AC-723</td>
      <td className="border p-2"> 3</td>
     
     
    </tr>
    
    
  </tbody>
</table>
  </div>
  )
}

export default Delhi