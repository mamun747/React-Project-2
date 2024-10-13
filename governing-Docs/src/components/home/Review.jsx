import { useState } from "react";
import { Container } from "../common/Container";
import { Title } from "../common/SectionGradient";
import { reviews } from "../data/data";
import { Star } from "../icons";
import { ReviewCard } from "./ReviewCard";
import { CN } from "../function/cd";

export const Review = () => {
  const [active, setActive] = useState(1);
  const activeReview = reviews[active];
  return (
    <>
      <section className="xl:my-[150px] lg:my-[100px] sm:my-20 my-[50px]  bg-[#f6f6f6] lg:py-20 py-10">
        <Container>
          <Title gradient="Our Client" classname="text-center">
            Reviews From
          </Title>
          <div className="pt-10 flex flex-col md:flex-row  justify-center items-center lg:gap-20 gap-10 xl:gap-[93px]">
            <div className="flex w-full gap-5">
              <div className="bg-[#E2DED8] rounded-[20px] w-[5px]">
                <div className="space-y-[15px]">
                  {Array.from(Array(3).keys()).map((el) => (
                    <div
                      className={CN(
                        "w-[5px] rounded-[20px] h-[92px] bg-transparent",
                        active === el && "bg-gradient-primary"
                      )}
                      key={el}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="space-y-[15px] flex-grow">
                {reviews.map((review, i) => (
                  <ReviewCard
                    key={i}
                    {...review}
                    active={active === i}
                    onclick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-[30px] w-full">
              <h1 className="font-bold text-[30px] ">{activeReview.review.title}</h1>
              <div className="flex justify-start items-center gap-[5px]">
                {Array.from(Array(activeReview.review.starts).keys()).map((el) => (
                  <Star key={el} />
                ))}
              </div>
              <p className="text-base text-accent max-w-[500px]">
                {activeReview.review.details}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
