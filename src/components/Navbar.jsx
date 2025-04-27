import { assets } from "../assets/assets";

const Navbar = ({
  ScrollToContact,
  ScrollToAbout,
  ScrollToSkill,
  ScrollToProject,
}) => {
  return (
    <div className="flex justify-between items-center md:py-10 md:px-20 p-1 bg-slate-900 text-white">
      <img className="md:w-30 w-15" src="/ark2.png" alt="" />
      <div className="flex md:gap-10 gap-3">
        <h2
          className="cursor-pointer md:text-lg text-xs md:block hidden"
          onClick={() => ScrollToAbout()}
        >
          ABOUT ME
        </h2>
        <h2
          className="cursor-pointer md:text-lg text-xs"
          onClick={() => ScrollToSkill()}
        >
          SKILLS
        </h2>
        <h2
          className="cursor-pointer md:text-lg text-xs"
          onClick={() => ScrollToProject()}
        >
          PROJECTS
        </h2>
      </div>
      <div className="flex gap-2 border-1 rounded-full cursor-pointer p-0.5 md:text-lg text-xs">
        <button
          onClick={() => ScrollToContact()}
          className="md:py-2 md:px-4 py-1 px-2 cursor-pointer"
        >
          CONTACT
        </button>
        <div
          onClick={() => ScrollToContact()}
          className="bg-[#ffde59] w-10 h-10 rounded-full flex items-center justify-center"
        >
          <img src={assets.arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
