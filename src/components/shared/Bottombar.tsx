import { BiBookmark } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { IoCreateOutline, IoPaperPlaneOutline } from 'react-icons/io5';
import { Link,  useLocation } from 'react-router-dom'

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className='border-t-2 border-slate-400 z-50 flex flex-row w-full justify-between sticky bottom-0 px-3 py-1 md:hidden'>
        <Link to={"/"} className="active:bg-slate-100 gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
          <GoHome className='text-2xl'/>
        </Link>
        <Link to={"/explore"} className="gap-4 flex items-center py-3 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
          <HiOutlineSquares2X2 className='text-2xl'/>
        </Link>
        <Link to={"/saved"} className="gap-4 flex items-center py-3 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
          <BiBookmark className='text-2xl'/>
        </Link>
        <Link to={"/messages"} className="gap-4 flex items-center py-3 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
          <IoPaperPlaneOutline className='text-2xl'/>
        </Link>
        <Link to={"/create-post"} className="gap-4 flex items-center py-3 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
          <IoCreateOutline className='text-2xl'/>
        </Link>
    </section>
  )
}

export default Bottombar