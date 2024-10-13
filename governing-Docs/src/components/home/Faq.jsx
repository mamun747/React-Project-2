import { useState } from "react"
import { Container } from "../common/Container"
import { Title } from "../common/SectionGradient"
import { FaqCard } from "./FaqCard"
import { faq } from "../data/data"

export const Faq = () => {
    const [active, setActive] = useState(1);
    const handleChange = (Index) => {
        active === Index ? setActive(-1) : setActive(Index)
    }
  return (
    <>
    <section className="lg:mt-[100px] sm:mt-20 mt-[50] xl:mt-[150px]">
        <Container classname="max-w-[992px]">
        <Title gradient="Asked Questions" classname="text-center">Frequently</Title>
        <div className="mt-10 space-y-5">
            {faq.map((faq, i) => (
                <FaqCard key={i} {...faq} onclick={() => handleChange(i)} isActive={active === i}/>
            ))}
        </div>
        </Container>
    </section>
    </>
  )
}