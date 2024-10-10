import { CN } from "../function/cd"
import { TextGradient } from "./TextGradient"
export const Title = ({children, classname, gradient}) => {
    return(
        <>
            <h1 className={CN("text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px] font-bold font-space-grotesk text-start", classname)}>
                {children} <TextGradient>{gradient}</TextGradient>
            </h1>
        </>
    )
}