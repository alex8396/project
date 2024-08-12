import React from "react";
import "./TeamItem.css";

const GameItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div
      className={[
        "TeamItem",
        isSelected ? `TeamItem_on_${id}` : `TeamItem_off`,
      ].join(" ")}
      onClick={handleOnClick}
    >
      <img alt={`Team${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};
export default React.memo(GameItem);
