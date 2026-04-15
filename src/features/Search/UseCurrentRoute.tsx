import {useMatches} from "react-router-dom";

export interface RouteHandle {
  searchPattern: string,
  pageType: string
}

export function UseCurrentRoute() {
    const matches = useMatches();

    const currentMatch = matches[matches.length - 1];
    const handle = currentMatch?.handle as RouteHandle | undefined;
    
    return handle;
}