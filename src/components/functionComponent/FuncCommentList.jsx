import FuncSingleComment from "./FuncSingleComment";

const FuncCommentList = (props) => {
  return (
    <>
      {props.commentiM.map((com) => (
        <FuncSingleComment upDate={props.upDate} commento={com} key={com._id} />
      ))}
    </>
  );
};
export default FuncCommentList;
