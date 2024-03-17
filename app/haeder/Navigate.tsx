'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Searching from "./Searching";

function Navigate() {
    const [mode, setMode ]= useState<string>("dark");
    const [menuActive, setMenuActive ] = useState<boolean>(false);


    const menu = [
        {name : "Home", url: "/"},{name : "History", url: "/history"},{name : "Account", url: "/account"}
    ];

    useEffect(()=>{
        if (mode === "dark") {
            document.querySelector("html")?.classList.add("dark");
            document.querySelector("html")?.classList.remove("light");
        }else{
            document.querySelector("html")?.classList.remove("dark");
            document.querySelector("html")?.classList.add("light");
        }
    },[mode])


    const handleMode = ()=>{
        setMode(modeChange => modeChange === "light" ? modeChange = "dark" : modeChange = "light" );
    };

    const activatedMenu = ()=>{
        setMenuActive(!menuActive);
    }

  return (
        <header className="py-5 bg-header dark:bg-dark">
            <nav className="flex justify-between items-center md:w-[calc(100%-400px)] w-[calc(100%-50px)] mx-auto ">
                <h2 className="uppercase font-bold">
                    <Link href="/">App Clime</Link>
                </h2>

                
                <form action="#" >
                    <div className="relative bg-white rounded-full p-1 flex gap-1">
                        <input type="text" placeholder="Searching city or Zip code" className=" text-black rounded-l-full focus:outline-none " />
                        <button type="submit" className="text-black p-1">
                            <Searching/>
                        </button>
                    </div>
                </form>

                <div className="flex items-center gap-3 ">
                    <div className="flex items-center">
                            <label className="relative inline-flex cursor-pointer items-center">
                            <input id="switch" type="checkbox" className="peer sr-only" onChange={handleMode} />
                            <div className="peer h-6 w-11 rounded-full border-black bg-gray-600 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-black "></div>
                        </label>
                    </div>

                    <div className=" flex relative">
                        <button className={`${menuActive ? 'dark:bg-menuActivited border border-black rounded bg-gray-200' : 'border border-black rounded dark:border-gray-300 dark:hover:bg-menuActivited hover:bg-gray-200'}`} onClick={activatedMenu}>
                            <Menu mode={mode}/>
                        </button>

                        <ul className={` ${menuActive ? 'dark:bg-menu rounded absolute top-10 right-0  w-52 h-fit bg-white' : 'hidden' }`}>
                        {
                            menu.map((m, i)=>(
                                <li  className="flex py-1" key={i}>
                                    <Link href={m.url} className="flex w-full py-2 pl-3 decoration-1 dark:hover:bg-gray-600 hover:underline hover:bg-gray-200">{m.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Navigate