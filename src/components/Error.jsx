import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  //   console.log("error ", error);

  return (
    <div className="extras">
      <div className="extras__container">
        <h1>Error: {error.message}</h1>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
      </div>
    </div>
  );
};
