import LOGO from "../../assets/TaskSphere.png";
import TEXT_BLACK from "../../assets/TaskSphere_Text_Black.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className=" w-[50px]">
        <img src={LOGO} alt="TaskSphere Logo" />
      </div>

      <img className=" w-[200px] " src={TEXT_BLACK} alt="TaskSphere Text" />
    </div>
  );
}
