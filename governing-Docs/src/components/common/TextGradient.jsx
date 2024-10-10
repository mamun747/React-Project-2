import { CN } from "../function/cd"

export const TextGradient = ({children, classname}) => {
  return (
    <>
        <span className={CN("bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent", classname)}>{children}</span>
    </>
  )
}