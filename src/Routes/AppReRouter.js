import { useParams, useLocation } from 'react-router-dom';

const AppReRouter = () => {
  const { from, to } = useParams();
  const location = useLocation();
  // const history = useHistory();

  const reRouter = (start, endPoint) => {
    switch (endPoint || location.pathname) {
      case '/':
        break;
      default:

        break;
    }
    return 0;
  };

  return reRouter(from, to);
};

export default AppReRouter;
