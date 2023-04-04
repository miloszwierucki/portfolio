import { ActionArea } from "../../components/ActionArea/ActionArea";
import hello from "/Hello.png";
import photo from "../../assets/Photo.png";

export const WelcomeSection = () => (
  <section className="px-28">
    <div className="w-[40rem] mt-48">
      <h1 className="flex items-center text-[2.5rem] font-semibold">
        <img
          src={hello}
          alt="photo of a waving hand"
          className="w-10 h-10 mr-2"
        />
        Hello, I’m
        <span className="text-text font-bold">&nbsp;Miłosz</span>!
      </h1>
      <div className="mt-4">
        <p className="text-3xl">
          I’m a young hobbyist born in Poland. I write websites and construct 3D
          visualizations.
        </p>
        <p className="text-2xl mt-2">
          I'm currently studying applied computer science at the Lodz University
          of Technology. I'm passionate about tech, design, and the role they
          play in our everyday lives.
        </p>
      </div>
      <ActionArea />
    </div>
    <div className="absolute top-[11rem] right-[6.5rem] cover">
      <img src={photo} alt="Milosz Wierucki's photo" className="w-[26rem]" />
    </div>
  </section>
);
