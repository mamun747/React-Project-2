import { CN } from "../function/cd"

export const Container = ({children, classname}) => {
    return(
        <>
            <div className={CN('w-full max-w-screen-xl mx-auto px-2.5', classname)}>
                {children}
            </div>
        </>
    )
}