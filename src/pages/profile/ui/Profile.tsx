import { useAuth } from "entities/session";
import { useGetUsersQuery } from "entities/account";
import { FC, useEffect } from "react";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const { data, error } = useGetUsersQuery();
  const { token } = useAuth();

  useEffect(() => {}, []);
  // console.log(token);

  return <>{!error && data ? data : <>{JSON.stringify(error, null, 2)}</>}</>;
};
