import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

const HeaderNavLink = ({ label, href }: Props) => {
  return (
    <Link href={href}>
      <a className="flex items-center justify-center hover:text-white border-b-2 border-transparent hover:border-white/70 transition-colors h-10">
        {label}
      </a>
    </Link>
  );
};

export default HeaderNavLink;
