import { useProtectedQuery, useAuth } from "entities/session";
import { FC, useEffect } from "react";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const { data, error } = useProtectedQuery();
  const { user, token } = useAuth();

  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <>
      {!error && data ? data.user.email : <>{JSON.stringify(error, null, 2)}</>}
    </>
  );
};
