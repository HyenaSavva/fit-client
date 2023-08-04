import { FC } from "react";
import { MenuItem } from "primereact/menuitem";

interface CustomOptionProps extends MenuItem {
  isShrinked: boolean;
  name: string;
  path: string;
}
//@ts-ignore
const CustomOption: FC<CustomOptionProps> = ({ isShrinked, name, path }) => {
  return <></>;
};

export default CustomOption;
