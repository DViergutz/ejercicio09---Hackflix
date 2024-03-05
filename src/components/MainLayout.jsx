import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import FoundMovie from "./FoundMovie";
import Home from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import NavbarHead from "./Navbar";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <NavbarHead />
        <Outlet />
      </div>

      <hr />
      <footer className="p-2 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fuga
        modi asperiores doloremque nostrum blanditiis? Natus vitae, ut
        reprehenderit, nostrum vero nulla doloribus cumque perferendis impedit
        omnis dignissimos qui architecto ullam sit ab libero nobis voluptatem
        tempora praesentium sint iusto. Animi delectus rerum porro sequi placeat
        soluta voluptate assumenda quod.
      </footer>
    </div>
  );
}

export default MainLayout;
