import { Container } from "../common/Container";
import { ProblemSolutions } from "../data/data";
import { ProblemSolutionCard } from "./ProblemSolutionCard";
import ProblemSolutionHeader from "./ProblemSolutionHeader";

const ProblemSolution = () => {
  return (
    <>
        <section className="pt-32">
            <Container>
                    <ProblemSolutionHeader/>
                <div className="pt-10  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 place-items-center gap-[30px]">
                    {
                        ProblemSolutions.map((problem, i) => (
                            <ProblemSolutionCard key={i} {...problem}/>
                        ))
                    }
                </div>
            </Container>
        </section>
    </>
  )
}

export default ProblemSolution;