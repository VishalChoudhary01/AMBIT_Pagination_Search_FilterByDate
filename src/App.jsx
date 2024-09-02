import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import TableData from "./components/TableData";

function App() {
  return (
    <Router>
      <section className="mx-auto flex justify-center w-full px-1">
        <section className="w-[15%] h-screen border-r shadow-md shadow-gray-300">
          <SideMenu />
        </section>
        <section className="w-[85%]">
          <Navbar />
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<TableData />} />
            {/* Table Data Route with Pagination */}
            <Route path="/table/:page" element={<TableData />} />
            {/* Catch-All Route for 404 */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </section>
      </section>
    </Router>
  );
}

export default App;
