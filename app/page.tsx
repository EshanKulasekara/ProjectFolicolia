import Image from "next/image";
import Header from "@/components/Header";
//import localfont from "@next/font/local";
import localFont from "next/font/local";
import frogimage from "../public/Images/frognobg.png";

const abodafont = localFont({src: "../public/Abolda.otf"});

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="Hero px-10 py-20 flex justify-center">
        <div>
          <h2 className={`${abodafont.className} text-[50px] leading-none`}>Project</h2>
          <h1 className={`${abodafont.className} text-[200px] leading-none text-primary`}>Folicolia</h1>
        </div>
        <Image className="absolute inset-x-0 m-auto size-fit -bottom-5" src={frogimage} alt="frognobg" width={400}/>
      </div>
      <h1>Hello Rithu</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}
