import EmojiPicker, {Categories, EmojiStyle, SuggestionMode, type EmojiClickData} from "emoji-picker-react";
import UsePortal from "./UsePortal";
import {useEffect, useRef, useState, type ChangeEvent, type FormEvent, type SyntheticEvent} from "react";
import {BsEmojiSmile} from "react-icons/bs";

interface WriteMessageModalProps {
    userSelected: string | null;  // Явно указываем тип
    userId: number | null;
    onClose: () => void;
}

interface MessageUserProps {
    userSelected: string | null,
    userSelectedId: number | null,
    name: string | null,
    id: number | null | undefined,
    text: string |null
}

function WriteMessageModal({userSelected, userId, onClose} : WriteMessageModalProps) {
    const Portal = UsePortal('portal-root');

    const [name, setName] = useState('');
    //comment - хранит текст, который пользователь ввел в textarea
    const [message, setMessage] = useState('');

    //showPicker - управляет видимостью панели с эмодзи
    const [showPicker, setShowPicker] = useState(false);
    const [posName, setPosName] = useState<number | null>(null);
    const [posMessage, setPosMessage] = useState<number | null>(null);

    const [messages, setMessages] = useState<MessageUserProps[]>([])

    const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const cursorPosRef = useRef<number>(0);

    //обработчик ввода имени
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e) return;
        const pos=e.target.selectionStart;
        setPosName(pos);
        setName(e.target.value);
        
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(pos, pos)
        }, 0)
    }

    // //Обработчик ввода текста
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //Сохраняем позицию курсора. e.target - это DOM-элемент, не React-компонент
        //selectionStart - число, показывающее, где сейчас стоит курсор
        cursorPosRef.current=e.target.selectionStart
        setMessage(e.target.value);

        // Планируем восстановление курсора после того как отререндерится компонент. 
        setTimeout(() => {
            textareaRef.current?.focus();
            textareaRef.current?.setSelectionRange(cursorPosRef.current, cursorPosRef.current)
        }, 0);
    }

    const updateCursorPos = () => {
        // textareaRef.current?.focus();
        setTimeout(() => {
            cursorPosRef.current = textareaRef.current?.selectionStart ?? 0;
        }, 0)
        
    }

    const handleClick  = (e: React.MouseEvent<HTMLTextAreaElement>) => {
        updateCursorPos();
    }

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        //Получаем ссылку на реальный DOM-элемент
        const textarea = textareaRef.current;

        if (!textarea) return;

        //Узнаем, где стоит курсор
        updateCursorPos()
        
        const textBeforeEmoji = textarea.value.slice(0, cursorPosRef.current) + emojiData.emoji;
        const textafterEmoji = textBeforeEmoji + textarea.value.slice(cursorPosRef.current, textarea.value.length);
        setMessage(textafterEmoji);

        const newPosCursor = cursorPosRef.current;

        setTimeout(()=> {
            textareaRef.current?.focus();
            const newPos = newPosCursor + emojiData.emoji.length;
            textareaRef.current?.setSelectionRange(newPos, newPos)
        }, 0);

        //Закрываем панель эмодзи
        setShowPicker(false)
    }

    const handleSubmit = ((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // ВАЖНО: предотвращаем перезагрузку страницы

        const cashedMesseges = localStorage.getItem('messages');
        if (cashedMesseges) {
            setMessages(JSON.parse(cashedMesseges))
        };

        const messageUser: MessageUserProps = {
            userSelected: userSelected,
            userSelectedId: userId,
            name: name,
            id: messages.length+1,
            text: message
        }
        //(prev) => { ... } - функция, которая получает предыдущее состояние
        setMessages(prev => {
            // Создаем новый массив на основе предыдущего
            const updated = [...prev, messageUser];
            
            // Синхронизируем с localStorage
            localStorage.setItem('messages', JSON.stringify(updated));
            
            return updated; // Возвращаем новый массив
        });
        
        setName('');
        setMessage('');
    })

    return (
        <>
            <Portal onClose={onClose}>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <Portal.Header onClose={onClose}>
                        <h3>кому: {userSelected}</h3>
                        <input
                            ref={inputRef}
                            type='text'
                            value={name}
                            onChange={handleNameChange}
                            placeholder="введите свое имя" />
                    </Portal.Header>

                    <Portal.Body>
                        <textarea 
                            ref={textareaRef}
                            value={message}
                            onChange={handleChange}
                            onClick={handleClick}
                            placeholder="Введите текст" />
                        <button style={{border: 'none', background: '#fff', position: "absolute", right: '25px', top: '80px'}}>                            
                            <BsEmojiSmile
                                size={14}
                                onClick={()  => setShowPicker(!showPicker)}/>
                        </button>

                        {showPicker && (
                            <div style={{position: "absolute"}}>
                                <EmojiPicker
                                    searchDisabled={true}
                                    skinTonesDisabled={true}
                                    emojiStyle={EmojiStyle.NATIVE}
                                    previewConfig={{showPreview: false}}
                                    autoFocusSearch={false}
                                    lazyLoadEmojis={true}
                                    suggestedEmojisMode={SuggestionMode.RECENT}
                                    categories={[
                                        {
                                            name: 'Smileys',
                                            category: Categories.SMILEYS_PEOPLE
                                        }
                                    ]}
                                    onEmojiClick={(emojiData) => {
                                            handleEmojiClick(emojiData);
                                            setShowPicker(false);
                                        }
                                    }
                                />
                            </div>
                    )}
                    </Portal.Body>

                    <Portal.Footer>
                        <button type="submit">Отправить</button>
                    </Portal.Footer>
                </form>
            </Portal>

        </>
    )
}

export default WriteMessageModal;