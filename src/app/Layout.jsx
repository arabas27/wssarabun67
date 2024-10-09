import { Outlet } from "react-router-dom";
import { FaComputer, FaFileLines } from "react-icons/fa6";
import { H1 } from "../components/typography";
import Dropdown from "../components/Dropdown";

function Navbar() {
  return (
    <nav className="flex justify-between bg-cyan-700 px-6 md:px-10 py-3">
      <a className="flex items-center gap-3 text-white font-bold" href="/">
        <FaComputer className="w-6 h-6" />
        <H1>WSSaraban</H1>
      </a>
    </nav>
  );
}

function Navigator() {
  return (
    <div className="flex items-center justify-center bg-cyan-700">
      <Dropdown
        title="เอกสาร"
        logo={<FaFileLines />}
        options={[
          {
            optionTitle: "สร้างบันทึกข้อความ",
            link: "create",
          },
          {
            optionTitle: "test2",
            link: "https://www.google.com",
          },
        ]}
      />
    </div>
  );
}

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Navigator />
      <Outlet />
    </div>
  );
}
