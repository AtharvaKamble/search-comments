import { NavigationBar } from "./components/NavigationBar";
import { Search } from "./components/Search";
import dotenv from "dotenv";
dotenv.config();

function App() {
  return (
    <div className="flex flex-col justify-center w-full">
      <NavigationBar />
      <Search />
    </div>
  );
}

export default App;
