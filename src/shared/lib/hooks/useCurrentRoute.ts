import {useMatches} from "react-router-dom";

export interface RouteHandle {
  searchPattern: string,
  pageType: string
}

//хуки без бизнес-логики, поэтому в shared, а не в features
export function useCurrentRoute() {
    const matches = useMatches();

    const currentMatch = matches[matches.length - 1];
    const handle = currentMatch?.handle as RouteHandle | undefined;
    
    return handle;
}