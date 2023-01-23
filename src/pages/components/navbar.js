import Link from "next/link";
import { useRouter } from 'next/router'

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" }
];

const Navbar = () => {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <div className="border-b-2">
            <div className="text-center text-3xl p-5 sm:text-4xl sm:text-left">
                Lunar Melee
            </div>
            <div>
                {MENU_LIST.map((item, index) => {
                    return (
                        <Link key={index}
                            href={item.href}
                        >
                            {item.text}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};
  
export default Navbar;