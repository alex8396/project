import "./Editor.css";
import { useState, useEffect, useCallback } from "react";
import { emotionList, getFormattedDate, gameList, teamList } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";
import GameItem from "./GameItem";
import TeamItem from "./TeamItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    gameId: 4,
    teamId: 10,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  const handleChangeGame = useCallback((gameId) => {
    setState((state) => ({
      ...state,
      gameId,
    }));
  }, []);

  const handleChangeTeam = useCallback((teamId) => { // 수정된 함수 이름
    setState((state) => ({
      ...state,
      teamId,
    }));
  }, []);

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <h4>오늘의 날짜</h4>
      <div className="input_wrapper">
        <input type="date" value={state.date} onChange={handleChangeDate} />
      </div>
      <div className="editor_section">
        <h4>경기 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>경기 결과</h4>
        <div className="input_wrapper game_list_wrapper">
          {gameList.map((it) => (
            <GameItem
              key={it.id}
              {...it}
              onClick={handleChangeGame}
              isSelected={state.gameId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>상대팀</h4>
        <div className="input_wrapper team_list_wrapper">
          {teamList.map((it) => ( // gameList -> teamList로 수정
            <TeamItem
              key={it.id}
              {...it}
              onClick={handleChangeTeam}
              isSelected={state.teamId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 경기후기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘 경기는 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>

      <div className="editor_section bottom_section">
        <Button text={"취소하기"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
