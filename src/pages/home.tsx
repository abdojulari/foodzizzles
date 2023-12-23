import { SideBar } from "../components";
import { RecipeInterface } from "../utils/RecipeInterface";
import useRecipes from "../hooks/recipe.hook";
import HomeRecipeCard from "../shared/HomeRecipesCard";
import SlideShow from "../utils/Slider";
import CourseCard from "../shared/CourseCard";
import { Fade } from "react-awesome-reveal";
import BookCard from "../shared/BookCard";


const Home = () => {
    
    const recipes = useRecipes();
    if(typeof recipes === "string") {
        return <div>{ recipes }</div>
    }

 
    const slides = [
        'https://cdn-p300.americantowns.com/img/article/me-milkshake-1.jpg',
        'https://www.americangarden.us/wp-content/uploads/2016/10/Blog-post_barbecue.jpg',
        'https://www.wellplated.com/wp-content/uploads/2017/03/Baked-Fish-and-Chips.jpg',
    ];
   
    const courses = [
        {
          category: 'Baking',
          image: 'https://t3.ftcdn.net/jpg/01/79/02/28/360_F_179022802_kGGMQdmKkMD2fOQK59awVoMJhtLVmyQM.jpg', // Replace with actual baking image
          description: 'Explore the art of baking with our hands-on courses. From pastries to bread, become a master baker.',
          enrollmentLink: '/enroll/baking',
        },
        {
          category: 'Cooking',
          image: 'https://images.squarespace-cdn.com/content/v1/56a1acf7d82d5ee027b340cb/1629951432990-U1RD0OWGHNZ9O4N7HG7R/RI8CD3~1.JPG?format=2500w',
          description: 'Immerse yourself in the culinary world. Learn to cook delicious meals from various cuisines with our expert chefs.',
          enrollmentLink: '/enroll/cooking',
        },
        {
          category: 'Healthy Drinks',
          image: 'https://hips.hearstapps.com/hmg-prod/images/kombucha-royalty-free-image-1656527727.jpg?crop=0.772xw:0.515xh;0.228xw,0.318xh&resize=980:*',
          description: 'Quench your thirst with our Healthy Drinks course. Discover refreshing and nutritious beverages for a healthier lifestyle.',
          enrollmentLink: '/enroll/healthy-drinks',
        },
        {
          category: 'Frying',
          image: 'https://images.squarespace-cdn.com/content/v1/63c98753e882f32c6473b4ff/a6f680e6-6d5d-436a-8f7b-f2e45fd5dbc0/APC-mjer-8.jpg', 
          description: 'Master the art of frying and create crispy delights. Join our Frying course to elevate your cooking skills.',
          enrollmentLink: '/enroll/frying',
        },
    ];

    const quotes = [
        {
            "name": "Nathan Myhrvold",
            "quote": " Cooking is an art, but all art requires knowing something about the techniques and materials."
        },
        {
            "name": "Rachael Ray",
            "quote": "Good food and a warm kitchen are what make a house a home."
        }
    ]

    const books =[
        {
            "name": "16 Classic Nigerian Recipes For Beginners",
            "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/9xqJ5jzze.png?output-format=jpg&output-format=auto&output-quality=90&crop=150&downsize=800:*",
            "price": 19.2
        },
        {
            "name": "16 Classic Nigerian Recipes For Beginners",
            "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/9xqJ5jzze.png?output-format=jpg&output-format=auto&output-quality=90&crop=150&downsize=800:*",
            "price": 19.2
        },
        {
            "name": "Modern Asian Kitchen",
            "image": "https://images.squarespace-cdn.com/content/v1/614a009b2cb9af680ff625f7/17f197c6-ad9d-42e2-b372-a826c30b2923/A1TFnMo7tPL.jpg",
            "price": 8.12
        },
        {
            "name": "The Smoothie Recipe secret for weight loss",
            "image": "https://i.ebayimg.com/images/g/bwgAAOSwWQBiDPDw/s-l1200.jpg",
            "price": 7.80
        },
        {
            "name": "Top 10 Best Cupcake",
            "image": "https://www.browneyedbaker.com/wp-content/uploads/2023/06/10-best-cupcakes.jpg",
            "price": 10.79
        },
    ]

    return(
        <main className="pt-20">
            <article className="px-20 flex-grow md:flex">
                <aside className="w-full m-5 md:w-1/5"> <SideBar /> </aside>
                <section className="flex flex-wrap w-4/5 m-5">
                    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
                        {recipes?.map((element: RecipeInterface, index: number) => (    
                            <HomeRecipeCard
                                id={element.id} 
                                key={index}
                                image={element.image}
                                name={element.name}
                                category={element.category}
                                cuisine={element.cuisine}
                            />
                        ))}
                        </div>
                    </div>
                </section>
            </article>
            <article className="">
                <section className="bg-stone-100">
                    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="md:text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quotes from Famous Chefs</h2>
                            {quotes.map((quote, index) => (
                                <blockquote className="relative" key={index}>
                                    <svg className="absolute -top-6 -start-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-gray-800 sm:text-xl dark:text-white">
                                            <em>{ quote.quote}</em>
                                        </p>
                                    </div>

                                    <footer className="mt-6">
                                        <div className="text-base font-semibold text-gray-800 dark:text-gray-400"> { quote.name } </div>
                                    </footer>
                                </blockquote>
                            ))}
                           
                        </div>
                        <div className="relative">
                            <div className="absolute top-10 right-20 w-96 h-80 border-4 border-lemon z-10"></div>
                            <SlideShow slides={slides} />
                        </div>
                    </div>
                    </div>
                </section>
            </article>
            <article>
                <section className="">
                    <Fade direction="down" cascade damping={0.1} triggerOnce>
                        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-5 sm:p-10 md:p-20">
                            <h3 className="text-4xl mb-10">Best Selling Books</h3>
                            <p className="flex flex-col leading-7 text-base mb-10 ">
                                <em>
                                    Whether you're a seasoned bibliophile or a casual reader, our best-selling books promise an unforgettable escape into realms of creativity, knowledge, and emotion. 
                                </em>
                                <span>Indulge your curiosity. Discover the magic within the pages. Welcome to Foodzizzles Book Emporium – where reading is not just a pastime; it's an extraordinary experience. Happy Reading!</span>
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                            {books.map((book, index) => (
                                <BookCard  key={index} name={book.name} image={book.image} price={book.price} />
                                ))} 
                            </div>
                        </div>
                    </Fade>
                </section>
                <section >
                    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-20 border-t-2 ">
                    </div>
                </section>

            </article>
            <article className="bg-stone-100">
                <section >
                <Fade direction="down" cascade damping={0.1} triggerOnce>
                    <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                        <h3 className="text-4xl mb-10">Courses</h3>
                        <p className="leading-7 text-lg mb-10"><em>Are you eager to join a culinary session but unsure where to begin? We offer sessions categorized to suit your preferences.</em></p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
                        </div>
                    </div>
                </Fade>
                </section>
                <section>
                    <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <span className="text-5xl">Subscribe for the Exclusive Updates!</span>
                            </div>
                            <div>
                                <form>
                                    <input type="text" placeholder="Enter your Email Address" className="border-b py-3 w-full outline-0 bg-transparent" />
                                    <button className="my-5 text-base float-right hover:text-orange-500">Subcribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Home