import { useParams } from "react-router-dom";

export const AboutParam = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>AboutParam</h1>
      <p>{`paramは${id}`}</p>
    </div>
  );
};
