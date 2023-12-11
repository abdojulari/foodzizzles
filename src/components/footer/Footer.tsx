import { useQuery } from "@tanstack/react-query";
import footer from "../../mock/footer.json";
const Footer = () => { 
    const { isLoading, error, data } = useQuery({
        queryKey: ['footer'],
        queryFn: () => footer
    })

    if (isLoading)  return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
      
    return (
        <footer className="font-montserrat text-gray-100 leading-normal p-10 lg:px-10 border-t-2 border-blue bg-gray-900">
            {data?.map((item, index) => (
                <section key={index}>
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <a href="#" className="inline-flex items-center">
                                <span className="text-xl font-bold tracking-wide text-gray-50">Foodzizzles</span>
                            </a>
                            <div className="mt-6 lg:max-w-xl">
                                <p className="text-sm text-gray-50">{ item.remarks }</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-sm">
                            { item.popularCourses.map((course, index) => (
                               <div key={index}>
                                    <p className="text-base font-bold tracking-wide text-gray-100">{ course.title }</p>
                                    { course.courses.map((item, index) => (
                                        <div key={index}>
                                            <a href={item.url}>{ item.title }</a>
                                        </div>
                                    ))}
                               </div> 
                            ))}
                        </div>
                        <div>
                            {item.socials.map((social, index) => (
                                <div key={index}>
                                    <p className="text-base font-bold tracking-wide text-gray-100">{ social.heading}</p>
                                    <div className="flex items-center gap-1 p-2">
                                        {social.links?.map((link, index) => (
                                            <a href={link.url} className="w-full min-w-xl" key={index}>
                                                <img src={link.icon} alt="x" className="h-6" />
                                            </a>
                                        ))}    
                                    </div>
                                
                                </div>
                            ))}
                            <p className="text-base font-bold tracking-wide text-gray-100 mt-5">{ item.contacts?.heading }</p>
                            <div className="flex">
                                <p className="mr-1 text-gray-50">{item.contacts.label}</p>
                                <a href="#" title="send email">{item.contacts.email}</a>
                            </div> 
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                        <p className="text-sm text-gray-400">© Copyright 2023 Company. All rights reserved.</p>
                        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                            <li>
                                <a href="#"
                                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                                    &amp; Cookies Policy
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            ))}
            

        </footer>
    );
};

export default Footer;