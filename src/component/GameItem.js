import React from "react";
import "./GameItem.css";

const GameItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div
      className={[
        "GameItem",
        isSelected ? `GameItem_on_${id}` : `GameItem_off`,
      ].join(" ")}
      onClick={handleOnClick}
    >
      <img alt={`Game${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};
export default React.memo(GameItem);
