import Image from "next/image";

function Banner() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
      style={{
        backgroundImage:
          "url(" +
          "https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg" +
          ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-1/4 w-full text-left ml-10">
        <p className="text-sm sm:text-6xl font-bold text-white">
          Olympian & <br /> Paralympian <br /> Online <br /> Experience
        </p>
        <button className="bg-white px-3 py-2 shadow-md rounded-xl font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Explore Now{" "}
        </button>
      </div>
    </div>
  );
}

export default Banner;
