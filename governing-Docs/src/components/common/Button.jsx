import { CN } from "../function/cd"

export const Button = ({children, classname}) => {
  return(
    <>
      <button className={CN("bg-gradient-primary font-bold py-3 sm:py-4 px-3.5 sm:px-[25px] opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-full text-xs md:text-base", classname)}>{children}</button>
    </>
  )
}