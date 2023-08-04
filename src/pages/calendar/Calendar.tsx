import { IPost } from "shared/types/IPost";
import { FC } from "react";
import { postAPI } from "examples/api/PostService";
import styles from "./Calendar.module.css";
import Schedule from "components/common/schedule/Schedule";

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  const { data: posts } = postAPI.useFetchAllPostsQuery(10);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreatePost = async () => {
    const title = prompt();
    await createPost({ id: title, title, body: title } as IPost);
  };

  return <div className={styles.calendar}>{/* <Schedule /> */}</div>;
};

export default Calendar;
