import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SignUp from "@/components/SignUp/SignUp";
import Features from "@/components/Features/Features";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"; // You can also use <link> for styles
export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 50,
        }
        );
    }, []);
  return (
    <>
      <Header/>
      <Hero/>
      <SignUp/>
      <Features/>
    </>
  );
}
