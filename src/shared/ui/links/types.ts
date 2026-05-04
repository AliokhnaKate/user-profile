import type {ReactNode} from "react";

export interface ItemLink {
    id: string,
    path: string,
    text: string,
    icon?: ReactNode,
};

export interface LinksProps {
    items: ItemLink[],
    variant?: 'vertical' | 'horizontal'
}