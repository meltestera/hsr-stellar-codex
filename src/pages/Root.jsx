import { useEffect } from "react";
import Hero from "../components/Hero";

const Root = () => {
  useEffect(() => {
    document.title = "Stellar Codex - yet another Honkai: Star Rail wiki";
  });
  return <Hero />;
};

export default Root;
