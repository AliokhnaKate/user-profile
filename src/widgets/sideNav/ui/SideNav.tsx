import styles from './SideNav.module.css';
import {SIDE_NAV_ITEMS} from '../lib/navItems';
import Links from '../../../shared/ui/links/Links';

function SideNav() {

  return (
    <>
      <aside>
          <Links 
            items={SIDE_NAV_ITEMS}
            variant='vertical' />
      </aside>
    </>
  )
}

export default SideNav;