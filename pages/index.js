import Categorybar from "../components/Categorybar";
import FeaturedItems from "../components/FeaturedItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Categorybar />
      <FeaturedItems />
      <FeaturedItems isReversed={true} />
      <Newsletter />
      <Footer />
    </>
  )
}
