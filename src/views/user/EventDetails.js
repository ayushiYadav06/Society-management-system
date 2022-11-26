import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
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



{/*     
    <div class="py-4 px-3">
    <div class="shadow-lg group container  rounded-md bg-white  w-25 flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
          <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
             <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 14</span>
              <span class="text-xs tracking-wide font-bold uppercase block font-sans">November </span>
          </div>
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
            <span class="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
            <span  class="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">learn more </button>
           </div>
    </div>
    </div>
   
</div> */}

        
