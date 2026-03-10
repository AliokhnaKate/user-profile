import type {ReactNode} from "react";

export interface CommentModel {
    children: ReactNode;
    collapseComment: string;
    expandComment: string;
    hidden: boolean;
    showControls: boolean;
}