import { Menu } from "./Menu";
const blob = "src/assets/blobNav.svg";

export const Header: any = () => {
  return (
    <header className="w-full px-20 h-20 flex justify-between items-center relative z-0 2xl:h-24">
      <div
        className={`absolute w-4/12 h-[300%] top-[-1.5rem] left-0 z-[-1] bg-[url('${blob}')] bg-[100%,100%] bg-no-repeat bg-left-top`}
      ></div>
      <div className="text-4xl font-semibold drop-shadow-[0_0.1rem_0.1rem_rgba(146,123,123,0.3)] 2xl:text-[2.5rem]">
        Miłosz Wierucki
      </div>
      {/* <Menu /> */}
    </header>
  );
};
