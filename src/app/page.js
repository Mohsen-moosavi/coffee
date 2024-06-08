import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Landing from "@/components/templates/index/landing/Landing";
import LastArticles from "@/components/templates/index/lastArticles/LastArticles";
import LastProducts from "@/components/templates/index/lastProducts/LastProducts";
import Promot from "@/components/templates/index/promot/Promot";
import Publicity from "@/components/templates/index/publicity/Publicity";
import { isUserLogin } from "@/utils/auth";

export default async function Home() {

  const user =await isUserLogin()


  return (
    <>
      <Header isUserLogin={!!user}/>
      <main>
        <Landing />
        <LastProducts />
        <Promot />
        <Publicity />
        <LastArticles />
      </main>
      <Footer />
    </>
  )
}
