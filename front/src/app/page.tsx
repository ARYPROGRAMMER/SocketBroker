import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { CustomSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session: CustomSession|null = await getServerSession();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={session?.user} />
      <HeroSection />
      <FeatureSection />
      <UserReviews />
      <Footer />
    </div>
  );
}
