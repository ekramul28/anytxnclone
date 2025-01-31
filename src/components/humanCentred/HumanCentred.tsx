import Image from "next/image";
import HumanCentredCard from "./HumanCentredCard";

const HumanCentred = () => {
  return (
    <div>
      <div className="grid justify-center items-center">
        <div className="text-center">
          <h2 className="text-[#1F80F0]">OUR PHILOSOPHY</h2>
          <h1 className="text-2xl font-bold">Human-centred innovation</h1>
        </div>
        <div className="flex items-end justify-start h-full w-full">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format"
            height={1000}
            width={1000}
            alt="bg"
            className=""
          />
        </div>
      </div>
      <HumanCentredCard />
    </div>
  );
};

export default HumanCentred;
