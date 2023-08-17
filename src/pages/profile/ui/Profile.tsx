import { useProtectedQuery } from "entities/session";
import { FC, useEffect } from "react";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const { data } = useProtectedQuery();
  useEffect(() => {}, []);

  return <>{data ? data?.user.email : "something went wrong"}</>;
};
