import { Header } from "./Header";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import blobs from "../assets/blobsBackground.svg";
import waves from "../assets/wave1.svg";
import hello from "../assets/hello.svg";
import photo from "../assets/myPhoto.svg";

const Social = ({ link, icons }: { link: string; icons: any }) => {
  return (
    <a
      href={link}
      className="text-4xl text-[#5F5050] hover:text-[#463B3B] drop-shadow-lg duration-500 ml-2"
    >
      {icons()}
    </a>
  );
};

export const Welcome: any = () => {
  return (
    <div className="bg-[#FCF6EC] w-full h-screen relative z-0">
      <Header />
      <section className="flex flex-col justify-center w-5/12 h-3/4 ml-36">
        <div className="flex text-5xl font-semibold items-center mb-10">
          <img
            src={hello}
            alt="waving hand"
            className="w-12 pointer-events-none mr-4"
          />
          <p>
            Hello, I’m <span className="text-[#927B7B]">Miłosz</span>!
          </p>
        </div>
        <p className="text-3xl font-normal">
          I’m a young hobbyist born in Poland I write websites and construct 3D
          visualizations.
        </p>
        <div className="flex items-center mt-10 h-12">
          <button className="bg-[#5F5050] hover:bg-[#463B3B] text-3xl w-1/2 font-medium text-white rounded-md p-1 duration-500 drop-shadow-lg">
            Contact me
          </button>
          <Social
            link="https://www.instagram.com/milosz_wierucki/"
            icons={GrInstagram}
          />
          <Social
            link="https://www.linkedin.com/in/milosz-wierucki/"
            icons={BsLinkedin}
          />
        </div>
      </section>
      <img
        src={blobs}
        alt=""
        className="absolute right-0 top-2 w-[48%] z-[-1] pointer-events-none"
      />
      <img
        src={photo}
        alt="Milosz thinking"
        className="w-1/2 right-[-2rem] top-36 absolute"
      />
      <img
        src={waves}
        alt="wave"
        className="w-full bottom-0 translate-y-[100%] absolute z-[-2] pointer-events-none"
      />
    </div>
  );
};
