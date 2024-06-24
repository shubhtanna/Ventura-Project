import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const IpoData = () => {
  const ipoData = [
    {
      company: "GO AIR",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTlSDGsxMsjR4wFC-33moZEnjGRHgvZlTrQ&s",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      shares: "100 Shares/5 Lots",
    },
    {
      company: "BAJAJ ENERGY",
      logo: "https://www.bajajenergy.com/bajajenergy_assets/s3fs-public/images/Bajaj%20Energy_300x118_Png.png", 
      issueDate: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      shares: "100 Shares/5 Lots",
    },
    
    {
        company: "OYO",
        logo: "https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png",
        issueDate: "To be announced",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "BOAT",
        logo: "https://cdn.dribbble.com/users/3480894/screenshots/17745481/boat-01.png",
        issueDate: "To be announced",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "VODAFONE",
        logo: "https://e7.pngegg.com/pngimages/152/142/png-clipart-vodafone-logo-vodafone-digital-mobile-phones-vodafone-m-s-datatrendzs-internet-vodafone-miscellaneous-text-thumbnail.png",
        issueDate: "4th - 7th Oct 2022",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "GO DIGIT",
        logo: "https://bfsi.eletsonline.com/wp-content/uploads/2022/10/Digit-Insurance.jpg",
        issueDate: "To be announced",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "MOBIKWIK",
        logo: "https://i.pinimg.com/originals/ce/c1/dd/cec1dd1d81590f5e6aac34f2a2fbb51f.png",
        issueDate: "4th - 7th Oct 2022",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "SNAPDEAL",
        logo: "https://qph.cf2.quoracdn.net/main-qimg-794802b92a23934377a39b0d3b1e7e2c.webp",
        issueDate: "To be announced",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "DROOM",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE99JuQx7En4SLM3cqB4u9NM2hBAhIgYp-hw&s",
        issueDate:"4th - 7th Oct 2022" ,
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "SWIGGY",
        logo: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png",
        issueDate: "4th - 7th Oct 2022",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
      {
        company: "ZOMATO",
        logo: "https://www.fluidscapes.in/wp-content/uploads/2023/05/zomato-logo-square.jpg",
        issueDate: "To be announced",
        issueSize: "₹3600 Crores",
        priceRange: "₹50-60",
        minInvest: "₹50,000",
        shares: "100 Shares/5 Lots",
      },
  ];

  return (
    <div className="w-11/12 mx-auto px-4 py-8 font-sora">
      <Table className="min-w-full bg-white border border-gray-300">
        <Thead className="bg-gray-100">
          <Tr>
            <Th className="py-2 px-4 border-b text-left text-sm font-medium text-customGray">Company / Issue date</Th>
            <Th className="py-2 px-4 border-b text-left text-sm font-medium text-customGray">Issue size</Th>
            <Th className="py-2 px-4 border-b text-left text-sm font-medium text-customGray">Price range</Th>
            <Th className="py-2 px-4 border-b text-left text-sm font-medium text-customGray">Min invest/qty</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ipoData.map((ipo, index) => (
            <Tr key={index} className="border-b">
            <Link to={"/ipodetail/:id"}>
            <Td className="py-3 px-4">
                <div className="flex items-center space-x-2">
                  <img src={ipo.logo} alt={`${ipo.company} logo`} className='aspect-square w-[35px] rounded-full object-cover'/>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-customBlack">{ipo.company}</div>
                    <div className="text-xs text-customGray">{ipo.issueDate}</div>
                  </div>
                </div>
              </Td>
            </Link>
              <Td className="py-2 px-4  text-sm font-semibold text-customBlack">{ipo.issueSize}</Td>
              <Td className="py-2 px-4  text-sm font-semibold text-customBlack">{ipo.priceRange}</Td>
              <Td className="py-2 px-4  text-sm text-customBlack">
                <div className='font-semibold text-customBlack'>{ipo.minInvest}</div>
                <div className="text-xs text-customGray">{ipo.shares}</div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default IpoData;
