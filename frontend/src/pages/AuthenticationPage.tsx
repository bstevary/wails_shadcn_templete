import { cn } from "../utils/twMerge";
import { buttonVariants } from "../components/ui/button";
import { UserAuthForm } from "../components/user-auth-form";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-universal.png";

export default function AuthenticationPage() {
  return (
    <>
      <div className="container    flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className=" hidden    flex-col   text-white  lg:flex">
          <img src={logo} alt=" logo" />
        </div>
        <div className="md:pt-0 pt-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
