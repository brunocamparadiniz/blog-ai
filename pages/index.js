import Image from "next/image";
import Link from "next/link";
import { Logo } from "../components/logo";
import HeroImage from "../public/hero.jpg";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          Write AI-generated posts within minutes and save your precious time!
        </p>
        <Link href='/post/new' className="btn">
          Start Now
        </Link>
      </div>
    </div>
  );
}
