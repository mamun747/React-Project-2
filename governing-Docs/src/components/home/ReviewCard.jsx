import { CN } from "../function/cd";

export const ReviewCard = ({name, img, type, active, onclick}) => {
  return (
    <>
      <button className={CN("inline-flex justify-normal items-center border rounded-[20px] border-Primary lg:w-[400px] w-full xl:w-[491px] py-[1px] px-5 gap-[13px]", active && 'bg-gradient-primary')} onClick={onclick}>
        <img src={img} alt="" className="rounded-full" />
        <div className={CN("font-semibold text-base text-accent", active && 'text-white')}>
          <h4>{name}</h4>
          <p>{type}</p>
        </div>
      </button>
    </>
  );
};
