import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Landing from "@/components/templates/index/landing/Landing";
import LastArticles from "@/components/templates/index/lastArticles/LastArticles";
import LastProducts from "@/components/templates/index/lastProducts/LastProducts";
import Promot from "@/components/templates/index/promot/Promot";
import Publicity from "@/components/templates/index/publicity/Publicity";

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <Landing />
      <LastProducts/>
      <Promot/>
      <Publicity/>
      <LastArticles/>
      </main>
      <Footer/>
    </>
  )
}
