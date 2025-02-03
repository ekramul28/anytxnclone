/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@/components/shared/Header";

interface DynamickBannerProps {
  gradient: any;
  title: string;
  subtitle: string;
  description: string;
}

const DynamickBanner: React.FC<DynamickBannerProps> = ({
  gradient,
  title,
  subtitle,
  description,
}) => {
  return (
    <>
      <div className="relative  [clip-path:polygon(0%_0%,100%_0%,100%_70%,0%_100%)] bg-gradient-to-r from-[#1B7BEA] to-[#1274e5] min-h-screen flex flex-col justify-center items-center text-white">
        {/* Header */}
        <div className="absolute top-0 left-0 w-full z-30">
          <Header />
        </div>

        {/* Banner Content */}
        <div className="container mx-auto md:flex flex-col md:flex-row items-center justify-between md:px-12 text-center md:text-left relative z-30">
          {/* Left Section */}
          <div className="md:w-1/2 mt-16 md:mt-2">
            <h1 className="text-2xl text-[#00DFE0] mb-6 font-semibold leading-tight">
              {title} {/* Dynamic Title */}
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              {subtitle} {/* Dynamic Subtitle */}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-lg">
              {description} {/* Dynamic Description */}
            </p>
          </div>
        </div>

        {/* Dynamic Background with Clip-Path */}
        {gradient}
      </div>
    </>
  );
};

export default DynamickBanner;
