import { Menu } from "./Menu";
import blobNav from "../assets/blobNav.svg";

export const Header: any = () => {
  return (
    <header className="w-full px-20 h-20 flex justify-between items-center relative z-0">
      <img
        src={blobNav}
        className="absolute top-[-1.5rem] left-0 w-4/12 z-[-1] pointer-events-none"
      />
      <div className="text-4xl font-semibold">Miłosz Wierucki</div>
      {/* <Menu /> */}
    </header>
  );
};
