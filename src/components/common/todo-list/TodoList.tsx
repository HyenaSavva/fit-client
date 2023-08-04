import { FC } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { IPost } from "shared/types/IPost";
import { IUser } from "shared/types/IUser";

interface TodoListProps {
  items: IPost[] | IUser[];
}

const TodoList: FC<TodoListProps> = (items) => {
  return (
    <DataTable value={[items]}>
      <Column field="id" header="id"></Column>
      <Column field="title" header="title"></Column>
    </DataTable>
  );
};

export default TodoList;
