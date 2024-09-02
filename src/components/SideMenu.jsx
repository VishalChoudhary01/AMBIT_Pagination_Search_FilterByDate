import { BsFillGrid1X2Fill,BsPersonVideo2 } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { ImCheckboxChecked,ImHammer2 } from "react-icons/im";
import { TbReport } from "react-icons/tb";
import { PiStudentBold,PiUserListFill } from "react-icons/pi";
import { BiSolidNews } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
const SideMenu = () => {
    const [submenuInvestor,setSubmenuInvestor]=useState(false)
    const [submenuCareer,setSubmenuCareer]=useState(false)
    const toggleMenuInvestor=()=>{
        setSubmenuInvestor((prev)=>!prev)
    }
    
    const toggleCarrer=()=>{
        setSubmenuCareer((prev)=>!prev)

    }
  return (
    <div className="w-full px-2 text-center">
      <section className="pb-[30%] pt-4">
        <p className="font-semibold text-2xl leading-none">AMBIT <span className="text-red-600 ">Finvest</span></p>
        <p className="text-gray-400 text-[0.8em] font-medium italic leading-none">Pragati Ke Partner</p>
      </section>
      <section>
        <ul className="font-semibold text-[0.9em] ml-5 pb-[20%]">
        <li className="flex gap-x-2 py-2  items-center"> <span><BsFillGrid1X2Fill/></span><span>Dashboard</span></li>
        <li className="flex gap-x-2 py-2 items-center " onClick={toggleMenuInvestor}> <span><HiMiniUserGroup/></span><span>Investors</span> <span className="-ml-1" >{submenuInvestor?<IoIosArrowDown/>:<IoIosArrowUp/>}</span> </li>
        <li className=" text-left ">{submenuInvestor && (
                        <ul className="pl-8 pt-2">
                            <li className="flex items-center "><span ><IoSearchCircle className="text-lg"/></span><span>Polices</span></li>
                            <li className="flex items-center gap-x-1"><span><LuFiles/></span> <span>Disclosure</span></li>
                            <li className="flex items-center gap-x-1"> <span><ImCheckboxChecked/></span>  <span>Listing Compliences</span></li>
                            <li className="flex items-center gap-x-1"> <span><TbReport/></span> <span>Annual Reports</span></li>
                        </ul>
                    )}
        </li>
        <li className="flex gap-x-2 py-2 items-center" onClick={toggleCarrer}><span><PiStudentBold/></span><span>Careers</span> <span className="-ml-1" >{submenuCareer?<IoIosArrowDown/>:<IoIosArrowUp/>}</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><BsPersonVideo2/></span><span>About Us</span><span className="-ml-1" >{submenuCareer?<IoIosArrowDown/>:<IoIosArrowUp/>}</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><BiSolidNews/></span><span>News</span><span className="-ml-1" >{submenuCareer?<IoIosArrowDown/>:<IoIosArrowUp/>}</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><PiUserListFill/></span><span>Loan Applications</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><FaRegAddressCard/></span><span>E-Cards</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><ImHammer2/></span><span>E-auction</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><MdSubscriptions/></span><span>Subscriptions</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><FaUserGraduate/></span><span>Nach Mandate</span><span className="-ml-1" >{submenuCareer?<IoIosArrowDown/>:<IoIosArrowUp/>}</span></li>
        <li className="flex gap-x-2 py-2 items-center"><span><RiLockPasswordFill/></span><span>Password</span></li>
        </ul>
        <p className="flex gap-x-2 py-2 items-center font-semibold"><span><CiLogout className="text-3xl"/></span><span>Log Out</span></p>
      </section>
    </div>
  )
}

export default SideMenu
