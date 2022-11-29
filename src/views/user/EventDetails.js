import React from "react";
import christmas from '../../assets/img/christmas.png' 
import diwali from '../../assets/img/diwali.jpg';
import newYear from '../../assets/img/new.png'  
export default function ServicesCards() {


return (

    <>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full " src={diwali} alt="Diwali" ></img>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Diwali Celebration</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <ul>
            <li>Date : 25-10-2022</li>
            <li>Time : 7pm onwards</li>
            <li>Venue : neeche aa jao xd</li>
        </ul>
      </div>
    </div>

    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={christmas} alt="Christmas" ></img>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Christmas Celebration</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-4">
        <ul>
            <li>Date : 25-12-2022</li>
            <li>Time : 9pm onwards</li>
            <li>Venue : neeche aa jao xd</li>
        </ul>
        {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
      </div>
    </div>  

    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={newYear} alt="Forest"></img>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">New Year Celebration</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <ul>
            <li>Date : 31-12-2022</li>
            <li>Time : 12 midnight</li>
            <li>Venue : neeche aa jao xd</li>
        </ul>
      </div>
    </div>
  </div>



  </>
)}


        
