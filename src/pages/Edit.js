import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (window.confirm("경기후기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("경기후기를 정말 수정할까요?")) {
      const { date, content, emotionId,gameId,teamId } = data;
      onUpdate(id, date, content, emotionId,gameId,teamId);
      navigate("/", { replace: true });
    }
  };

  if (!data) {
    return <div>경기후기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title={"경기후기 수정하기"}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          rightChild={
            <Button
              type={"negative"}
              text={"삭제하기"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};
export default Edit;
