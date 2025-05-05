import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
