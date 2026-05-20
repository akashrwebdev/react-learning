const Cards = ({ image, date, title, description, readTime }) => {
  return (
    <div className="flex justify-center">
      <div className=" w-[270px] h-[420px] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl  ">
        {/* IMAGE */}
        <div className="h-[190px] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <p className="text-sm text-zinc-400 tracking-wide mb-1">{date}</p>

          <h2 className="text-2xl font-bold text-white leading-tight mb-2">
            {title}
          </h2>

          <p className="text-zinc-400 leading-4.5 text-[18px]">{description}</p>

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-5">
            <button className="px-4 py-2 rounded-full bg-white text-black font-semibold ">
              View More
            </button>

            <span className="text-sm text-zinc-400">{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
