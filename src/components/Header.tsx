import { Menu } from "./Menu";

export const Header: any = () => {
  return (
    <header className="w-full px-20 h-24 flex justify-between items-center relative z-0 md:px-12 xs:px-4">
      <div
        className={`absolute w-1/3 h-[300%] top-[-1.5rem] left-0 z-[-1] bg-[url('src/assets/blobNav.svg')] bg-[100%,100%] bg-no-repeat bg-left-top sm:w-[45%] xs:w-[80%] xs:top-0`}
      ></div>
      <div className="text-4xl font-semibold drop-shadow-[0_0.1rem_0.1rem_rgba(146,123,123,0.3)] 2xl:text-[2.5rem] xs:text-3xl">
        Miłosz Wierucki
      </div>
      {/* <Menu /> */}
    </header>
  );
};
