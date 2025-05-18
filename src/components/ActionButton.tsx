import { SelectedPage } from "@/shared/types";
import type { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    children: ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
    return (
        <AnchorLink 
            className="rounded-md bg-amber-500 px-10 py-2 hover:bg-rose-500 hover:text-white"
            href={`#${SelectedPage.ContactUs}`}
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {children}
        </AnchorLink>
    );
}

export default ActionButton;