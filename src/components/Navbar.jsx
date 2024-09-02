import avatar from '/images/pngegg.png'
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <nav className='w-full px-2 h-14 border-b  flex justify-end shadow-md shadow-gray-200'>
        <section className='flex justify-end gap-x-3 items-center'>
            <section>
                <p className='text-[0.9em] font-bold'>Thomas Anree</p>
                <p className='text-[0.7em] text-gray-700'>UI UX Designer</p>
            </section>
            <img src={avatar} width={30} height={30} alt="avatar" />
            <IoIosArrowDown/>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
