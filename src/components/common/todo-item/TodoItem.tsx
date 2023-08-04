import { IPost } from "shared/types/IPost";
import { FC, MouseEvent } from "react";

interface TodoItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

const TodoItem: FC<TodoItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = () => {
    const title = prompt() || "";
    update({ ...post, title: title });
  };

  return (
    <>
      <button onClick={handleRemove}>Delete</button>
      <span onClick={handleUpdate}>
        {post.id}. {post.title}
      </span>
    </>
  );
};

export default TodoItem;
