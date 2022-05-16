import { IoIosAddCircleOutline } from "react-icons/io";
import { Table } from "./components/table";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="container mx-auto px-4 pt-5">
        <div className="grid bg-white p-5 rounded-md mt-10 border-1 border-gray-300 drop-shadow-md">
          <Table></Table>
        </div>
      </div>

    </div>
  );
}

export default App;
