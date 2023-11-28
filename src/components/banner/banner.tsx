import BannerImage from '../../assets/banner.jpeg'

const Banner = () => {
    return (
        <div className="mt-24 relative flex flex-col justify-center">
            <img src={BannerImage} className="max-w-full w-full h-[32rem] object-cover" alt="banner" />
            <div className="flex flex-col absolute align-middle mx-10 p-10 bg-white w-96">
                <h1 className="text-4xl leading-normal text-lemon">A Chef In Every</h1>
                <h2 className="text-4xl leading-normal text-lemon">Tasty Meal Box</h2>
                <span className="w-72 text-sm leading-normal my-5 text-gray-700">Do you want to stay updated with best and modern cooking methods?</span>
                <button 
                className="bg-lemon text-white border border-lemon px-10 py-3 font-bold text-2xl leading-normal
                hover:bg-white hover:text-lemon hover:transition-all hover:border-lemon self-end" 
                >
                    Subscribe
                </button>
            </div>
            
        </div>
    )
}

export default Banner;