import Highlights from "../Components/Highlights/Highlights";
import NavBar from "../Components/NavBar/NavBar";
import Section1 from "../Components/Sections/Section1";

export default function HomeServer() {
  return (
    <div className="flex flex-col p-5 pl-10 gap-9 bg-[#00000E]">
      <NavBar />
      <Section1 />
      <Highlights />
    </div>
  )
}