import type {ItemListProps, UserModel} from "../../../entities/[entity]/model/types";

function ItemList<T extends UserModel>(props: ItemListProps<T>) {
    const {items, renderItem} = props;

    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    {renderItem(item)}
                </div>
            ))}
        </>
    )
}

export default ItemList