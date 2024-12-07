import Link from "next/link"
import { ChevronDown, Search } from "lucide-react"
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Image from 'next/image'
import sendIcon from '/public/images/icon-send.png'
import QR from '/public/images/Qr Code.png'
import appStore from '/public/images/download-appstore.png'
import googlePlay from '/public/images/GooglePlay.png'
import { BiLogoFacebook } from "react-icons/bi";
import { TbBrandTwitter } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import women from '/public/images/two-women.png'
import one from '/public/images/Frame.png'
import two from '/public/images/frameTwo.png'
import three from '/public/images/frameThree.png'
import four from '/public/images/frameFour.png'
import tom from '/public/images/tom.png'
import emma from '/public/images/emma.png'
import will from '/public/images/will.png'
import dots from '/public/images/dots.png'
import first from '/public/images/first.png'
import second from '/public/images/second.png'
import third from '/public/images/third.png'

function About() {
  return (
    <div className='main w-[1440px] h-[2905px] bg-[#ffffff]'>

      {/* Header */}
      <div className='topHeader w-[1440px] h-12 bg-[#000000]'>
        <div className='frame746 w-[859px] h-6 flex items-center gap-[231px] relative top-3 left-[445px] text-sm font-poppins'>
          <div className="Frame555 w-[550px] h-6 gap-2 flex items-center text-white">
            <p className='w-[474px] h-[18px] text-[14px] leading-[21px] font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="#" className="w-[68px] h-6 font-semibold text-[14px] leading-6 text-center underline">ShopNow</a>
          </div>
          <p className='w-[78px] h-6 text-white flex text-[14px] leading-[21px] gap-2'>English<ChevronDown className="w-6 h-6" /></p>
        </div>
        <div className="header w-[1170px] h-[38px] absolute top-[88px] left-[135px] gap-[130px] flex items-center">
          <div className='Frame556 w-[645px] h-6 gap-[160px] flex items-center'>
            <h1 className='w-[118px] h-6 text-[24px] font-bold font-poppins tracking-[3%]'>Exclusive</h1>
            <ul className='flex w-[367px] h-6 gap-12 text-[16px] font-normal items-center '>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/signup'>Sign Up</Link>
              </li>
            </ul>
          </div>

          <div className='Frame552 w-[395px] h-[38px] gap-6 flex items-center'>
            <div className="searchComp w-[243px] h-[38px] flex items-center rounded py-[7px] pl-5 pr-3 gap-5 bg-[#F5F5F5]">
              <div className="Frame550 w-[211px] h-6 gap-[34px] flex">
                <p className='w-[153px] h-[18px] opacity-50 text-[12px] pt-1 font-normal leading-[18px] rounded-none font-poppins'>What are you looking for?</p>
                <div className="searchIcon w-6 h-6">
                  <Search />
                </div>
              </div>
            </div>


            <div className="Frame551 w-[128px] h-8 flex gap-4 items-center">

              <div className="icon1 w-8 h-8">
                <GoHeart className='w-6 h-6' />
              </div>

              <div className="icon2 w-8 h-8">
                <IoCartOutline className='w-6 h-6' />
              </div>

              <div className="icon3 w-8 h-8">
                <FiUser className='w-6 h-6' />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="line bg-[#000000] w-[1440px] h-[0.5px] opacity-[30%] relative top-[100px]"></div>
      {/* Header Ends Here */}

      {/* Mid Section */}
      <div className="link w-[103px] h-[21px] relative top-[222px] left-[135px] gap-3 flex font-poppins">
        <Link href='/' className="home w-[42px] h-[21px] text-[14px] font-normal leading-[21px] text-[#000000] opacity-[50%]">Home</Link>
        <p>/</p>
        <Link href='#' className="w-[31px] h-[21px] text-[14px] font-normal leading-[21px] text-[#000000]">About</Link>
      </div>

      
      <div className="Frame869 w-[525px] h-[336px] absolute top-[422px] left-[135px] flex flex-col gap-10 text-justify">
        <h1 className='w-[277px] h-16 font-inter font-semibold text-[54px] text-justify leading-16 tracking-[6%] text-[#000000]'>Our Story</h1>
        <div className="Frame868 w-[525px] h-[232px] gap-6">
          <p className='w-[525px] h-[130px] font-poppins font-normal text-[16px] leading-[26px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across
            the region. </p>
          <p className='w-[505px] h-[78px] font-poppins font-normal text-[16px] leading-[26px]'>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>        
      </div>

      <div className="sideImg w-[705px] h-[609px] absolute top-[285px] left-[735px] rounded-tl-[4px] rounded-bl-[4px]">
          <Image src={women} alt='aboutImg' />
      </div>
      
      <div className="Frame891 w-[1170px] h-[230px] absolute top-[1034px] left-[135px] flex gap-[30px]">
        <Image src={one} alt='frameOne' width={270} height={230} className='rounded border border-[#000000]' />
        <Image src={two} alt='frameTwo' width={270} height={230} className='rounded border border-[#000000]' />
        <Image src={three} alt='frameThree' width={270} height={230} className='rounded border border-[#000000]' />
        <Image src={four} alt='frameFour' width={270} height={230} className='rounded border border-[#000000]' />
      </div>

      <div className="Frame890 w-[1170px] h-[564px] absolute top-[1404px] left-[135px] flex gap-[30px]">
        <Image src={tom} alt='tomCruise' width={370} height={564} className='rounded border' />
        <Image src={emma} alt='emmaWatson' width={370} height={564} className='rounded border' />
        <Image src={will} alt='willSmith' width={370} height={564} className='rounded border' />
      </div>

      <div className="Frame883 w-[112px] h-4 absolute top-[2008px] left-[664px]">
        <Image src={dots} alt="dots" />
      </div>

    <div className="fullServ w-[943px] h-[161px] flex gap-[88px] absolute top-[2164px] left-[248px]">
        <Image src={first} alt='first' width={249} height={161} />
        <Image src={second} alt='second' width={249} height={161} />
        <Image src={third} alt='third' width={249} height={161} />
    </div>


      {/* Footer */}
      <div className="Footer w-[1440px] h-[440px] absolute top-[2465px] bg-[#000000]">

        <div className="Frame743 w-[1170px] h-[236px] relative top-20 left-[135px] gap-[87px] flex">

          {/* 1st column */}

          <div className="Frame717 w-[217px] h-[188px] gap-4 flex flex-col">
            <div className="Frame716 w-[206px] h-[124px] gap-6">
              <div className="Frame715 w-[118px] h-[76px] gap-6 flex flex-col">
                <h1 className='logo w-[118px] h-24 text-[24px] font-bold tracking-[3%] leading-6 text-[#fafafa]'>Exclusive</h1>
                <h2 className='w-[101px] h-7 text-[#fafafa]'>Subscribe</h2>
                <p className='w-[206px] h-24 text-[16px] text-[#fafafa] font-normal leading-6'>Get 10% off your first order</p>
              </div>
            </div>
            <div className='w-[217px] h-12 gap-8 py-3 pl-4 text-[#fafafa] text-[16px] font-normal leading-6 border-[1.5px] border-[#fafafa] flex'>
              <p className='w-[130px] h-6 opacity-[40%] text-[16px] text-[#fafafa] font-normal leading-6'>Enter your email</p>
              <Image
                src={sendIcon}
                alt='sendIcon'
                width={24}
                height={24}
                className='text-[#fafafa]'
              />
            </div>
          </div>

          {/* 2nd column */}

          <div className="Frame713 w-[175px] h-[180px] gap-6 flex flex-col text-[#fafafa]">
            <h1 className='w-[81px] h-7 text-[20px] text-[#fafafa] leading-7 font-medium'>Support</h1>
            <div className="Frame712 w-[175px] h-[128px] gap-4 flex flex-col">
              <p className='w-[175px] h-12 text-[16px] font-normal'>111 Bijoy sarani,Dhaka, <br />DH 1515, Bangladesh.</p>
              <p className='w-[175px] h-6 font-normal '>exclusive@gmail.com</p>
              <p className='w-[165px] h-6 text-[16px] leading-6'>+88015-88888-9999</p>
            </div>
          </div>

          {/* 3rd column */}

          <div className="Frame711 w-[123px] h-[236px] gap-6 text-[#fafafa] flex flex-col">
            <h1 className='w-[85px] h-7 text-[20px] font-medium leading-7'>Account</h1>
            <div className="Frame710 w-[123px] h-[184px] gap-4 flex flex-col">
              <p className='w-[94px] h-6 text-[16px] font-normal leading-6'>My Account</p>
              <p className='w-[123px] h-6 text-[16px] leading-6 font-normal'>Login / Register</p>
              <p className='w-[35px] h-6 text-[16px] leading-6 font-normal'>Cart</p>
              <p className='w-[61px] h-6 text-[16px] leading-6 font-normal'>Wishlist</p>
              <p className='w-[41px] h-6 text-[16px] leading-6 font-normal'>Shop</p>
            </div>
          </div>

          {/* 4th column */}

          <div className="Frame709 w-[109px] h-[196px] gap-6 flex flex-col text-[#fafafa]">
            <h1 className='w-[101px] h-7 text-[20px] font-medium'>Quick Link</h1>

            <div className="Frame708 w-[109px] h-[144px] gap-4 flex flex-col">
              <p className='w-[109px] h-6 font-normal text-[16px]'>Privacy Policy</p>
              <p className='w-[105px] h-6 font-normal text-[16px]'>Terms of Use</p>
              <p className='w-8 h-6 font-normal text-[16px]'>FAQ</p>
              <p className='w-[66px] h-6 font-normal text-[16px]'>Contact</p>
            </div>
          </div>

          {/* 5th column */}

          <div className="Frame742 w-[198px] h-[210px] flex flex-col gap-6 text-[#fafafa]">
            <div className="Frame721 w-[198px] h-[162px] gap-6 flex flex-col">
              <p className='w-[148px] h-7 text-[20px] font-medium'>Download App</p>
              <div className="Frame720 w-[198px] h-[110px] gap-2 flex flex-col">
                <p className='text-[12px] font-medium leading-[18px] w-[194px] h-[18px] opacity-[70%]'>Save $3 with App New User Only</p>
                <div className="Frame719 w-[198px] h-[84px] gap-2 flex">
                  <div className="qr">
                    <Image
                      src={QR}
                      alt='QRCode'
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="Frame718 flex flex-col gap-1">
                    <Image
                      src={appStore}
                      alt='appStoreIcon'
                      width={110}
                      height={40}
                    />
                    <Image
                      src={googlePlay}
                      alt='gPlayIcon'
                      width={110}
                      height={40}
                    />
                  </div>

                </div>

              </div>
            </div>
            <div className="Frame741 w-[168px] h-6 gap-6 flex">
              <BiLogoFacebook className='w-6 h-6' />
              <TbBrandTwitter className='w-6 h-6' />
              <FaInstagram className='w-6 h-6' />
              <FaLinkedinIn className='w-6 h-6' />
            </div>


          </div>

        </div>

      </div>




    </div>
  )
}

export default About
