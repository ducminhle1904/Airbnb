import Head from "next/head";
import Image from "next/image";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
const MediumCard = dynamic(() => import("../components/MediumCard"));
const LargeCard = dynamic(() => import("../components/LargeCard"));
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData }) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
    <div className="overscroll-x-none">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <SmallCard
                key={index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className="relative h-96 min-w-[300px] rounded-xl mt-5 overflow-hidden">
          <Image
            src="https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=720"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[25%] w-full text-left pl-10">
            <p className="text-sm sm:text-3xl font-semibold">
              Not sure where <br /> to go? Perfect.
            </p>
            <button className="bg-black text-white px-3 py-2 shadow-md rounded-xl font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 hover:bg-white hover:text-black">
              I'm flexible{" "}
            </button>
          </div>
        </section>
        <section ref={observe}>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section ref={observe}>
          <LargeCard
            img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720"
            title="Try hosting"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Learn more"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
