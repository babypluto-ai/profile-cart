import { Link } from "react-router-dom";

import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-rose-200 bg-red px-6 py-4 text-rose-50 sm:px-8 md:text-lg lg:text-xl">
      <Link to="/" className="tracking-wide">
        Profile.fyi Store
      </Link>

      <Username />
    </header>
  );
}

export default Header;
