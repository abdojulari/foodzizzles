import { Link } from 'react-router-dom';


const About = () => {
  return (
    <main className="mt-[12rem] text-gray-700 ">
        <section className="py-16 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
                <div className="items-center ">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">It's 
                            <br className="block sm:hidden" /> 
                            <span className="px-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">Foodzizzles</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p className="max-w-lg mt-3 leading-relaxed md:mt-8">
                            Foodzizzles is a culinary recipe content platform established in 2020, boasting a dedicated following of over 1.3 million on Facebook. Our daily posts provide step-by-step guides on preparing delectable dishes from around the world. Our overarching goal is to streamline the culinary experience through a unified solution that connects to e-books, kitchenware, videos, and coaching.
                            </p>
                            <div className="relative">
                                <div className="absolute top-10 right-0 w-2/3 h-96 border-4 border-orange-500"></div>
                                <img
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                                    alt="Foodzizzles"
                                    className="w-full h-96 object-contain"
                                />
                            </div>
                        </div>
                       
                    </div>    
                    <div className="mt-2  text-gray-600 md:mt-8">
                        <h2 className="my-2 leading-loose text-2xl"> New to Foodzizzles? Start Here!</h2>
                        <p className="my-3 leading-normal">Whether it's your first time here or you are looking for some meal inspiration, here are some great places to start.</p>
                        <div className="flex  justify-center gap-8">
                            <div className="max-w-xs bg-white p-6 rounded-md shadow-md">
                                <h3 className="text-xl font-semibold mb-4">1. Subscribe to our Newsletter</h3>
                                <p className="text-gray-600 mb-4">
                                Stay updated on new recipes, cooking tips, and exclusive offers by subscribing to our newsletter.
                                </p>
                                <Link to="/subscribe" className="text-orange-500 hover:underline">Subscribe Now</Link>
                            </div>

                            <div className="max-w-xs bg-white p-6 rounded-md shadow-md">
                                <h3 className="text-xl font-semibold mb-4">2. Enroll in Our Special Class</h3>
                                <p className="text-gray-600 mb-4">
                                Learn how to turn your kitchen into everybody's favorite spot with our special cooking class.
                                </p>
                                <Link to="/special-class" className="text-orange-500 hover:underline">Enroll Now</Link>
                            </div>

                            <div className="max-w-xs bg-white p-6 rounded-md shadow-md">
                                <h3 className="text-xl font-semibold mb-4">3. Explore Our E-Books</h3>
                                <p className="text-gray-600 mb-4">
                                Visit our e-book page and discover the best-selling books to enhance your cooking skills.
                                </p>
                                <Link to="/e-books" className="text-orange-500 hover:underline">Explore E-Books</Link>
                            </div>
                        </div>
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
        <section className="testimonial py-16">
          
        </section>
    </main>
  );
};

export default About;
