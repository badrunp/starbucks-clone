import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

export interface TypeMenu {
  id: number;
  title: string;
  url: string;
  dataChild?: TypeMenu[];
}

const Navbar = ({ sidebarToggle }: { sidebarToggle: () => void }) => {
  return (
    <div className='w-full h-[72px] md:h-[83px] lg:h-[101px] border-b relative z-50 bg-white shadow px-4 md:px-6 lg:px-[40px]'>
      <div className='flex items-center justify-between h-full w-full'>
        <NavbarLeft />
        <NavbarRight sidebarToggle={sidebarToggle} />
      </div>
    </div>
  );
};

export default Navbar;
