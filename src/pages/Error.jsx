import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <MainLayout>
      <div className="flex w-full h-screen flex-col items-center justify-center">
        <h1>Oops!</h1>
        <h1>404 not found</h1>
        <p>We couldn’t find the page you’re looking for.</p>
        <Link to="/wear-it-right/">Go back</Link>
      </div>
    </MainLayout>
  );
};

export default Error;
