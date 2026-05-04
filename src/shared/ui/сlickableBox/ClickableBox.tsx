import type {ReactNode} from "react";
import {NavLink} from "react-router-dom";

type ClickableBoxProps = {
    to: string,
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
    children: ReactNode
};

function ClickableBox (props: ClickableBoxProps) {
    const {onClick, children, to} = props;

    return (
        <NavLink to={to} onClick={onClick}>
            {children}
        </NavLink>
    )
}

export default ClickableBox;