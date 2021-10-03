import React from "react";
import { useHistory } from "react-router-dom";
export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
        consequatur quaerat quibusdam perferendis dicta culpa incidunt! Facere
        fugiat, quia sequi eius autem dolore reprehenderit id placeat, corporis,
        provident ex enim.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to the todo list
      </button>
    </>
  );
};
