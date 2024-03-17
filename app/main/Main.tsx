'use client'
import { useEffect } from "react";
import Sun from "./Sun";



function Main() {

  useEffect(()=>{
    fetch('http://api.weatherapi.com/v1/current.json?key=81d75b8d0b894c81a07222104241503&q=Mexico&aqi=yes')
    .then(response => response.json())
    .then(data => console.log(data));
  },[])


  return (
    <main className="md:w-[calc(100%-400px)] w-[calc(100%-50px)] mx-auto mt-5">

        <div className="rounded bg-blue-500 text-white w-fit hover:cursor-pointer">
          <p className="font-semibold text-lg bg-fondoClime rounded-t p-3">Monterrey <span className="font-normal text-base">A apartir de las <span>13:46 CST</span></span></p>

          <div className="font-bold space-y-3 p-3">

            <div className="flex items-center gap-8">
              <p className="text-8xl ">28º</p>
              <Sun/>
            </div>

            <p className="text-2xl">
              soleado 
            </p>
            <p className="text-xl"> Dia 28 <span>Noche 12</span></p>
          </div>   

        </div>


    </main>
  );
};

export default Main;