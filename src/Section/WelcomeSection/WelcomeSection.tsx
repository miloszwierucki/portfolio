import { ActionArea } from "../../components/ActionArea/ActionArea";
import hello from "/Hello.png";
import photo from "../../assets/Photo.png";

export const WelcomeSection = () => (
  <section className="px-5 md:px-12 xl:px-28 3xl:px-32">
    <div className="min-h-[31rem] mt-24 sm:min-h-0 sm:w-[48rem] md:w-[54rem] md:mt-36 lg:w-[70rem] xl:w-[80rem] xl:mt-48 2xl:mt-52 3xl:w-[100rem] 3xl:mt-64">
      <h1 className="text-[1.75rem] font-semibold flex items-center lg:text-[2rem] xl:text-[2.5rem] 3xl:text-[3rem]">
        <img
          src={hello}
          alt="Photo of a waving hand"
          className="w-7 h-7 mr-2 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
        />
        Hello, I’m
        <span className="text-highlight font-bold">&nbsp;Miłosz</span>!
      </h1>
      <div className="font-medium w-1/2 min-w-[11rem] mt-8 xl:mt-4">
        <p className="text-[1.125rem] leading-[1.5rem] sm:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl">
          I’m a young hobbyist born in Poland. I write websites and construct 3D
          visualizations.
        </p>
        <p className="text-[0.95rem] mt-2 sm:text-base lg:text-lg xl:text-2xl 3xl:text-3xl 3xl:mt-3">
          I'm currently studying applied computer science at the{" "}
          <span className="text-highlight">Lodz University of Technology</span>.
          I'm passionate about tech, design, and the role they play in our
          everyday lives.
        </p>
      </div>
      <ActionArea />
    </div>
    <div className="right-[-1.5rem] top-48 absolute sm:right-0 sm:top-40 md:top-28 lg:right-16 xl:right-[6.5rem] xl:top-44 3xl:right-[5rem] 3xl:top-36 cover">
      <img
        src={photo}
        alt="Milosz Wierucki's photo"
        className="w-52 sm:w-64 md:w-80 lg:w-[22rem] xl:w-[26rem] 3xl:w-[35rem]"
      />
    </div>
  </section>
);
