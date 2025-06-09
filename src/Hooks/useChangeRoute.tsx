import { useNavigate } from 'react-router-dom';

export const useChangeRoute = () => {
  const navigate = useNavigate();

  const changeRoute = (route: string) => {
    navigate("/" + route);
  };

  return changeRoute;
};