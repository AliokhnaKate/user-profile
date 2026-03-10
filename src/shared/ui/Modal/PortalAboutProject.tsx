import {useRef, type PropsWithChildren, type ReactNode} from "react";
import {createPortal} from "react-dom";
import styles from '../../../App.module.css';

function UsePortal (id: string = 'portal-root') {

  const getContainer = () => {
    let container = document.getElementById(id);
    if (!container) {
      container = document.createElement('div');
      container.id = id;
      document.body.appendChild(container);
    }
    return container as HTMLDivElement;
  };

  // Используем ref, но инициализируем сразу
  const rootRef = useRef<HTMLDivElement>(getContainer());

  // Типизируем пропсы компонента Portal
  interface PortalProps {
    onClose: () => void;
    children: ReactNode;
  }

  //Создание компонента Portal
  const Portal = ({onClose, children}:  PropsWithChildren<PortalProps>) => {

    //rootRef.current - весь div в компоненте App, обернутый в Portal
    return rootRef.current ? createPortal(
      <div className={styles.modal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalContent__closeButton} onClick={onClose} aria-label="Закрыть">
                <span></span>
                <span></span>
            </button>
            {children}
          </div>
      </div>
      , rootRef.current
      ) : null;
  }

  Portal.Header = ({children, onClose}: {children: ReactNode; onClose?: () => void }) => {
                  return (
                    <div className={styles.header}>
                        <button className={styles.header__closeButton}
                                onClick={onClose}
                                aria-label="Закрыть">
                          <span></span>
                          <span></span>
                        </button>
                      <div className={styles.headerContent}>{children}</div>
                    </div>
                  )
  }

  Portal.Body = ({children}: {children: ReactNode}) => {
    return (
      <div className={styles.bodyContent}>{children}</div>
    )
  }

  Portal.Footer = ({children}: {children: ReactNode}) => {
    return (
      <div className={styles.footerContent}>{children}</div>
    )
  }

  return Portal;
}

export default UsePortal;