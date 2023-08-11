import { useAppSelector } from "shared/model";
import { selectCurrentUser } from "..";
import { useMemo } from "react";

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => user, [user]);
};
