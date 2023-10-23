import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaTelegram, FaTwitter } from "react-icons/fa"

const ContactUs = () => {
  return (
    <div className='antialiased bg-gray-100'>
        <div className='flex w-full min-h-screen justify-center items-center'>
            <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>
                <div className='flex flex-col  space-y-8 justify-between'>
                    <div>
                        <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                        <p className='pt-2 text-cyan-100 text-sm'>Please make sure to contact us if you have any problem</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className='inline-flex space-x-2 items-center'>
                            <FaPhone className='text-teal-300 text-xl'/>
                            <span>+91 9464530907</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FaMailBulk className='text-teal-300 text-xl'/>
                            <span>aryanbhartola@gmail.com</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FaLocationArrow className='text-teal-300 text-xl'/>
                            <span>Zirakpur</span>
                        </div>
                    </div>
                    <div className='flex space-x-4 text-lg'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTelegram/>
                        <FaTwitter/>
                        <FaLinkedin/>
                    </div>
                </div>

                <div>
                {/* Circle */}
                    {/* <div className='relative'>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-20'></div>
                    </div> */}
                    <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                        <form className='flex flex-col space-y-4'>
                            <div>
                                <label className='text-sm'>Your Name</label>
                                <input type="text" placeholder="Your Name" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                            </div>
                            <div>
                                <label className='text-sm'>Email Address</label>
                                <input type="text" placeholder="Email Address" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                            </div>
                            <div>
                                <label className='text-sm'>Message</label>
                                <textarea rows='4' type="text" placeholder="Message" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                            </div>
                            <button className='inline-block self-end bg-cyan-700 font-bold rounded-lg px-6 py-2 text-white  uppercase text-sm'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactUs;