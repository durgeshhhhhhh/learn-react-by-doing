import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <img
        src="https://assets.gcore.pro/site-media/uploads/error_404_how_to_fix_it_fi_7058deb95f.png"
        alt="error-image"
        className="error-image"
      />
      <h1 className="error-title">
        Error : {useRouteError().status}! {useRouteError().statusText}
      </h1>
      <p className="error-message">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="back-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error;
