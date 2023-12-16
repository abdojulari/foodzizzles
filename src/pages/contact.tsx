import time from '../assets/time.svg';
import address from '../assets/address.svg';
import phone from '../assets/phone.svg';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IForm {
    firstname: string
    lastname: string
    email: string
    message: string
}
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors },} = useForm<IForm>();
    const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);
    console.log(watch("email"))
    return(
        <main className="mt-24 p-20">
            <div className="max-w-screen-lg mx-auto p-5">
                <div className="grid grid-cols-1 md:grid-cols-12 border">
                    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                        <p className="mt-4 text-sm leading-7 font-regular uppercase">
                            Contact
                        </p>
                        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                            Get In <span className="text-orange-600">Touch</span>
                        </h3>
                        <p className="mt-4 leading-7 text-gray-200">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>

                        <div className="flex items-center mt-5">
                            <img className="w-6 px-1 " src={address} alt='address' />
                            <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className="w-6 px-1" src={phone} alt='phone' />
                            <span className="text-sm">+93 749 99 65 50</span>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className="w-6 px-1" src={time} alt='time' />
                            <span className="text-sm">24/7</span>
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
                                    className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                    type="submit">
                                    Send Message
                                </button>
                                
                            </div>
            <a href="https://veilmail.io/e/FkKh7o" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Or click here to reveal our protected email address</a>
                
                        </div>

                    </form>

                </div>
            </div>
        </main>
    )
}

export default Contact