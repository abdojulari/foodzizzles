import time from '../assets/time.svg';
import address from '../assets/address.svg';
import phone from '../assets/phone.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

interface IForm {
    firstname: string
    lastname: string
    email: string
    message: string
}
const Contact = () => {

    const [isMessageSent, setIsMessageSent] = useState(false);
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors }, 
        reset
    } = useForm<IForm>();
    // side side isn't ready, I would only need to post to API endpoint and let backend handles the email submission
    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data);
        setIsMessageSent(true);
        // Reset the form after submission
        reset();
    }
    

    console.log(watch("email"))
    return(
        <main className="mt-[12rem] p-20">
            <div className="max-w-screen-lg mx-auto p-5">
                <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-100">
                    <div className="bg-gray-900 text-white md:col-span-4 p-10 ">
                        <p className="mt-4 text-sm leading-7 font-regular uppercase text-white">
                            Contact
                        </p>
                        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
                            Get In <span className="text-lemon">Touch</span>
                        </h3>
                        <p className="mt-4 leading-7 text-gray-200">
                        Do you have any concerns or feedback? Feel free to reach out using the following means. Don't hesitate to give a shout!.
                        </p>

                        <div className="flex items-center mt-5">
                            <img className="w-6 mr-2" src={address} alt='address' />
                            <span className="text-sm text-gray-200">105 Andover Drive, London, Ontario, Canada</span>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className="w-6 mr-2" src={phone} alt='phone' />
                            <span className="text-sm text-gray-200">+16475637235</span>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className="w-6 mr-2" src={time} alt='time' />
                            <span className="text-sm text-gray-200">24/7</span>
                        </div>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-8 p-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name" type="text" defaultValue="Jane"  {...register("firstname")} />
                                {errors.firstname && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name" type="text" defaultValue="Doe" {...register("lastname")} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-email" type="email" placeholder="********@*****.**" {...register("email")}/>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Your Message
                                </label>
                                <textarea {...register("message")}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                </textarea>
                            </div>
                            <div className="flex justify-between w-full px-3">
                                <div className="md:flex md:items-center">
                                    <label className="block text-gray-500 font-bold">
                                        <input className="mr-2 leading-tight" type="checkbox" />
                                        <span className="text-sm">
                                            Send me your newsletter!
                                        </span>
                                    </label>
                                </div>
                                <button
                                    className="shadow bg-lemon hover:bg-white hover:border hover:border-gray-700 hover:text-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                    type="submit">
                                    Send Message
                                </button>
                            
                            </div>    
                            {isMessageSent && (
                                <div className="mb-4 text-lemon font-bold dark:text-green-200">
                                    Message sent successfully!
                                </div>
                            )}
                        </div>

                    </form>

                </div>
            </div>
        </main>
    )
}

export default Contact