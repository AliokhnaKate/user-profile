import type {ReactNode} from "react";

export type SearchableListProps<T> = {
    items: T[];
    renderItems: (user: T) => ReactNode;
}