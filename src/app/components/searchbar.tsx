export default function Searchbar() {
    return (
      <div className="absolute top-[645px] left-[95px] mt-8 flex items-center bg-white border border-[#4D2C5E] rounded-[50px] w-[368px] overflow-hidden">
        <input
          name="name"
          type="text"
          className="flex-1 w-full bg-transparent text-sm px-4 py-3 outline-none"
          placeholder="Search something..."
        />
        <button
          type="button"
          className="w-max px-6 py-3 text-sm tracking-wider outline-none border rounded-[50px] bg-[#4D2C5E] text-white transition-all"
        >
          Continue
        </button>
      </div>
    );
}