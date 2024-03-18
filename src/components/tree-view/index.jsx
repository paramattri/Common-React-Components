import MenuList from "./MenuList";
import "./styles.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
