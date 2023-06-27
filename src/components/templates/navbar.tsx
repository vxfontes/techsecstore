import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import Area from "../layouts/Area";
import { TLogo } from "../svg/Tlogo";

const NavBar = () => {
    return (
        <Area className="bg-black fixed z-50">
            <div className={`flex items-center bg-black h-14 justify-between px-3`}>
                <TLogo height={24} />
                <div className={`flex gap-3`}>
                    <IconShoppingCart />
                    <IconUser />
                </div>
            </div>
        </Area>
    );
}

export default NavBar;