import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length && (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="ffffff" size={25} />
            ) : (
              <FaPlus color="ffffff" size={25} />
            )}
          </span>
        )}
      </div>

      {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] && <MenuList list={item.children} />}
    </li>
  );
};

export default MenuItem;
