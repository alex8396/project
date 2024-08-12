  import emotion1 from "./img/emotion1.png";
  import emotion2 from "./img/emotion2.png";
  import emotion3 from "./img/emotion3.png";
  import emotion4 from "./img/emotion4.png";
  import emotion5 from "./img/emotion5.png";

  import game1 from "./img/game1.png";
  import game2 from "./img/game2.png";
  import game3 from "./img/game3.png";

  import team1 from "./img/team1.png";
  import team2 from "./img/team2.png";
  import team3 from "./img/team3.png";
  import team4 from "./img/team4.png";
  import team5 from "./img/team5.png";
  import team6 from "./img/team6.png";
  import team7 from "./img/team7.png";
  import team8 from "./img/team8.png";
  import team9 from "./img/team9.png";


  export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId) {
      case "1":
        return emotion1;
      case "2":
        return emotion2;
      case "3":
        return emotion3;
      case "4":
        return emotion4;
      case "5":
        return emotion5;
      default:
        return null;
    }
  };

  export const getGameImgById = (gameId) => {
    const targetGameId = String(gameId);
    switch (targetGameId) {
      case "1":
        return game1;
      case "2":
        return game2;
      case "3":
        return game3;
      default:
        return null;
    }
  };
  export const getTeamImgById = (teamId) => {
    const targetTeamId = String(teamId);
    switch (targetTeamId) {
      case "1":
        return team1;
      case "2":
        return team2;
      case "3":
        return team3;
      case "4":
        return team4;
      case "5":
        return team5;
      case "6":
        return team6;
      case "7":
        return team7;
      case "8":
      return team8;
      case "9":
      return team9;
      default:
        return null;
    }
  };

  export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  };

  export const emotionList = [
    {
      id: 1,
      name: "완전 좋음",
      img: getEmotionImgById(1),
    },
    {
      id: 2,
      name: "좋음",
      img: getEmotionImgById(2),
    },
    {
      id: 3,
      name: "그럭저럭",
      img: getEmotionImgById(3),
    },
    {
      id: 4,
      name: "나쁨",
      img: getEmotionImgById(4),
    },
    {
      id: 5,
      name: "끔찍함",
      img: getEmotionImgById(5),
    },
  ];

  export const gameList = [
    {
      id: 1,
      name: "승",
      img: getGameImgById(1),
    },
    {
      id: 2,
      name: "무",
      img: getGameImgById(2),
    },
    {
      id: 3,
      name: "패",
      img: getGameImgById(3),
    },
    
  ];

  export const teamList = [
    {
      id: 1,
      name: "KIA",
      img: getTeamImgById(1),
    },
    {
      id: 2,
      name: "LG",
      img: getTeamImgById(2),
    },
    {
      id: 3,
      name: "삼성",
      img: getTeamImgById(3),
    },
    {
      id: 4,
      name: "SSG",
      img: getTeamImgById(4),
    },
    {
      id: 5,
      name: "KT",
      img: getTeamImgById(5),
    },
    {
      id: 6,
      name: "NC",
      img: getTeamImgById(6),
    },
    {
      id: 7,
      name: "롯데",
      img: getTeamImgById(7),
    },
    {
      id: 8,
      name: "한화",
      img: getTeamImgById(8),
    },
    {
      id: 9,
      name: "키움",
      img: getTeamImgById(9),
    },
  ];

  export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getTime();
    const endTimeStamp = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();
    return { beginTimeStamp, endTimeStamp };
  };
