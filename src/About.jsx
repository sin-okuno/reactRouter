import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/about/100">AboutParam</Link>
    </div>
  );
};
