import Categorybar from "../components/Categorybar";
import FeaturedItems from "../components/FeaturedItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Promo from "../components/Promo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Categorybar />
      <Promo />
      <FeaturedItems />
      <FeaturedItems isReversed={true} />
      <Newsletter />
      <Footer />
    </>
  )
}
