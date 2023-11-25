import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import React from "react"

export const Header = () => {
  return (
    <>
      {/* <div className="bg-black p-1">
        <p className="text-white text-center italic">
          Get free shipping on orders above RS2,999
        </p>
      </div> */}
      <div className="flex gap-4 w-full items-center px-4 py-8">
        <div className="py-2">
          <h1 className="text-4xl font-medium">LOGO</h1>
        </div>
        <div className="flex flex-1 ">
          <input
            className="border border-zinc-300 py-2 px-4 w-full"
            placeholder="What are you looking for?"
            type="text"
          />
          <button className="p-2 bg-primary-1" type="button">
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="flex gap-2 py-2">
          <button className="" type="button">
            <UserCircleIcon className="h-6 w-6 text-primary-1" />
          </button>
          <button className="" type="button">
            <ShoppingCartIcon className="h-6 w-6 text-primary-1" />
          </button>
        </div>
      </div>
    </>
  )
}
