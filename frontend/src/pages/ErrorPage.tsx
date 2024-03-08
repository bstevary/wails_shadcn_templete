import { Button } from "../components/ui/button";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";

const Page404 = () => {
  const error = useRouteError();
  return (
    <>
      <div className="bg-accent w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <Card className=" flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
              {isRouteErrorResponse(error) ? "404" : "Bad Error"}
            </CardTitle>
            <CardDescription className="text-2xl border-b-4 md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
              {isRouteErrorResponse(error)
                ? "The page you’re looking for doesn’t exist."
                : "Unexpected Error Occured"}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link to="/">Go Back Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default Page404;
