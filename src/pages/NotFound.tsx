import { Button } from "flowbite-react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom";

const NotFound = () => {
  // instance from router error
  const error = useRouteError();

  // set type for error status & text
  let errorStatus: number;
  let errorStatusText: string;

  // condition for fix type error
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <>
      
      <main className="min-h-screen text-center bg-gray-900 w-full flex justify-center items-center flex-col gap-y-3  text-white">
        <div>
          <h1 className="text-9xl">{errorStatus}</h1>
          <p className="text-5xl">{errorStatusText}</p>
          <Button as={NavLink} to={"/"} replace={true} className="mt-7 mx-auto">
            <IoArrowUndoSharp className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </main>
    </>
  );
};

export default NotFound;
