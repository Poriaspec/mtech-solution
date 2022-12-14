import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import Switcher from "../Switcher";
import Logo from "../../assets/mtech.png"
import lottie from "lottie-web"
import Mpos from "../../assets/mpos.png"
import Automated from "../../assets/automated.png"
import Crm from "../../assets/crm.png"
import emailjs from "emailjs-com"
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import {FaCopyright, FaMobile} from 'react-icons/fa';
import {GoLocation} from "react-icons/go"
import {FiPhoneCall} from "react-icons/fi"
import {BsWhatsapp, BsShop, BsFillPhoneFill} from "react-icons/bs"
import {GrFormCheckmark} from "react-icons/gr"
import {FaRegHandshake} from "react-icons/fa"



function HomePage() {

  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
    'service_7t9n8ar', 
    'template_mtech',
    form.current, 
    'oTfJsNYhm4lfkWAfA'
    )
    
    .then((result) => {
      setResult("Message Sent Successfully")
      e.target.reset()
    }

    ).catch(() =>{
      setError("error")
    })
     
    e.target.reset()
  };



  const container = useRef(null)

  
    useEffect(() => {
      const instance = lottie.loadAnimation({
        container:container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../assets/FlowMobile.json')
      });
      return () => instance.destroy();
    }, []);


    const container2 = useRef(null)

    useEffect(() => {
      const instance = lottie.loadAnimation({
        container:container2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../assets/Company.json')
      });
      return () => instance.destroy();
    }, []);



  return (

    <>

    <div class='flex items-center justify-between pl-2 pr-2 lg:pl-10 lg:pr-10 lg:pb-2 pb-2 fixed top-0 z-100 backdrop-blur-sm bg-white/30 w-full'>

      
      <div class="flex mt-4">
        <img src={Logo} alt='' class="lg:w-16 lg:h-16 w-10 h-10" />
        <p class="lg:text-xl lg:mt-3 mt-2 text-x font-bold">MTech</p>
      </div>

        <ul class="flex">
          <li class='pl-2 pr-2 pt-4 lg:pl-10 lg:pr-10 lg:pt-5 lg:text-xl text-x font-bold  transition ease-in-out delay-150  lg:hover:-translate-y-1 hover:scale-110 hover:text-black  duration-300'><a href='#products'>Our Products</a></li>
          <li class='pl-2 pr-3 pt-4 lg:pl-10 lg:pr-10 lg:pt-5 lg:text-xl text-x font-bold   transition ease-in-out delay-150  lg:hover:-translate-y-1 hover:scale-110  hover:text-black  duration-300'><a href='#contact'> Contact Us</a></li>
        </ul>

      <div>
      <Switcher/>
      </div>

    </div>

    
    <section class="h-screen">

      <div class="lg:flex block justify-center align-middle lg:pt-20 pt-8">

      <div class="lg:w-1/2 lg:pl-16 lg:pt-32 pt-24 pl-3 pr-3">

      <h1 class="lg:text-left text-center lg:text-xxl text-xl font-black">Take Part in a World of Endless Possibilities With Mobile Tech Solutions.</h1>

      <h2 class="text-left pt-10 lg:text-xl text-x font-semibold pl-3 pr-3"> We are a leading provider of mobile technology solutions for your businesses, households and industries. </h2>
      
      <button class="pl-3 pt-10"><a href="#secondSection" class="bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold py-3 px-4 border dark:border-white border-green rounded- ">Learn more</a></button>

      <div class="bg-white rounded border border-green dark:border-white flex items-center justify-between lg:mt-10 mt-12 ml-3 lg:w-3/5">
        <input type="email" placeholder=" Enter Email Address" class="bg-transparent dark:text-green text-gray-600 px-4 focus:outline-none w-1/2" /> 
        <button class="py-4 px-4 bg-white dark:hover:text-grey dark:bg-green dark:text-white rounded-r border-l border-green hover:text-grey active:bg-grey disabled:opacity-50 inline-flex items-center focus:outline-none">Get Free Access</button>
      </div>


      <div class="flex pt-3">

            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-green dark:bg-white dark:text-green text-white m-3 hover:-translate-y-1 hover:scale-110">
              <BsInstagram class="w-6 h-6 text-center block m-auto hover:scale-110 hover:text-grey" />
            </a>

            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-green dark:bg-white dark:text-green text-white m-3 hover:-translate-y-1 hover:scale-110">
              <BsTwitter class="w-6 h-6 text-center block m-auto hover:scale-110 hover:text-grey"  />
            </a>

            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-green dark:bg-white dark:text-green text-white m-3 hover:-translate-y-1 hover:scale-110" >
              <BsFacebook class="w-6 h-6 text-center block m-auto hover:scale-110 hover:text-grey" />
            </a>

      </div>

      </div>

     

      
      <div class="lg:w-1/2">

      <div class='block w-15 h-15' ref={container} id="animationContainer"> </div>

      </div>
      

      </div>


    </section>

    


    
    <section id='secondSection' class="h-auto dark:bg-green bg-white ">


      <h1 id='products' class="lg:pt-20 pt-24 md:pt-72 text-center font-black lg:text-xxl text-xl">Our Products</h1>

    <h2 class="lg:text-xl text-x block lg:w-1/2 w-4/5 text-left font-normal m-auto lg:font-semibold pt-8">We offer a wide range of products and services to help you grow your business, live smarter and stay ahead in your industry.</h2>
    <p class="pt-6 lg:text-xx text-sm font-light text-center text-black dark:text-grey lg:font-medium ">With Mobile Tech Solutions, the possibilities and innovations are endless.</p>

    <div class="lg:flex justify-center align-middle block m-auto">

      <div class="p-6">
        <img src={Mpos} alt="" class="h-4/5 md:h-3/5 md:w-3/5 w-full block m-auto p-6"/>
        <h1 class="lg:p-3 p-6 text-x font-black">Mobile Point of Sale</h1>
        <p class="lg:p-3 p-6"> With our Mobile Point of Sale System, you can create an online store, manage multiple offline store(s) and increase your business sales and revenue, from your mobile phone or PC.</p>
        <button class="pl-3 pt-5"><a href="https://mpos-7443c.web.app/" target="_blank" rel="noreferrer" class="bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold py-4 px-4 border dark:border-white border-green rounded- ">Learn more</a></button> 
      </div>

      <div class="p-6">
        <img src={Crm} alt="" class="h-4/5 md:h-3/5 md:w-3/5 w-full block m-auto p-6"/>
        <h1 class="lg:p-3 p-6 text-x font-black">Customer Relationship Management (CRM)</h1>
        <p  class="lg:p-3 p-6"> The need for a great customer service in every business cannot be overemphasized, that is why we have created various tools to help you build and manage your customer relations. </p>
        <button class="pl-3 pt-5"><a href="https://mpos-7443c.web.app/" target="_blank" rel="noreferrer" class="bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold py-4 px-4 border dark:border-white border-green rounded- ">Learn more</a></button> 
      </div>

      <div class="p-6">
        <img src={Automated} alt="" class="h-4/5  md:h-3/5 md:w-3/5 w-full block m-auto p-6"/>
        <h1  class="lg:p-3 p-6 text-x font-black">Automated Mobile</h1>
        <p class="lg:p-3 p-6">Imagine a world where you can control and track your car, gate, doors and home appliances from your mobile phone. With Automated Mobile you can achieve this and more.</p>
        <button class="pl-3 pt-5"><a href="https://mpos-7443c.web.app/" target="_blank" rel="noreferrer" class="bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold py-4 px-4 border dark:border-white border-green rounded- ">Learn more</a></button> 
      </div>

     </div>



    <div class='lg:w-3/5 h-3/5 block m-auto pt-5' ref={container2} id="animationContainer"> </div>



    <div class="block m-auto">
  
    <div class="text-center pt-24">
    <h1 class="text-center lg:text-xxl text-xl font-black">Product Features</h1>
    <p class="pt-10 lg:text-xl text-x px-5 font-semibold ">All our products have a wide range of features for you to utilize to grow your business and live smarter.</p>
    <p  class="pt-5 lg:text-xx text-x px-5 font-semibold "> Every solution is built to work on both your laptop and mobile phone.</p>
    <p  class="pt-5 lg:text-xx text-x  px-5 font-semibold "> Our softwares are Fast, Responsive and easy to navigate.</p>
    </div>


         <div class="container px-6 py-10 mx-auto">
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">


            <div class="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">

            <div class="flex">
                <span class="inline-block">
                   <BsShop class="w-7 h-7"/>
                </span>

                <h1 class="lg:text-xl text-xxx lg:pl-5 pl-3 lg:font-semibold dark:text-white">MOBILE POINT OF SALE</h1>
            </div>

                <h2>Running a business is hard. Allow MPOS do all your business heavy lifting with technology.</h2>

                <div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Create an online store.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Manage multiple offline stores.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Portable bar-codes and receipts printer.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Multiple payment methods.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Manage your suppliers list.</p>
                </div>


                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Take inventory of your products.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class=""> Create multiple user roles and access.</p>
                </div>


                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Create a database of your customers.</p>
                </div>


                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Integrate your existing database.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Automated announcements and wishes.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Loyalty rewards and coupons.</p>
                </div>


                </div>
             
                
                  <div class="pt-1">

                    <Link to="" class="flex w-1/2 justify-center text-center bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold  border dark:border-white border-green rounded-xl mt-5 mb-5 ">
                    <p class="pt-2 text-x">Try it</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 pl-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </Link>
                </div>

            </div>





            <div class="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">

                <div class="flex">

                <span class="inline-block">
                   <FaRegHandshake class="w-10 h-10"/>
                </span>

                <h1 class="lg:text-xl text-xxx pl-5 lg:font-semibold capitalize dark:text-white">CRM SOFTWARES</h1>

                </div>
{/* 
                <h2>Keeping a great relationship with your customers is very important</h2> */}
                <p>Strengthen your bond with your clients using our CRM softwares.</p>

                <div>

                <div class="flex pt-2">
                <GrFormCheckmark class="w-10 h-10 text-black"/>
                <p>Get the best CRM Software for your Hospital, Restaurant, School and Offices.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-10 h-10 text-black"/>
                <p>Manage the attendance of your staff/students with an NFC ID Card.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Generate receipts and invoices.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class=""> Create multiple user roles and access.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-10 h-10 text-black"/>
                <p class="">Create a database of your customers and import your existing database.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Generate reports to track your company's growth.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Automated announcements and wishes.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="w-6 h-6 text-black"/>
                <p class="">Loyalty rewards and coupons.</p>
                </div>


                </div>
             
                
                  <div class="pt-10">

                    <Link to="" class="flex w-1/2 justify-center text-center bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold  border dark:border-white border-green rounded-xl mt-5 mb-5 ">
                    <p class="pt-2 text-x">Try it</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 pl-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </Link>
                </div>

            </div>




            <div class="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">

            <div class="flex">

                <span class="inline-block">
                   <BsFillPhoneFill class="w-8 h-8"/>
                </span>

                <h1 class="lg:text-xl text-xxx lg:pl-5 pl-3 lg:font-semibold text-gray-700 capitalize dark:text-white">AUTOMATED MOBILE</h1>
              </div>

              
                <p>Control and track your car, door, gates and home appliances from your mobile phone.</p>

                <div>

                <div class="flex pt-3">
                <GrFormCheckmark class="lg:w-10 lg:h-10 w-14 h-14 text-black"/>
                <p>Make your car smarter and safer. Control and track it from your mobile phone, regardless of your current location .</p>
                </div>


                <div class="flex pt-3">
                <GrFormCheckmark class="lg:w-6 lg:h-6 w-10 h-10 text-black"/>
                <p>Find your parking spot, monitor drivers, and get directions to your car at a glance.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="lg:w-6 lg:h-6 w-10 h-10 text-black"/>
                <p class="">Control and gain access to your gates and doors from anywhere in the world.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="lg:w-6 lg:h-6 w-10 h-10 text-black"/>
                <p class="">Power on/off your home appliances from your phone, anywhere, anytime.</p>
                </div>


                <div class="flex pt-3">
                <GrFormCheckmark class="lg:w-6 lg:h-6 w-7 h-7 text-black"/>
                <p class="">our technology supports voice commands.</p>
                </div>

                <div class="flex pt-3">
                <GrFormCheckmark class="lg:w-6 lg:h-6 w-8 h-8 text-black"/>
                <p class=""> The software is highly secure with 2-Factor authentication.</p>
                </div>


                </div>
             
                
                  <div class="pt-10">

                    <Link to="" class="flex w-1/2 justify-center text-center bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold  border dark:border-white border-green rounded-xl mt-5 mb-5 ">
                    <p class="pt-2 text-x">Try it</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 pl-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </Link>
                </div>

            </div>




        </div>

       </div>



  


    <div class="lg:pt-24 " id='contact'>

    <h1 class="text-center font-black lg:mt-5 mt-10 lg:text-xxl text-xl">Contact Us</h1>

    <div class="flex justify-center items-center w-screen h-screen lg:pt-16 lg:mt-0 mt-64">

	  <div class="container mx-auto my-4 px-4 lg:px-20">

		<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl border">

    <form ref={form} onSubmit={sendEmail}>
      
			<div class="flex">
				<h1 class="font-black uppercase text-xl ">Send us a message</h1>
			</div>

    {result && <div class="text-center bg-grey w-1/2 block my-5 mx-auto text-green rounded-lg">{result}</div>} 

			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-grey text-green mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="First Name*"
            name='name'  
            required/>
				<input class="w-full bg-grey text-green mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Last Name*" 
            name='surname' 
            required/>
				<input class="w-full bg-grey text-green mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*" 
            name='email'
            required/>
				<input class="w-full bg-grey text-green mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone*"
            name='number'
            required
             />
        </div>
				<div class="my-4">
					<textarea 
          placeholder="Message*" 
          name='message'
          class="w-full h-32 bg-grey text-green mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>

				<div class="my-2 w-1/2 lg:w-2/5">

        <button class="bg-green dark:outline-white dark:bg-transparent text-white hover:text-grey font-bold py-2 px-4 border dark:border-white border-green  lg:uppercase text-sm  tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
        Send Message
        </button>

				</div>
        </form>
			</div>



			<div
				class="w-full lg:-mt-96  mt-16 mb-16 lg:w-2/6 px-8 py-8 ml-auto bg-blue-900 rounded-2xl bg-grey">
				<div class="flex flex-col">
					<h1 class="font-black uppercase text-4xl my-4 text-green">Contact Information</h1>
				

					<div class="flex my-4 w-2/3 lg:w-1/2 text-green">
						<div class="flex flex-col">
            <GoLocation class="pt-2 pr-2 text-black h-7 w-7"/>
            </div>
            <div class="flex flex-col">
              <h2 class="text-xl font-semibold ">Location:</h2>
              <p class="text-x font-semibold">Lagos, Nigeria.</p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-4/5 text-green">
            <div class="flex flex-col">
              <FiPhoneCall class="pt-2 pr-2 text-black h-7 w-7"/>
            </div>
            <div class="flex flex-col">
              <h2 class="text-xl font-semibold">Call Us</h2>
              <a href="tel:+2349024232473" target="blank" ><span class="text-x font-semibold">(+234) 902-423-2473</span></a>
            </div>
          </div>

          <div class="flex my-4 w-2/3 lg:w-1/2 text-green">
            <div class="flex flex-col">
              <BsWhatsapp class="pt-2 pr-2 text-black h-7 w-7"/>
            </div>
            <div class="flex flex-col">
              <h2 class="text-xl font-semibold">Whatsapp</h2>
              <p class="text-x font-semibold"><a href="https://wa.me/2349024232473/?text=Hello," target="blank" >Chat with us</a></p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">

          <div class="flex pt-3">

          <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-green dark:bg-white dark:text-green text-white m-3 hover:-translate-y-1 hover:scale-110">
            <BsInstagram class="w-6 h-6 text-center block m-auto hover:scale-110 hover:text-grey" />
          </a>

          <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-green dark:bg-white dark:text-green text-white m-3 hover:-translate-y-1 hover:scale-110">
            <BsTwitter class="w-6 h-6 text-center block m-auto hover:scale-110 hover:text-grey"  />
          </a>

          <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-green dark:bg-white dark:text-green text-white m-3 hover:-translate-y-1 hover:scale-110" >
            <BsFacebook class="w-6 h-6 text-center block m-auto hover:scale-110 hover:text-grey" />
          </a>

          </div>


          </div>
        </div>
      </div>
    </div>
</div>


<div class="flex justify-center text-center p-4 lg:mt-5 mt-60 text-black z-100 backdrop-blur-sm bg-grey/50  w-full">
    <FaCopyright class=" h-10 w-10 pt-4"/>
     <p class="pr-2 pt-4"> 2022 MTech Solutions | All rights reserved</p>
  </div>

</div>



</div>

</section>


</>


  )
}

export default HomePage