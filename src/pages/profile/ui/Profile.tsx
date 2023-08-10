import { useProtectedQuery } from "entities/session";
import { FC, useEffect } from "react";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const { data } = useProtectedQuery();
  useEffect(() => {}, []);

  return <>{data?.user.email}</>;
};
