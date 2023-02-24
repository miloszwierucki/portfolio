import { Header } from "./Header";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
const blobs = "src/assets/blobsBackground.svg";
const waves = "src/assets/wave1.svg";
import hello from "../assets/hello.svg";
import photo from "../assets/photoMy.png";

const Social = ({ link, icons }: { link: string; icons: any }) => {
  return (
    <a
      href={link}
      className="text-4xl text-[#5F5050] hover:text-[#463B3B] drop-shadow-lg duration-500 ml-2 2xl:text-[2.6rem]"
    >
      {icons()}
    </a>
  );
};

export const Welcome: any = () => {
  return (
    <div className="bg-[#FCF6EC] w-full h-screen relative z-0">
      <Header />
      <section className="flex flex-col justify-center w-5/12 h-3/4 ml-36 mt-10">
        <div className="flex text-5xl font-semibold items-center mb-8 2xl:text-6xl">
          <img
            src={hello}
            alt="waving hand"
            className="w-12 pointer-events-none mr-4"
          />
          <p>
            Hello, I’m <span className="text-[#927b7b] font-bold">Miłosz</span>!
          </p>
        </div>
        <p className="text-2xl font-normal 2xl:text-3xl">
          I’m a young hobbyist born in Poland I write websites and construct 3D
          visualizations.
        </p>
        <p className="text-lg mt-1 2xl:text-xl">
          I'm currently studying applied computer science at the
          <span className="font-semibold text-[#5F5050]">
            {" "}
            Lodz University of Technology
          </span>
          . I'm passionate about tech, design, and the role they play in our
          everyday lives.
        </p>
        <div className="flex items-center mt-10 h-10 2xl:h-14">
          <button className="bg-[#5F5050] hover:bg-[#463B3B] text-2xl w-1/2 h-full font-medium text-white rounded-md p-1 duration-500 drop-shadow-lg 2xl:text-[1.7rem]">
            <a href="#contact" className="w-full h-full">
              Contact me
            </a>
          </button>
          <Social
            link="https://www.instagram.com/m.wierucky/"
            icons={GrInstagram}
          />
          <Social
            link="https://www.linkedin.com/in/milosz-wierucki/"
            icons={BsLinkedin}
          />
        </div>
      </section>
      <div
        className={`absolute h-[200vh] right-0 top-2 w-[48%] z-[-1] bg-[url('${blobs}')] bg-[100%,100%] bg-no-repeat bg-left-top`}
      ></div>
      <img
        src={photo}
        alt="Milosz thinking"
        className="w-1/3 right-16 top-36 absolute drop-shadow-[5px_-5px_5px_rgba(135,222,15,0.1)] pointer-events-none 2xl:w-[30%] 2xl:top-44 2xl:right-20"
      />
      <div
        className={`absolute w-full h-screen bottom-0 left-0 translate-y-[100%] z-[-2] bg-[url('${waves}')] bg-[100%,100%] bg-no-repeat bg-left-top`}
      ></div>
    </div>
  );
};
