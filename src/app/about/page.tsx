import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-6 items-center  h-[calc(100vh-200px)]">
      <span className="text-green font-extrabold text-xl md:hidden">
        Hello, I am Gopala
      </span>
      <div className="overflow-y-scroll md:overflow-hidden flex flex-col md:flex-row justify-start gap-6 h-full md:mt-2">
        <div className="w-full ">
          <Image
            src="/profile.jpg"
            alt="Picture of the author"
            width={500}
            height={400}
            className="border-pattern"
          />
        </div>

        <p className="font-bold text-gray-700 text-start">
          <span className="text-green font-extrabold text-xl hidden md:inline">
            Hello, I am Gopala
          </span>
          <br  className="hidden md:block"/>
          <br   className="hidden md:block"/>
          I am a Full-Stack Developer with a strong background in developing
          scalable web applications and a strong startup mindset.
          <br />
          <br />
          Dedicated to delivering high-performance, user-centric solutions while
          fostering collaborative team environments.
        </p>
      </div>
    </div>
  );
};

export default Home;
