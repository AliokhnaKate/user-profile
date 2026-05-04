import {useSearchParams} from "react-router-dom";
import {useMemo} from "react";
import type {UserModel} from "../../../entities/user/model/types";
import type {SearchableListProps} from "./types";

function SearchableList<T extends UserModel>(props: SearchableListProps<T>) {
    const {items, renderItems} = props;

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const itemsSearch = useMemo(() => {
        // if (!query) return items;
        
        if (items) {
            const search = items.filter(item => item.name.toLowerCase().includes(query?.toLowerCase()!));
            return search;
        }
    }, [items, query]);

    return (
        <>
            <div>
                {!query ?
                    <div>
                        {items.map((item) => (
                            <div key={item.id}>
                                {renderItems(item)}
                            </div>
                        ))}
                    </div>
                    :
                    <div>
                        {itemsSearch?.map((item) => (
                            <div key={item.id}>
                                {renderItems(item)}
                            </div>
                        ))}
                    </div>
                }

            </div>
        </>
    )
}

export default SearchableList;

// import { useSearchParams } from "react-router-dom";
// import { useMemo } from "react";

// export interface SearchableListProps<T> {
//     items: T[];
//     renderItem: (item: T) => React.ReactNode;
//     searchBy?: (item: T) => string;
// }

// export const SearchableList = <T,>({ 
//     items, 
//     renderItem, 
//     searchBy = (item: any) => item.name || item.title || ''
// }: SearchableListProps<T>) => {
//     const [searchParams] = useSearchParams();
//     const query = searchParams.get('query') || '';

//     const filteredItems = useMemo(() => {
//         if (!query) return items;
        
//         const lowerQuery = query.toLowerCase();
//         return items.filter(item => 
//             searchBy(item).toLowerCase().includes(lowerQuery)
//         );
//     }, [items, query, searchBy]);

//     return (
//         <div>
//             {filteredItems.map((item, index) => (
//                 <div key={index}>
//                     {renderItem(item)}
//                 </div>
//             ))}
//         </div>
//     );
// };