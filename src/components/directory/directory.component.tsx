import { category } from "../../types";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

interface Props {
  categories: category[];
}

const Directory = (props: Props) => {
  return (
    <div className="directory-container">
      {props.categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
