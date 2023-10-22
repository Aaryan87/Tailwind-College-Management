function Register(){

    return(
        <div className="min-h-screen py-40 bg-gradient-to-r from-sky-500 to-indigo-700">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-slate-50 rounded-lg mx-auto shadow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-signup-img">
                        <h1 className="text-white text-3xl mb-3">Welcome</h1>
                        <div>
                            <p className="text-white">Hello Guyzz Welcome here to my sigin page and please register yourself here <a href="#" className="text-purple-500">Learn More</a></p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4">Register</h2>
                        <p className="mb-4">
                            Create your account. It's free and only take a minute
                        </p>
                        <form>
                            <div className="grid gird-cols-2 gap-5">
                                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"/>
                                <input type="text" placeholder="Lastname" className="border border-gray-400 py-1 px-2"/>
                            </div>
                            <div className="mt-5">
                                <input type="text" placeholder="Email" className="border border-gray-400 py-1 w-full"/>
                            </div>
                            <div className="mt-5">
                                <input type="password" placeholder="Password" className="border border-gray-400 py-1 w-full"/>
                            </div>
                            <div className="mt-5">
                                <input type="password" placeholder="Confirm Passowrd" className="border border-gray-400 py-1 w-full"/>
                            </div>
                            <div className="mt-5">
                                <input type="checkbox" className="border-gray-400"/>
                                <span>
                                    I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                                </span>
                            </div>
                            <div className="mt-5">
                                <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;