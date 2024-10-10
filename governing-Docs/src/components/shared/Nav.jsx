import { Container } from "../common/Container";
import { Logo } from "./Logo";
// import { dataCenter } from "../data/data";

export const Navbar = () => {
  return (
    <>
      <nav className="py-5 sm:py-8 xl:py-11 relative bg-sky-300">
        <Container>
          <div className="flex justify-between items-center gap-2.5 px-2 pl-2.5 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
          <Logo/>
            {/* <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
              {dataCenter.map((value) => (
                <a href="/">
                  <p className="text-[#666666] text-sm xl:text-base hover:text-primary transition-colors duration-150">{value}</p>
                </a>
              ))}
            </div> */}
          </div>
        </Container>
      </nav>
    </>
  );
};