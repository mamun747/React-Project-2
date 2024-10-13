import { Icons } from "../icons";
export const FaqCard = ({q, a, onclick, isActive}) => {
  return (
    <>
      <div className="shadow-faq rounded-[20px] py-5 px-[30px]">
        <button
          className="inline-flex justify-between items-center w-full"
          onClick={onclick}
        >
          <h1 className="text-secondary font-bold font-nunito-sans text-lg lg:text-[26px] lg:leading-[36px] text-start ">
            {q}
          </h1>
          <div className="text-Primary">
            <Icons className="rotate-90" />
          </div>
        </button>
        {isActive && (
          <div>
            <p className="text-accent text-sm pt-5 lg:text-base">
              {a}
            </p>
          </div>
        )}
      </div>
    </>
  );
};