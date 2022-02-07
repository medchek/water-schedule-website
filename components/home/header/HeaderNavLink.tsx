interface Props {
  label: string;
  href: string;
}

const HeaderNavLink = ({ label, href }: Props) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center hover:text-white border-b-2 border-transparent hover:border-white/70 transition-colors h-10"
    >
      {label}
    </a>
  );
};

export default HeaderNavLink;
