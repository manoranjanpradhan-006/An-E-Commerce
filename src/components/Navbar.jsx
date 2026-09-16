const Navbar = () => {
  return (
    <>
      <nav className="bg-orange-100 text-emerald-800 border-b-2 border-b-orange-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
          <div className="nav-left flex items-center justify-between">
            <div className="logo text-2xl font-bold flex items-center gap-2 px-3">
              <h1>Your Commerce</h1>
            </div>
          </div>
          <div className="nav-center flex gap-8 text-xl font-bold">
            <a
              href="/"
              className="hover:text-orange-700 hover:scale-105 transition"
            >
              Home
            </a>
            <a
              href="/Shop"
              className="hover:text-orange-700 hover:scale-105 transition"
            >
              Shop
            </a>
            <a
              href="/Products"
              className="hover:text-orange-700 hover:scale-105 transition"
            >
              Products
            </a>
            <a
              href="/Categories"
              className="hover:text-orange-700 hover:scale-105 transition"
            >
              Categories
            </a>
            <a
              href="/Deals"
              className="hover:text-orange-700 hover:scale-105 transition"
            >
              Deals
            </a>
          </div>
          <div className="nav-right flex items-center gap-5 text-xl px-3">
            <button className="hover:text-orange-700 hover:scale-105 transition">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="hover:text-orange-700 hover:scale-105 transition">
              <i class="fa-regular fa-user"></i>
            </button>
            <button className="hover:text-green-500 hover:scale-105 transition">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
