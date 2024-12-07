import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import pic from '/public/images/dl.beatsnoop 1.png'
import google from '/public/images/Icon-Google.png'


function Signup() {
    return (
        <div className="container w-[1440px] h-[1561px] bg-[#ffffff]">
            <div className='topHeader w-[1440px] h-12 bg-[#000000]'>
                <div className='frame746 w-[859px] h-6 flex gap-[231px] absolute top-3 left-[445px] text-sm'>
                    <p className='text-white w-[550px] h-24 gap-2'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="ShopNow underline">ShopNow</a> </p>
                    <p className='w-[78px] h-6 text-white flex text-[14px] leading-[21px] gap-2'>English<ChevronDown /></p>
                </div>
                <div className="header w-[1170px] h-[38px] absolute top-[86px] left-[135px] gap-[210px] flex items-center">
                    <div className='w-[717px] h-6 gap-[232px] flex'>
                        <h1 className='w-[118px] h-6 text-[24px] font-bold tracking-[3%]'>Exclusive</h1>
                        <ul className='flex w-[367px] h-6 gap-12 text-[16px] font-normal justify-center items-center'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className='underline'>
                                <Link href='/signup'>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <Input type="text" placeholder="What are you looking for?" className='w-[243px] h-[38px] bg-[#f5f5f5]' />
                        <Search className='text-black relative left-[-50px]' />
                    </div>
                </div>
            </div>
            <div className="line bg-[#000000] w-[1440px] h-[0.5px] opacity-[30%] relative top-[100px]"></div>
            <div className="content w-[1305px] h-[781px] relative top-200px left-0 flex gap-[129px] justify-between items-center">
                <Image
                    src={pic}
                    alt='leftImg'
                    width={805}
                    height={781}
                    className='relative top-[200px]'
                />
                <div className="Frame759 w-[371px] h-[530px] relative top-[200px] flex flex-col gap-12">
                    <div className="Frame753 w-[339px] h-[78px] flex flex-col gap-6">
                        <h1 className='text-[36px] font-medium leading-[30px] tracking-[4%]'>Create an account</h1>
                        <p className='text-[16px] leading-[24px] font-normal text-[#000000]'>Enter your details below</p>
                    </div>
                    <div className="Frame758 w-[371px] h-[404px] gap-10 flex flex-col">
                        <div className="Frame757 w-[370px] h-[176px] gap-10 flex flex-col">
                            <Input type="search" placeholder="Name" className='w-[370px] h-[32px] gap-2 text-[#000000] text-[16px] font-normal leading-6 border-t-0 border-r-0 border-l-0 opacity-[40%] border-b-[1px] border-[#000000] outline-none focus:outline-none rounded-none' />
                            <Input type="search" placeholder="Email or Phone Number" className='w-[370px] h-[32px] gap-2 text-[#000000] text-[16px] font-normal leading-6 border-t-0 border-r-0 border-l-0 opacity-[40%] border-b-[1px] border-[#000000] outline-none focus:outline-none rounded-none' />
                            <Input type="search" placeholder="Password" className='w-[370px] h-[32px] gap-2 text-[#000000] text-[16px] font-normal leading-6 border-t-0 border-r-0 border-l-0 opacity-[40%] border-b-[1px] border-[#000000] outline-none focus:outline-none rounded-none' />
                        </div>
                        <div className="Frame752 w-[371px] h-[188px] gap-4 flex flex-col">
                            <Button variant="secondary" className='w-[371px] h-14 bg-[#db4444] rounded-[4px] py-4 px-[122px] gap-[10px] hover:none leading-6 text-[16px] font-medium text-[#fafafa]'>Create Account</Button>
                            <div className='Frame751 flex flex-col w-[371px] h-[116px] gap-8 justify-center items-center '>
                                <div className='w-[371px] h-14 rounded-[4px] border-[1px] border-[#000000] flex justify-center items-center'>
                                    <div className='w-[199px] h-6 gap-4 flex '>
                                        <a href="https://www.google.com" >
                                            <Image
                                                src={google}
                                                alt='googleIcon'
                                                width={24}
                                                height={24}
                                            />
                                        </a>
                                        <p className='w-[159px] h-6 text-[#000000] text-[16px] font-normal leading-6'>Sign up with Google</p>
                                    </div>
                                </div>
                                <div className="Frame750 w-[248px] h-7 gap-4 flex">
                                <p className='opacity-[70%] w-[185px] h-6 text-[#000000]'>Already have account?</p>
                                <span className='w-[47px] h-[28px] gap-1 underline'>Log In</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Signup
