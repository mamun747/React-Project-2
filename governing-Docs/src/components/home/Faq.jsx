import { useState } from "react"
import { Container } from "../common/Container"
import { Title } from "../common/SectionGradient"
import { FaqCard } from "./FaqCard"
import { faq } from "../data/data"

export const Faq = () => {
    const [active, setActive] = useState(1);
  
    const handleChange = (index) => {
      active === index ? setActive(-1) : setActive(index);
    };
  
    return (
      <section className="w-full mt-[50px] sm:mt-[80px] lg:mt-[100px] xl:mt-[150px] relative">
        <Container className="w-full max-w-[982px] mx-auto px-2.5">
          <Title gradient="Asked Questions">Frequently </Title>
          <div className="pt-10 space-y-5 relative z-10">
            {faq.map((faq, i) => (
              <FaqCard
                key={i}
                isActive={active === i}
                onclick={() => handleChange(i)}
                {...faq}
              />
            ))}
          </div>
        </Container>
        <img
          src="/faq-bg-line.svg"
          alt="Faq Bg Line"
          className="absolute z-0 -top-[115px] -left-[540px] 2xl:-left-[23.8%] h-[590px] !w-[1713px]"
        />
      </section>
    );
  };