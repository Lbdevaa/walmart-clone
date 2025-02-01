import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="https://links.papareact.com/xsi"
          alt="Walmart logo"
          width={150}
          height={150}
        />
      </Link>
    </header>
  );
}

export default Header;
