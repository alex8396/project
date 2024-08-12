import "./Viewer.css";
import { emotionList } from "../util";
import { gameList } from "../util";
import { teamList } from "../util";

const Viewer = ({ content, emotionId,gameId, teamId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  console.log(emotionItem);
  const gameItem = gameList.find((it) => it.id === gameId);
  console.log(gameItem);
  const teamItem = teamList.find((it) => it.id === teamId);
  console.log(teamItem);

  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 경기후기</h4>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotionId}`,
          ].join(" ")}
        >
          <img alt={emotionItem.name} src={emotionItem.img} />
          <div className="emotion_descript">{emotionItem.name}</div>
        </div>
      </section>
      <section>
        <h4>상대팀</h4>
        <div
          className={[
            "team_img_wrapper",
            `team_img_wrapper_${teamId}`,
          ].join(" ")}
        >
          <img alt={teamItem.name} src={teamItem.img} />
          <div className="team_descript">{teamItem.name}</div>
        </div>
      </section>
      <section>
        <h4>경기결과</h4>
        <div
          className={[
            "game_img_wrapper",
            `game_img_wrapper_${gameId}`,
          ].join(" ")}
        >
          <img alt={gameItem.name} src={gameItem.img} />
          <div className="game_descript">{gameItem.name}</div>
        </div>
        <h4>오늘의 경기후기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
        
      </section>
    </div>
  );
};
export default Viewer;
