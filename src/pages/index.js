import AboutPAge from "@/components/AboutPage/AboutPage";
import ChosePage from "@/components/ChosePage/ChosePage";
import LoginPage from "@/components/LoginPage/LoginPage";
import LogoPage from "@/components/LogoPage/LogoPage";
import TitlePage from "@/components/TitlePage/TitlePage";

import HeaderPage from "@/Home/HeaderPage";
import HomePage from "@/Home/HomePage/HomePage";


export default function Home() {
  return (  <>
        {/*HeaderPage*/}
        <HeaderPage />
        {/*HomePage*/}
        <HomePage />
        {/*AboutPAge*/}
        <AboutPAge />
        {/*TitlePAge*/}
        <TitlePage />
        {/*ChosePAge*/}
        <ChosePage />
        {/*Login page*/}
        <LoginPage />
        {/*LogoPAge */}
        <LogoPage />
  </>
  );
}
