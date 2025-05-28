interface HeaderProps {
  title: string;
  isRed: boolean;
}

const Header = ({ title, isRed = true }: HeaderProps) => {
  return (
    <div
      className={`${isRed ? "text-wushu-red-300" : "text-wushu-gold-100"} font-margasa justify-start text-4xl font-extrabold md:text-5xl lg:text-7xl`}
    >
      {title}
    </div>
  );
};

export default Header;
