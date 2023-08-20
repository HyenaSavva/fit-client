import { useAppSelector } from "shared/model";
import { selectAuthorization } from "..";
import { useMemo } from "react";

export const useAuth = () => {
  const auth = useAppSelector(selectAuthorization);
  return useMemo(() => auth, [auth]);
};
