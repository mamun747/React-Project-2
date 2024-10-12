export const ProblemSolutionCard = ({image, title, des1, des2}) => {
  return (
    <>
      <div className="w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadow-card hover:bg-Primary transition-colors duration-200 group">
        <div className="bg-Primary size-[58px] rounded-full flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <h1 className="font-bold text-lg text-secondary leading-none group-hover:text-white">
          {title}
        </h1>
        <div className="text-accent space-y-2.5 group-hover:text-white">
          <p>
            {des1}
          </p>
        {des2 && <p>{des2}</p>}
        </div>
      </div>
    </>
  );
};
