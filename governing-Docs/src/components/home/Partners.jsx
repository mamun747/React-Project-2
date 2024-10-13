import { Container } from "../common/Container";
import { Title } from "../common/SectionGradient";
import { partner } from "../data/data";

export const Partners = () => {
  return (
    <>
      <section className="px-2.5">
        <Container classname="bg-[#E6F9FD] max-w-[1276px] py-[50px] px-3 rounded-[20px]">
          <Title gradient="Partners" classname="text-center">
            Our
          </Title>
          <div className="pt-10 flex justify-center items-center flex-wrap gap-x-[30px] gap-y-7">
            {partner.map(({img, alt}, i) => (
              <div className="w-[274px] bg-white border border-[#d6d6d6] rounded-xl h-[101px] flex justify-center items-center" key={i}>
                <img src={img} alt={alt} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};