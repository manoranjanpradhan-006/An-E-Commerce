const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
          <div className="nav-left flex items-center justify-between">
            <div className="logo text-xl font-bold flex items-center gap-2 px-3">
              <h1>Your Commerce</h1>
            </div>
          </div>
          <div className="nav-center flex gap-8 text-xl ">
            <h1>Home</h1>
            <h1>Shop</h1>
            <h1>Categoies</h1>
            <h1>Deals</h1>
            <h1>About</h1>
          </div>
          <div className="nav-right flex items-center gap-5 text-xl px-3">
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button>
              <i class="fa-regular fa-user"></i>
            </button>
            <button>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
