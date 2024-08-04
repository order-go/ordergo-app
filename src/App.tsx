import SectionFooter from "./components/organisms/SectionFooter";
import SectionHeader from "./components/organisms/SectionHeader"
import SectionServices from "./components/organisms/SectionServices";
import Homepage from "./template/Page"

function App() {
  return (
    <div className="bg-black w-[100vw] h-[100vh] p-4 sm:pt-8 sm:px-16 flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-24 ">
      <main className="flex flex-col justify-center items-center sm:items-start sm:justify-evenly sm:h-full  sm:w-1/2">
        <SectionHeader />
        <Homepage />
        <div className="sm:hidden">
          <SectionServices />
        </div>
        <div className="sm:block  md:w-[100%]">
          <SectionFooter />
        </div>
      </main>
      <div className="hidden sm:block">

        <SectionServices />
      </div>
      <div className="hidden md:hidden  md:w-[100%]">
        <SectionFooter />
      </div>

    </div>
  );
}

export default App;
