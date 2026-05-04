import styles from './Footer.module.css';
import {CONTACTS_US, LINKS_HELP, MOBILE_APPLICATION} from "../lib/footerItems";
import Links from "../../../shared/ui/links/Links";

function Footer () {

  return (
    <>

        <div className={styles.footerSection}>
          <h3>Помощь</h3>
          <div className={styles.help}>
              <Links
                items={LINKS_HELP}
                variant='horizontal'
              />
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Наши контакты</h3>
          <div className={styles.contactsUs}>
            {CONTACTS_US.map((contact) => (
              <div key={contact.id} className={styles.contactItem}>
                  {contact.icon}

                  {contact.path ? (
                      <a href={contact.path} target="_blank" rel="noopener noreferrer">
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
            <Links items={MOBILE_APPLICATION} variant='horizontal' />
          </div>
        </div>
    </>
  )
}

export default Footer;