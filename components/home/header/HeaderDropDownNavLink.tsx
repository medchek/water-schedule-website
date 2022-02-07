interface Props {
  label: string;
  href: string;
  onClick?: () => void;
}

const HeaderDropDownNavLink = ({ label, href, onClick }: Props) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <a
      href={href}
      onClick={handleOnClick}
      className="flex items-center text-appDarkPurple transition-colors hover:bg-appPurpleGrey focus:bg-appPurpleGrey w-full h-12 px-3  font-medium"
    >
      {label}
    </a>
  );
};

export default HeaderDropDownNavLink;
