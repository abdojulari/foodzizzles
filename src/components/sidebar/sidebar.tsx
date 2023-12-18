import { useQuery } from "@tanstack/react-query";
import sidebar from '../../mock/sidebar.json'
import { useState } from "react";

const SideBar = () => {
    const [ openAccordion, setOpenAccordion ] = useState<number | null>(null);

    const { isLoading, error, data } = useQuery({
        queryKey: ['sidebar'],
        queryFn: () => sidebar
    })

    if (isLoading)  return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    
    const handleToggle = (index: number) => {
        setOpenAccordion((prevIndex) => (prevIndex  === index ? null : index));
    }
    return (
        <div className="">
            <div className="">
                <h1 className="text-3xl font-bold mb-4 text-lemon">Cooking Tips and Tricks</h1>
                {data?.map((sidebar, index) => (
                    <details key={index} className={`group p-2 border-b border-lemon my-5 ${ openAccordion === index ? 'open' : ''}`}>
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none " onClick={() => handleToggle(index)}>
                            { sidebar.title }
                            <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    {openAccordion === index ? (
                                        <path d="M18 12H6"></path>  // Minus sign
                                    ) : (
                                        <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>  // Plus sign
                                    )}
                                </svg>
                            </span>
                        </summary>
                        <p className="text-sm mt-2 text-neutral-600 mt-3 group-open:animate-fadeIn">{ sidebar.details }</p>
                        <img className="h-36 w-full object-cover" src={sidebar.image} alt={sidebar.title} />
                    </details>
                   ))
                }     
            </div>
        </div>
    )
}

export default SideBar;