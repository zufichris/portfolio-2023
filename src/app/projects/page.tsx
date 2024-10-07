import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zufi Christian- Developer",
  description:
    "Zufi Christian is a software developer. He builds web and mobile applications from backend to backend",
};

export default function Projects() {
  return (
    <Container>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
