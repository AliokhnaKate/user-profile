import {FaAddressBook, FaAppStore, FaClock, FaGooglePlay, FaPhone} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa6";
import type {ItemLink} from "../../../shared/ui/links/types";

export const LINKS_HELP: ItemLink[] = [
    {id: 'security', text: 'Безопасность', path: '/securityHelp'},
    {id: 'help', text: 'Помощь', path: '/help'}
];

export const CONTACTS_US: ItemLink[] = [
    {id: 'phone', icon: <FaPhone size={24}/>, text: '+375(29)506-40-10', path: `tel: +375(29)506-40-10`},
    {id: 'email', icon: <FaEnvelope size={24}/>, text: '5064010@mail.ru', path: `mailto: 5064010@mail.ru`},
    {id: 'address', icon: <FaAddressBook size={24}/>, text: 'г.Минск, ул.Гвардейская', path: 'https://maps.google.com/?q=Минск,ул.Гвардейская,д.10'},
    {id: 'workschedule', icon: <FaClock size={24} />, text: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00', path: '#'}
];

export const MOBILE_APPLICATION: ItemLink[] = [
    {id: 'GooglePlay', icon: <FaGooglePlay size={24}/>, text: 'Google Play', path: 'https://play.google.com/store/games?hl=ru'},
    {id: 'AppStore', icon: <FaAppStore size={24}/>, text: 'App Store', path: 'https://www.apple.com/app-store/'}
];