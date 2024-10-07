import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { TypewriterEffect } from "@/components/TypeWriter";


export default function Home() {
  return (
    <Container>
      <span className="text-4xl"></span>
      <Heading className="font-black">
        <TypewriterEffect
          words={[
            {
              text: "Hello",
            },
            {
              text: "there!",
            },
            {
              text: "I'm",
            },
            {
              text: "Chris",
              className:"text-blue-600"
            },
          ]}
        />
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software developer that builds{" "}
        <Highlight>web & mobile</Highlight> applications from{" "}
        <Highlight>Backend</Highlight> to <Highlight>Frontend</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software developer with over{" "}
        <Highlight>4 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
