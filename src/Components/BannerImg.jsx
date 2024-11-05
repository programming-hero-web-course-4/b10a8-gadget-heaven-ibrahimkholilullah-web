import bannerimg from "../Components/Image/banner.jpg"
const BannerImg = () => {
    return (
        <div>
            <div className="mb-12">
            <img className="w-[1062px] h-[450px] border-2 p-4 mx-auto -mt-32 rounded-xl opacity-95 "  src={bannerimg} alt="" />
        </div>
        <div className="mb-16">
                <h1 className="text-center text-lg md:text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>
         </div>       
        </div>
    );
};

export default BannerImg;