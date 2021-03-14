import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const attr = {
  size: "1.5rem",
  className: "mr-2 like-btn",
};

const Like = ({ liked, onToggleLike }) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart;
  return <Icon onClick={onToggleLike} {...attr} />;
};

export default Like;
