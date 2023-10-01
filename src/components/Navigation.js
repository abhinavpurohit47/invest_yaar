import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="mt-16 flex justify-around items-center border border-purple rounded-lg md:w-2/5 lg:w-1/3"
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full p-0.5 text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-purple text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-purple active:bg-purple active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full p-0.5 text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-purple text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-purple active:bg-purple active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-purple text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-purple active:bg-purple active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
