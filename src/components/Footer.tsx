import Image from 'next/image'
import sendIcon from '/public/images/icon-send.png'
import QR from '/public/images/Qr Code.png'
import appStore from '/public/images/download-appstore.png'
import googlePlay from '/public/images/GooglePlay.png'
import { BiLogoFacebook } from "react-icons/bi";
import { TbBrandTwitter } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
       <div className="Footer w-[1440px] h-[440px] absolute top-[1121px] bg-[#000000]">

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

export default Footer
