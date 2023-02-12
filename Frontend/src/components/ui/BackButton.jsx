import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();

  return (
    <button classname="back-button" onClick={history.goBack}>
      Back
    </button>
  );
};
