import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/sections/Category";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <Category />
    </div>
  );
}
