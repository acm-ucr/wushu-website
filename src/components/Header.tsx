const Header = (props: { title: string }) => {
  return (
    <div className="text-wushu-red-300 font-margasa justify-start text-9xl">
      {props.title}
    </div>
  );
};

export default Header;
