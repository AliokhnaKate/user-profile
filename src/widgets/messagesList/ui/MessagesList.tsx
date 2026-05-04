import {useEffect, useState} from "react";
import MessageCard from "../../../entities/message/ui/MessageCard";

export interface MessageProps {
    userSelected: string | null,
    userSelectedId: number | null,
    name: string | null,
    id: number | null,
    text: string | null
}

//отображение списка сообщений
function MessagesList() {
    const [messages, setMessages] = useState<MessageProps[]>([]);

    useEffect(() => {
        const cashedMesseges = localStorage.getItem('messages');
        if (cashedMesseges) {
            setMessages(JSON.parse(cashedMesseges));
        }
    }, []);

    return (
        <>
            <div>
                {messages.map((mes: MessageProps) => (
                    <div key={mes.id}>
                        {/* <MessageCard {...mes}/> эквивалентно <MessageCard userSelected={mes.userSelected} userSelectedId={mes.userSelectedId} и тд. А, получает пропс MessageCard в параметрах (mes: MessageProps) /> */}
                        <MessageCard {...mes}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MessagesList;