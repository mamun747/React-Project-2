import { Button } from "../common/Button"
import { Container } from "../common/Container"

export const Note = () => {
  return (
    <>
    <section className="w-full mt-[50px] sm:mt-[80px] lg:mt-[100px] xl:mt-[150px] px-2.5">
      <Container classname="bg-gradient-primary rounded-[20px] py-2.5 md:py-14 pr-6 md:pr-16 pl-6 md:pl-10 text-white flex flex-col md:flex-row justify-between items-center gap-5 md:gap-2.5">
        <div className="space-y-[20px] md:space-y-[30px]">
          <h1 className="font-bold md:text-[35px] text-2xl lg:text-[46px] lg:leading-[64px] md:leading-[35px] leading-[35px] sm:max-w-[500px] lg:max-w-[566px]">Ready to Simplify Your Document Management?</h1>
          <p className="font-bold text-sm md:text-base max-w-[500px]">Sign up today and experience the power of AI-driven legal documentation.</p>
        </div>
        <Button classname="bg-white text-secondary min-w-fit">Get Started Now</Button>
      </Container>
    </section>
    </>
  )
}