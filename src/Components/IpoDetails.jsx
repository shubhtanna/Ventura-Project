import React,{useState,useEffect} from 'react'
import { IoChevronBackSharp } from "react-icons/io5"
import { Link } from 'react-router-dom'
import { TbFileDownload } from "react-icons/tb";
import MainCircle from './MainCircle';

const IpoDetails = () => {
  
  const fullText = `Lorem ipsum dolor sit amet, ea reprehenderit quia cum consequatur deleniti rem odio enim sit corporis
    galisum sit quisquam magni ea sequi maxime. Aut incididunt adipisci in fuga necessitatibus aut inventore
    nulla ut atque. Et ad saepe tempora omnis qui corrupti explicabo sit qui reprehenderit id eos dolore non
    optio. Sit ullam voluptatem aut perspiciatis aut ex officiis aut illum non consequatur omnis non
    consequuntur et distinctio quia vel sint. 
    
    Lorem ipsum dolor sit amet, ea reprehenderit quia cum consequatur deleniti rem odio enim sit corporis
    galisum sit quisquam magni ea sequi maxime. Aut incididunt adipisci in fuga necessitatibus aut inventore
    nulla ut atque. Et ad saepe tempora omnis qui corrupti explicabo sit qui reprehenderit id eos dolore non
    optio. Sit ullam voluptatem aut perspiciatis aut ex officiis aut illum non consequatur omnis non
    consequuntur et distinctio quia vel sint. 

    Lorem ipsum dolor sit amet, ea reprehenderit quia cum consequatur deleniti rem odio enim sit corporis
    galisum sit quisquam magni ea sequi maxime. Aut incididunt adipisci in fuga necessitatibus aut inventore
    nulla ut atque. Et ad saepe tempora omnis qui corrupti explicabo sit qui reprehenderit id eos dolore non
    optio. Sit ullam voluptatem aut perspiciatis aut ex officiis aut illum non consequatur omnis non
    consequuntur et distinctio quia vel sint`;
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isTruncated, setIsTruncated] = useState(true);

  const truncatedText = fullText.split(" ").slice(0, 30).join(" ") + "...";

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-8 font-sora">
    
    <div className="text-sm text-customGray mb-4 hidden sm:flex">
      <Link to={"/"} className="pr-2 hover:underline">Home</Link> &gt; <Link to={"/"} className=" px-2 hover:underline">Market watch</Link>
    </div>
    
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-4">
      <Link to="/"><i><IoChevronBackSharp size={40} className='border p-1 rounded hidden sm:flex'/> </i></Link>
        <img src="https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png" alt="OYO logo" className='aspect-square w-[35px] rounded-full object-cover' />
        <div>
          <h1 className="text-xl font-semibold text-customBlack">OYO</h1>
          <p className="text-sm text-customGray">OYO Private Limited</p>
        </div>
      </div>
      <div className='gap-5 hidden sm:flex'>
      <i><TbFileDownload className='mt-1 cursor-pointer' size={50}/></i>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Apply now</button>
      </div>
    </div>

    <div className="bg-white sm:border rounded-xl p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">IPO details</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border rounded-xl p-4">
        <div>
          <p className="text-sm text-customGray">Issue size</p>
          <p className="text-lg font-medium text-customBlack">₹3,600 - 3,700 Cr.</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Price range</p>
          <p className="text-lg font-medium text-customBlack">₹100 - 200</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Minimum amount</p>
          <p className="text-lg font-medium text-customBlack">₹50,000</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Lot size</p>
          <p className="text-lg font-medium text-customBlack">150 shares/lots</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Issue dates</p>
          <p className="text-lg font-medium text-customBlack">12 Dec - 15 Dec 22</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Listed on</p>
          <p className="text-lg font-medium text-customBlack">15 Dec 22</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Listed price</p>
          <p className="text-lg font-medium text-customBlack">₹150</p>
        </div>
        <div>
          <p className="text-sm text-customGray">Listing gains</p>
          <p className="text-lg font-medium text-red-600">₹10 (10.0%)</p>
        </div>
      </div>
    </div>

    <div className="bg-white sm:border rounded-xl p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">IPO timeline</h2>

      <div className=''><MainCircle/></div>
      
    </div>

    <div className="bg-white sm:border rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">About the company</h2>
      <p className="text-sm text-customGray">
        {isMobile && isTruncated ? truncatedText : fullText}
      </p>
      {isMobile && isTruncated && (
        <a href="#" className="text-red-600" onClick={toggleReadMore}>
          Read more
        </a>
      )}
    </div>
  </div>
  )
}

export default IpoDetails