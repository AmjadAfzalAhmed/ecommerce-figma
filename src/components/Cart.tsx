import Link from "next/link"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
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
import cancel from '/public/images/icon-cancel.png'
import led from '/public/images/led.png'
import game from '/public/images/Gamepad.png'



function Cart() {
  return (
    <div className='main w-[1440px] h-[1743px] bg-[#ffffff]'>

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

      <div className="link w-[103px] h-[21px] relative top-[222px] left-[135px] gap-3 flex font-poppins">
        <Link href='/' className="home w-[42px] h-[21px] text-[14px] font-normal leading-[21px] text-[#000000] opacity-[50%]">Home</Link>
        <p>/</p>
        <Link href='#' className="w-[31px] h-[21px] text-[14px] font-normal leading-[21px] text-[#000000]">Cart</Link>
      </div>

      {/* page container */}

      <div className="Frame807 w-[1170px] h-[840px] relative top-[323px] left-[135px] gap-20 flex flex-col">
        <div className="Frame805 w-[1170px] h-[436px] gap-6 flex flex-col">
          <div className="Frame803 w-[1170px] h-[356px] gap-10 flex flex-col">

            <div className="cartMain w-[1170px] h-[72px] rounded shadow-custom flex justify between items-center">
              <div className="Frame793 w-[1091px] h-6 relative left-10 flex items-center justify-between gap-[284px]">
                <p className="w-[63px] h-6 text-[16px] font-normal font-poppins leading-6">Product</p>
                <p className="w-[39px] h-6 text-[16px] font-normal font-poppins leading-6">Price</p>
                <p className="w-[69px] h-6 text-[16px] font-normal font-poppins leading-6">Quantity</p>
                <p className="w-[68px] h-6 text-[16px] font-normal font-poppins leading-6">Subtotal</p>
              </div>
            </div>

            <div className="cartSection1 w-[1170px] h-[102px] rounded shadow-custom flex">

              <div className="lcdimg w-[54px] h-[54px] relative top-6 left-10">
                <Image src={cancel} alt="cancelIcon" width={24} height={24}
                  className="relative top-[-5px] left-[-10px] z-20" />
                <Image src={led} alt="ledTv" width={50} height={39}
                  className="relative top-[-18px]" />
              </div>
              <p className='w-24 h-6 relative top-[39px] left-[70px] font-normal font-poppins text-[16px] leading-6'>LCD Monitor</p>
              <p className='w-[41px] h-6 relative top-[39px] left-[230px] font-normal font-poppins text-[16px] leading-6'>$650</p>
              <div className="w-[72px] h-[44px] relative top-[29px] left-[510px] rounded border-[1.5px] border-[#000000] opacity-40">
                <div className="Frame791 w-12 h-8 relative top-[6px] left-3 gap-4 flex items-center">
                  <p className="w-4 h-6 text-[16px] font-normal leading-6 text-[#000000]">01</p>
                  <div className="Frame792 flex flex-col items-center justify-between w-4 h-8">
                    <ChevronUp className="w-4 h-4 cursor-pointer" />
                    <ChevronDown className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              <p className='w-[41px] h-6 relative top-[39px] left-[800px] font-normal font-poppins text-[16px] leading-6'>$650</p>

            </div>
            <div className="cartSection1 w-[1170px] h-[102px] rounded shadow-custom flex">

              <div className="lcdimg w-[54px] h-[54px] relative top-6 left-10">
                                
                <Image src={game} alt="gamePad" width={50} height={39}
                />
              </div>
              <p className='w-24 h-6 relative top-[39px] left-[70px] font-normal font-poppins text-[16px] leading-6'>H1 Gamepad</p>
              <p className='w-[41px] h-6 relative top-[39px] left-[230px] font-normal font-poppins text-[16px] leading-6'>$650</p>
              <div className="w-[72px] h-[44px] relative top-[29px] left-[510px] rounded border-[1.5px] border-[#000000] opacity-40">
                <div className="Frame791 w-12 h-8 relative top-[6px] left-3 gap-4 flex items-center">
                  <p className="w-4 h-6 text-[16px] font-normal leading-6 text-[#000000]">02</p>
                  <div className="Frame792 flex flex-col items-center justify-between w-4 h-8">
                    <ChevronUp className="w-4 h-4 cursor-pointer" />
                    <ChevronDown className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              <p className='w-[41px] h-6 relative top-[39px] left-[800px] font-normal font-poppins text-[16px] leading-6'>$650</p>

            </div>

            
          </div>
          <div className="Frame804 w-[1170px] h-14 gap-[757px] flex items-center justify-between font-poppins">
            <button className='w-[256px] h-14 rounded border border-[rgba(0,0,0,0.5)] py-4 px-12 gap-[10px]'>Return To Shop</button>
            <button className='w-[195px] h-14 rounded border border-[rgba(0,0,0,0.5)] py-4 px-11 gap-[10px] text-[16px] font-medium leading-6'>Update Cart </button>
          </div>

        </div>

        <div className="Frame806 w-[1170px] h-[324px] flex gap-[173px]">
          <div className="Frame801 w-[527px] h-14 flex justify-between gap-4">
            <div className="Frame798 w-[300px] h-14 rounded border border-[#000000]">
              <p className='w-[112px] h-6 relative top-4 left-6 opacity-50 font-poppins font-normal text-[16px] leading-6'>Coupon Code</p>
            </div>
            <button className="w-[211px] h-14 py-4 px-12 rounded bg-[#db4444] text-[16px] text-[#fafafa] font-medium font-poppins leading-6">Apply Coupon</button>
          </div>

          <div className="Frame800 w-[470px] h-[324px] rounded border-[1.5px] border-[#000000]">
            <p className="w-[100px] h-7 relative top-8 left-6 font-medium font-poppins text-xl leading-7">Cart Total</p>
            <div className="Frame796 w-[422px] h-6 relative top-[64px] left-6 gap-[307px] flex">
              <p className="w-[71px] h-6 font-poppins font-normal text-[16px] leading-6">Subtotal:</p>
              <p className="w-11 h-6 font-poppins font-normal text-[16px] leading-6">$1750</p>
            </div>
            <div className="underline w-[422px] border border-[#000000] relative top-[80px] left-6 opacity-40"></div>

            <div className="Frame795 w-[422px] h-6 relative top-[100px] left-6 gap-[314px] flex">
              <p className="w-[71px] h-6 font-poppins font-normal text-[16px] leading-6">Shipping:</p>
              <p className="w-11 h-6 font-poppins font-normal text-[16px] leading-6">Free</p>
            </div>
            <div className="underline w-[422px] border border-[#000000] relative top-[120px] left-6 opacity-40"></div>

            <div className="Frame795 w-[422px] h-6 relative top-[130px] left-6 gap-[335px] flex">
              <p className="w-[71px] h-6 font-poppins font-normal text-[16px] leading-6">Total:</p>
              <p className="w-11 h-6 font-poppins font-normal text-[16px] leading-6">$1750</p>
            </div>
            <button className="w-[260px] h-14 relative top-[160px] left-[89px] rounded py-4 px-12 gap-[10px] font-medium font-poppins text-[16px text-[#fafafa] leading-6 bg-[#db4444]">Process to checkout</button>
          </div>

        </div>
      </div>



      {/* Footer */}

      <div className="Footer w-[1440px] h-[440px] absolute top-[1303px] bg-[#000000]">

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

export default Cart
