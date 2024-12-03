export default function Feature() {
    return (
      <div className="max-w-6xl mx-auto h-[227px] font-[sans-serif] bg-[#452C5E] rounded-[30px] absolute top-[1000px] left-[234px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
          <div className="p-4 flex gap-6 mt-[50px]  rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="w-[102] h-[80px] bg-[#FFFFFF] p-3 rounded-[10px] shrink-0">
              <img src="/icon1.png" alt="" />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Learn The Latest Skills
              </h3>
              <p className="text-white text-sm">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>

          <div className="p-2 flex gap-6 mt-[50px] rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="w-[102] h-[80px] bg-[#FFFFFF] p-3 rounded-[10px] shrink-0">
              <img src="/icon2.png" alt="" />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Get Ready For A Career
              </h3>
              <p className="text-white text-sm">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>

          <div className="p-4 flex gap-6 mt-[50px] rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="w-[102] h-[80px] bg-[#FFFFFF] p-3 rounded-[10px] shrink-0">
              <img src="/icon3.png" alt="" />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Earn A Certificate
              </h3>
              <p className="text-white text-sm">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}