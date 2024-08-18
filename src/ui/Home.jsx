import { useSelector } from "react-redux";

import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-2xl font-semibold md:text-3xl lg:text-4xl">
        Find Your Favorites -
        <br />
        <span className="text-red">Seamless Shopping Made Simple!</span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/products" type="primary">
          Continue shopping, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
