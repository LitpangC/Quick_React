import { useAuthState, useDbData } from "./firebase";

export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, isLoading, error] =  useDbData(`/admin/${user?.uid || 'guest'}`);
  return [{ user, isAdmin }, isLoading, error];
};