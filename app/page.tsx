import Banner from "@/components/Banner/Banner";
import Join from "@/components/Join/Join";
import Section from "@/components/Section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <Section name="splash-page" flow="column" height="92dvh" centered>
      <Banner
        video_source="/vids/Xakari_Cinematic.mp4"
        width="100%"
        height="100%"
      />
      <Join />
    </Section>
  );
}
