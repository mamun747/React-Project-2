import { Container } from "../common/Container";
import { NavItem, social } from "../data/data";

export const Footer = () => {
  return (
    <>
      <div className="pt-5 lg:pt-24">
        <Container>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-2.5 py-5">
            <h1 className="font-space-grotesk lg:text-lg sm:text-2xl text-xl xl:text-4xl font-bold">
              AI GoverningDocs
            </h1>
            <div className="lg:flex justify-center items-center hidden gap-3 xl:gap-4">
              {NavItem.map(({ label, link }, i) => (
                <a href={link} key={i}>
                  <p className="text-accent text-sm xl:text-base hover:text-Primary transition-colors duration-150 cursor-pointer">
                    {label}
                  </p>
                </a>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2.5">
                {
                    social.map(({img, url}, i) => (
                        <a href={url} key={i}><img src={img} alt="social icon" className="size-[36px]"/></a>
                    ))
                }
            </div>
          </div>
          <div className="footer-border-color border-t border-transparent md:mt-[50px] mt-5 lg:mt-[106px]"><p className="text-lg text-center leading-[18px] text-[#111111] py-5">GoverningDocs 2024. Some Rights Reserved.</p></div>
        </Container>
      </div>
    </>
  );
};