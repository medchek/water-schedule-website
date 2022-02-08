import Link from "next/link";

interface Props {
  label: string;
  href: string;
  // typically a function to close the popup menu when a link is clicked
  onClick?: () => void;
}

const HeaderDropDownNavLink = ({ label, href, onClick }: Props) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <Link href={href}>
      <a
        onClick={handleOnClick}
        className="flex items-center text-appDarkPurple transition-colors hover:bg-appPurpleGrey focus:bg-appPurpleGrey w-full h-12 px-3  font-medium"
      >
        {label}
      </a>
    </Link>
  );
};

export default HeaderDropDownNavLink;
