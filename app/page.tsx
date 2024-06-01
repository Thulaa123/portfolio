import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: 'Home', link: '/', }]}/>
        <Hero/>
        {/* <Grid/> */}
      </div>
    </main>
  );
}
