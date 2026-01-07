import Hero from "@/components/Hero";
import Postlist from "@/components/Postlist";
import Uploadbar from "@/components/Uploadbar";

export default function Home() {
  return <div>
    <Hero />
    <Uploadbar />
    <Postlist />  
  </div>;
}
