import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("경기후기가 존재하지 않습니다");
      navigate("/", { replace: true });
    }
  }, [id, data, navigate]);  // navigate를 종속성 배열에 추가합니다.

  return diary;
};

export default useDiary;
