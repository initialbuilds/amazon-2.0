import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue px-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            width="150"
            height="40"
            objectFit="contain"
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
          />
        </div>

        <div className="hidden sm:flex items-center flex-grow h-10 rounded-md cursor-pointer bg-yellow-400 transition duration-300 hover:bg-yellow-500">
          <input
            className="px-4 py-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="search"
            placeholder="Search Items"
          />
          <SearchIcon className="p-4 h-12" />
        </div>

        <div className="flex items-center space-x-6 mx-6 text-white text-xs whitespace-nowrap">
          <div className="link">
            <p>Hello Parshva Runwal</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative">
            <span className="absolute top-0 right-0 w-4 h-4 bg-yellow-400 rounded-full text-black text-center">
              4
            </span>
            <ShoppingCartIcon className="h-8" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 pl-6 pr-2 py-2 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon business</p>
        <p className="link">Today's Deals</p>
        <div className="hidden lg:flex items-center space-x-3">
          <p className="link">Electronics</p>
          <p className="link">Food & Grocery</p>
          <p className="link">Prime</p>
          <p className="link">Health & Personal Care</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
