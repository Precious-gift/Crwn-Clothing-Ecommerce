import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

const Categories = ({ list }) => {
  return (
    <div className="categories-container">
      {list.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
