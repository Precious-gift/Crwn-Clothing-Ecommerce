import { Outlet } from "react-router-dom";
import categoriesList from "../../components/categories-List/categories-list";
import Categories from "../../components/categories/categories.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories list={categoriesList} />
    </div>
  );
};

export default Home;
