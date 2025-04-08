import { Navbar } from "@/components/home/navbar";
import { StickyBottom } from "@/components/home/sticky-bottom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="hidden md:block">
        <StickyBottom />
      </div>
    </div>
  );
}