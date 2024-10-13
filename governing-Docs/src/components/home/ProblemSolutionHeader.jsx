import  {Title} from "../common/SectionGradient"
import { IconOpposit, Icons } from "../icons";
const ProblemSolutionHeader = () => {
  return (
    <>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5">
            <Title gradient="Solution">Problem &</Title>
            <div className="flex justify-center items-center gap-[15px]">
                <button className="size-10 rounded-full text-Primary flex justify-center items-center shadow-arrow-btn"><Icons/></button>
                <button className="bg-gradient-primary size-10 rounded-full text-white flex justify-center items-center shadow-arrow-btn"><IconOpposit/></button>
            </div>
        </div>
    </>
  )
}

export default ProblemSolutionHeader;