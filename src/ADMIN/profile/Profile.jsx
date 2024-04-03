
import Avatar from '@mui/material/Avatar';
import React from 'react'

function Profile() {
  return (
   <>
  
  <div class="max-w-3xl mx-auto">
  
  <div class="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 class="text-xl font-semibold mb-4">User Information</h2>
    <div class="flex items-center mb-4">
    <Avatar alt="" src="" className='' />
      <div>
        <h3 class="text-lg font-semibold">John Doe</h3>
        <p class="text-gray-600">john.doe@example.com</p>
        <p class="text-gray-600">123, Main Street, City, Country</p>
      </div>
    </div>
   
  </div>


  <div class="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 class="text-xl font-semibold mb-4">Order History</h2>

    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">Order ID</th>
          <th class="border border-gray-300 px-4 py-2">Date</th>
          <th class="border border-gray-300 px-4 py-2">Total</th>
          <th class="border border-gray-300 px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <td class="border border-gray-300 px-4 py-2">1</td>
          <td class="border border-gray-300 px-4 py-2">2024-04-01</td>
          <td class="border border-gray-300 px-4 py-2">$100.00</td>
          <td class="border border-gray-300 px-4 py-2">Delivered</td>
        </tr>
     
      </tbody>
    </table>
  </div>

  
  <div class="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 class="text-xl font-semibold mb-4">Saved Addresses</h2>

    <ul class="divide-y divide-gray-200">
      <li class="py-4">123, Main Street, City, Country</li>
     
    </ul>
  </div>

  
  <div class="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 class="text-xl font-semibold mb-4">Payment Methods</h2>
 
    <ul class="divide-y divide-gray-200">
      <li class="py-4">Visa **** 1234</li>
   
    </ul>
  </div>

  
  <div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">Settings</h2>
 
  </div>
</div>

   </>
  )
}

export default Profile
