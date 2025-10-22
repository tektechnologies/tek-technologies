import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/nav/Header";
import Main from "../components/main/MainSection";
import Footer from "../components/footer/Footer";
import MarqueeFooter from "../views/MarqueeFooter";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Header />
      <Main />
      <Footer />
      <MarqueeFooter />
    </>
  ),
});
