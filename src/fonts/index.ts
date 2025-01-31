import { IBM_Plex_Sans, Montserrat } from "next/font/google";

export const quickSand = Montserrat({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
