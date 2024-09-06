export interface CollectionItemProps {
  name: string;
  price: number;
  imageUrl: string;
}
export function CollectionItem(props: CollectionItemProps) {
  const { name, price, imageUrl } = props;
  const buttonContainerClass =
    "min-w-[165px] w-auto h-[50px] tracking-[0.5px] leading-[50px] px-[35px] text-[15px] uppercase font-bold cursor-pointer flex justify-center items-center";
  const invertedButtonClass =
    "bg-white text-black border border-black hover:bg-black hover:text-white hover:border-none";
  const hiddenButtonClass = 'w-[80%] opacity-[0.7] absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85] md:flex md:opacity-100 md:w-[20vw] md:py-0';
  
  return (
    <div className="flex flex-col h-[350px] items-center relative justify-center w-full group min-w-[310px]">
      <div
        className="w-full h-[95%] bg-cover bg-center mb-[5px] transition-opacity duration-300 group-hover:opacity-80"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="w-full h-[5%] flex justify-between text-[18px] px-[5px]">
        <span className="mb-[15px]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <button
        className={`${buttonContainerClass} ${invertedButtonClass} ${hiddenButtonClass}`}
        onClick={() => {}}
      >
        Add to Cart
      </button>
    </div>
  );
}
