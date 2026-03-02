import {FaAddressBook, FaAppStore, FaClock, FaGooglePlay, FaPhone} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa6";
import styles from '../../App.module.css';

function Footer () {
  const linksHelp = [
    {id: 'security', text: 'Безопасность', url: '/'},
    {id: 'help', text: 'Помощь', url: '/'}
  ];

  const contactsUs = [
    {id: 'phone', icon: <FaPhone size={24}/>, text: '+375(29)506-40-10', href: ''},
    {id: 'email', icon: <FaEnvelope size={24}/>, text: '5064010@mail.ru', href: ''},
    {id: 'address', icon: <FaAddressBook size={24}/>, text: 'г.Минск, ул.Гвардейская', href: ''},
    {id: 'workschedule', icon: <FaClock size={24}/>, text: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00', href: ''}
  ];

  const mobileApplication = [
    {id: 'GooglePlay', icon: <FaGooglePlay size={24}/>, text: 'Google Play', href: ''},
    {id: 'AppStore', icon: <FaAppStore size={24}/>, text: 'App Store', href: ''}
  ]
  return (
    <>

        <div className={styles.footerSection}>
          <h3>Помощь</h3>
          <div className={styles.help}>
            {linksHelp.map((item) => (
              <a key={item.id} href={item.url}>
                {item.text}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Наши контакты</h3>
          <div className={styles.contactsUs}>
            {contactsUs.map(item => (
              <a key={item.id} href={item.href}>
                {item.icon} {item.text}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Скачайте мобильное приложение</h3>
          <div className={styles.mobileApplication}>
            {mobileApplication.map(item => (
              <a key={item.id} href={item.href}>
                {item.icon} {item.text}
              </a>
            ))}
          </div>
        </div>
    </>
  )
}

export default Footer;