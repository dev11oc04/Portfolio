
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-8xl font-bold text-gradient">404</h1>
        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 group"
        >
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
