import BannerImage from '../../assets/banner.jpeg';
import { Fade } from 'react-awesome-reveal';

const Banner: React.FC<{onSubscribeClick: () => void}> = ({onSubscribeClick}) => {
    return (
        <Fade duration={1000} >
            <div className="relative flex flex-col justify-center items-center">
                <img src={BannerImage} className="max-w-full w-full h-[38rem] object-cover " alt="banner" />
                <div className="absolute flex flex-col items-center w-2/5 text-center">
                    <h1 className="text-4xl text-white shadow-2xl leading-normal">Aesthetic Joy of Delicious Cuisine & Drinks</h1>
                    <button 
                        className="bg-transparent text-white border border-white px-10 py-3 font-bold text-xl hover:bg-white hover:text-lemon hover:transition-all hover:border-white"
                        onClick={onSubscribeClick}
                    >
                        Subscribe
                    </button>
                </div>
            </div>

        </Fade>
    )
}

export default Banner;