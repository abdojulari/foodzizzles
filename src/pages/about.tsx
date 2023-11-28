import blob from '../assets/blob.svg';

const About = () => {
  return (
    <main className="mt-24 text-gray-700 ">
        <section className="pt-16 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">It's 
                            <br className="block sm:hidden" /> Foodzizzles
                        </h2>
                        <p className="max-w-lg mt-3 leading-relaxed md:mt-8">
                        I'm so happy you're here! I'm Azeezah, [links to your books] author and lead recipe developer here at Foodzizzles. I started Foodzizzles with just one goal in mind, making healthy eating delicious and easy.
                        </p>
                        <div className="mt-2  text-gray-600 md:mt-8">
                        <p className="my-2 leading-loose text-xl"> New to Foodzizzles? Start Here!</p>

                        <p className="my-3 leading-normal">Whether it's your first time here or you are looking for some meal inspiration, here are some great places to start.</p>
                            <ul className="list-disc px-10">
                                <li>We absolutely love easy dinners around here! Don't miss our favorite 30-minute dinners, nourishing bowl recipes, quick stir-fry recipes, and set-and-forget slow cooker dinners.</li>
                                <li>Every night could be Taco Tuesday in our house. My husband is from Mexico City and when I need a fast meal, tacos are always at the top of the list. Mexican food is a passion and we love sharing authentic Mexican dishes and Tex-Mex favorites.</li>
                                <li>When we start the day with a healthy breakfast, we eat better all day long. That's why we love oatmeal, smoothies, and eggs.</li>
                            </ul>
                        <p>We believe getting a healthy meal on the table should be easy and stress-free. That's why we share hundreds of easy-to-follow, delicious, and good-for-you recipes. Armed with our recipes, anyone can be a star in the kitchen!

Looking for more meal inspiration? Check out the Recipes page where you can sort recipes by category, dietary preferences, cuisine, and even ingredients.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="absolute w-full inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src={blob} alt="" />
                      
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                    </div>

                </div>
  
            </div>
        </section>    
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-200 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>

                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900">Mission</h3>
                            <p className="mt-2 text-base text-gray-500">We aim to make the world a better place through innovation
                                and collaboration.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-200 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>

                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900">Values</h3>
                            <p className="mt-2 text-base text-gray-500">We believe in honesty, integrity, and respect for all
                                individuals.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-200 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-medium text-gray-900">Vision</h3>
                            <p className="mt-2 text-base text-gray-500">We envision a world where technology is used to solve the
                                most pressing issues facing humanity and improve people's lives.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section>

        <div className="flex items-center justify-between h-full w-full absolute z-0">
            <div className="w-1/3 bg-white dark:bg-gray-900 h-full"></div>
            <div className="w-4/6 ml-16 bg-gray-100 dark:bg-gray-800 h-full"></div>
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800 dark:text-white ">
                What our customers are<br />
                saying
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800 dark:text-white ">What our customers are saying</h1>
    
            <div className="slider">
                <div className="slide-ana">
                    <div className="flex">
                        <div className="mt-14 md:flex">
                            <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas"/>
                                </div>
                            </div>
                            <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800 dark:text-white ">Some of the best work that was done!</h1>
                                    <p className="text-base font-medium leading-6 mt-4 text-gray-600 dark:text-gray-200  ">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                </div>
                                <div className="md:mt-0 mt-8">
                                    <p className="text-base font-medium leading-4 text-gray-800 dark:text-white ">Anna Smith</p>
                                    <p className="text-base leading-4 mt-2 mb-4 text-gray-600 dark:text-gray-200  ">Senior Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
    
            <div className="flex items-center mt-8">
                <button className="cursor-pointer" id="prev" role="button" aria-label="previous slide">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                </button>
                <button id="next" role="button" aria-label="next slide" className="cursor-pointer ml-2">
                    <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                    <img className="transform rotate-180 w-8 hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                </button>
            </div>
        </div>
      
      
        </section>
        <section className="testimonial py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           
                <ul>
                    <li>Prioritizing a balanced intake of essential nutrients, including proteins, carbohydrates, fats, vitamins, and minerals, to support overall health and well-being.</li>

                    <li>Focusing on whole and minimally processed foods, such as fruits, vegetables, whole grains, lean proteins, and healthy fats, while minimizing the consumption of highly processed and refined foods.</li>

                    <li>Embracing and preserving culinary traditions and cultural practices related to food preparation, cooking methods, and traditional ingredients.
                    </li>

                    <li>Considering the environmental impact of food choices, including the sourcing of ingredients, food production methods, and waste reduction, with an emphasis on sustainable and eco-friendly practices.
                    </li>

                    <li>Making food choices that align with ethical considerations, such as supporting local farmers, fair trade practices, humane treatment of animals, and social responsibility.
                    </li>

                    <li>Encouraging mindful eating practices, which involve being present and fully engaged in the eating experience, savoring each bite, and paying attention to hunger and satiety cues.
                    </li>

                    <li>Recognizing that individual nutritional needs may vary based on factors such as age, gender, activity level, and health conditions, and tailoring food choices accordingly.
                    </li>

                    <li>Embracing a flexible approach to eating that allows for occasional indulgences and treats, promoting a positive relationship with food and avoiding strict, restrictive diets.
                    </li>

                    <li>Valuing education about nutrition and food systems to make informed and conscious choices, staying abreast of current research and developments in the field.
                    </li>

                    <li>Prioritizing the role of food in promoting health and preventing illness, recognizing the connection between diet and overall well-being.</li>
                </ul>

            </div>
        </section>
    </main>
  );
};

export default About;
