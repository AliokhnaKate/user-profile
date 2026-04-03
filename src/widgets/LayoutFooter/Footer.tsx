import {FaAddressBook, FaAppStore, FaClock, FaGooglePlay, FaPhone} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa6";
import styles from '../../App.module.css';
import {NavLink} from "react-router-dom";

function Footer () {
  const linksHelp = [
    {id: 'security', text: 'Безопасность', path: '/securityHelp'},
    {id: 'help', text: 'Помощь', path: '/help'}
  ];

  const contactsUs = [
    {id: 'phone', icon: <FaPhone size={24}/>, text: '+375(29)506-40-10', href: `tel: +375(29)506-40-10`},
    {id: 'email', icon: <FaEnvelope size={24}/>, text: '5064010@mail.ru', href: `mailto: 5064010@mail.ru`},
    {id: 'address', icon: <FaAddressBook size={24}/>, text: 'г.Минск, ул.Гвардейская', href: 'https://maps.google.com/?q=Минск,ул.Гвардейская,д.10'},
    {id: 'workschedule', icon: <FaClock size={24}/>, text: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00'}
  ];

  const mobileApplication = [
    {id: 'GooglePlay', icon: <FaGooglePlay size={24}/>, text: 'Google Play', href: 'https://play.google.com/store/games?hl=ru'},
    {id: 'AppStore', icon: <FaAppStore size={24}/>, text: 'App Store', href: 'https://www.apple.com/app-store/'}
  ]
  return (
    <>

        <div className={styles.footerSection}>
          <h3>Помощь</h3>
          <div className={styles.help}>
            {linksHelp.map((item) => (
              <NavLink key={item.id} to={item.path} target="_blank">
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Наши контакты</h3>
          <div className={styles.contactsUs}>
            {contactsUs.map((contact) => (
              <div key={contact.id} className={styles.contactItem}>
                  {contact.icon}

                  {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                          {contact.text}
                      </a>
                  ) : (
                      <span>{contact.text}</span>
                  )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Скачайте мобильное приложение</h3>
          <div className={styles.mobileApplication}>
            {mobileApplication.map(item => (
              <a key={item.id} href={item.href} target="_blank">
                {item.icon} {item.text}
              </a>
            ))}
          </div>
        </div>
    </>
  )
}

export default Footer;