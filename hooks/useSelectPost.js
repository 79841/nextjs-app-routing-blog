import { useDispatch, useSelector } from "react-redux";

const useSelectPost = () => {
  const selectedPost = useSelector((state) => state.postSelector.selectedPost);
  const dispatch = useDispatch();
  const handleClick = ({ target }) => {
    if (selectedPost !== null) {
      selectedPost.style.color = "black";
    }
    dispatch(select(target));
  };
  return [selectedPost, handleClick];
};

export default useSelectPost;
