import Landing from "./sections/Landing";
import Gallery from "./sections/Gallery";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Landing />
        <Gallery />
      </MainLayout>
    </>
  );
};

export default App;
