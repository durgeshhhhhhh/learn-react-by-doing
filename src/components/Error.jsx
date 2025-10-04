import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <img
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt="Error"
        className="max-w-md w-full mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Oops! Something went wrong
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {err.status}: {err.statusText}
      </p>
      <Link to="/" className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
