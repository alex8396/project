import React from "react";
import { useNavigate } from "react-router-dom";
import "./DiaryItem.css";
import { getEmotionImgById } from "../util";
import { getGameImgById } from "../util";
import { getTeamImgById } from "../util";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date, gameId,teamId }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={["img_section", `img_section_${emotionId}`].join(" ")}
      >
        <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
      </div>
      <div
        onClick={goDetail}
        className={["img_section", `img_section__${gameId}`].join(" ")}
      >
        <img alt={`game${gameId}`} src={getGameImgById(gameId)} />
      </div>
      <div
        onClick={goDetail}
        className={["img_section", `img_section___${teamId}`].join(" ")}
      >
        <img alt={`team${teamId}`} src={getTeamImgById(teamId)} />
      </div>
      <div onClick={goDetail} className="info_section">
        <div className="date_wrapper">
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div className="content_wrapper">{content.slice(0, 25)}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
