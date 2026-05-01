"use client";

export default function Searchbar() {
  const handleSearch = () => {
    console.log("Search button clicked");
    // In a real application, this would trigger a search action
  };

  return (
    <div className="mt-8 flex items-center bg-white border border-[#4D2C5E] rounded-[50px] w-full max-w-[400px] overflow-hidden shadow-sm">
      <input
        name="name"
        type="text"
        className="flex-1 w-full bg-transparent text-sm px-6 py-4 outline-none text-[#050C26]"
        placeholder="Search something..."
      />
      <button
        type="button"
        onClick={handleSearch}
        className="w-max px-8 py-4 text-sm tracking-wider outline-none border-none rounded-[50px] bg-[#4D2C5E] text-white transition-all hover:bg-[#3d234a] font-semibold"
      >
        Continue
      </button>
    </div>
  );
}