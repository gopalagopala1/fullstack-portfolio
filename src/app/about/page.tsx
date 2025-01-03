import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col justify-start gap-6 mt-2">
      <div className="border-pattern">
        <Image
          src="/profile.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>

      <p className="font-bold text-gray-700 text-start">
        <span className="text-green font-extrabold text-2xl">
          Hello, I am Gopala
        </span>
        <br />
        <br />

        I am a Full-Stack Developer with a strong background in developing
        scalable web applications and a strong startup mindset.
        <br />
        <br />
        
        Dedicated to delivering high-performance, user-centric solutions while
        fostering collaborative team environments.

      </p>
    </div>
  );
};

export default Home;
