import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
  const error = useRouteError();
  console.error(error);

  return(
    <div className="error-page">
      <h1>Page not found?</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}