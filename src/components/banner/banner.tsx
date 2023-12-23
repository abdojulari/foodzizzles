import BannerImage from '../../assets/banner.svg';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <Fade duration={1000} >
        <div className="relative flex flex-col justify-center items-center">
                <img src="https://singapore.intercontinental.com/sites/ihg-sg/files/styles/banner_medium/public/2022-11/Tenuta1100x-568.jpg.webp?itok=mWwB-8fM" className="max-w-full w-full h-[36rem] object-cover " alt="banner" />
                <div className="absolute flex flex-col items-center w-2/5 text-center">
                    <h1 className="text-4xl text-white shadow-2xl">Aesthetic Joy of Delicious Cuisine & Drinks</h1>
                    <button className="bg-lemon text-white border border-lemon px-10 py-3 font-bold text-xl hover:bg-white hover:text-lemon hover:transition-all hover:border-lemon">
                        Subscribe
                    </button>
                </div>
            </div>

        </Fade>
    )
}

export default Banner;