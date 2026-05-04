import type {MessageProps} from "../../../widgets/messagesList/ui/MessagesList";

function MessageCard(mes: MessageProps) {

    return(
        <>
            <div>
                <h3>от кого: {mes.name}</h3>
                <h3>кому: {mes.userSelected}</h3>
                <p>сообщение: {mes.text}</p>
            </div>
        </>
    )
}

export default MessageCard;