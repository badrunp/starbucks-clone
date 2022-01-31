import Menu from './icon/Menu';
import NavbarAuth from './NavbarAuth';
import NavbarFindLocation from './NavbarFindLocation';

const NavbarRight = ({ sidebarToggle }: { sidebarToggle: () => void }) => {
  return (
    <div className='flex items-center space-x-10'>
      <NavbarFindLocation />
      <button
        onClick={sidebarToggle}
        className='relative md:hidden p-[6px] hover:bg-zinc-200 before:contents before:absolute before:inset-0 before:w-full before:h-full before:bg-gray-200 before:z-20 rounded-full'
      >
        <Menu />
      </button>
      <NavbarAuth />
    </div>
  );
};

export default NavbarRight;
