import BannerImage from '../../assets/banner.jpeg'

const Banner = () => {
    return (
        <div className="mt-24 relative flex flex-col justify-center">
            <img src={BannerImage} className="max-w-full w-full h-96 object-cover" alt="banner" />
            <div className="absolute text-white  align-middle mx-10 px-10">
                <p className="text-5xl leading-normal mb-14">Classic Recipes</p>
                <button 
                className="bg-transparent border px-10 py-3 font-bold text-2xl leading-normal
                hover:bg-white hover:text-lemon hover:transition-all hover:border-white self-end" 
                >
                    More
                </button>
            </div>
            
        </div>
    )
}

export default Banner;