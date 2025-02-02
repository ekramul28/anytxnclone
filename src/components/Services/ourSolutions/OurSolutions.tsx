import SolutionCard from "@/components/ui/SolutionCard";

const OurSolutions = () => {
  const solutions = [
    {
      title: "AnyCaaS",
      titleClassName:
        "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-700", // Text gradient from blue to teal
      description:
        "Experience seamless and secure banking solutions with us. Reimagine your card programmes with Our Cards as a Service(CaaS) solution. Streamline card management, deliver superior customer experiences, and more.",
      image: "https://anytxn.com/icons/logo-small.svg",
    },
    {
      title: "AnyBaaS",
      titleClassName:
        "bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text", // Text gradient from green to blue
      description:
        "Dive into the future of banking with Our Bank as a Service(BaaS) platform that gives you the tools you need to adapt and scale in today’s fast-paced digital environment.",
      image: "https://anytxn.com/icons/logo-small.svg",
    },
    {
      title: "AnyPaaS",
      titleClassName:
        "bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text", // Text gradient from purple to pink
      description:
        "Enhance your payment processing capabilities with Our Payment as a Service(PaaS) solution. Experience scalable and secure infrastructure that handles transactions with ease.",
      image: "https://anytxn.com/icons/logo-small.svg",
    },
  ];

  return (
    <div className="py-12 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1876E4] mb-8">
          Our Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
