import Menu from './Menu'
import Top from './Top'

export default function Header () {
  return (
    <header
      id="header"
      data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 54, 'stickySetTop': '-54px', 'stickyChangeLogo': false}"
    >
      <div className="header-body header-body-bottom-border-fixed box-shadow-none border-top-0">
        <Top/>
        <Menu/>
      </div>
    </header>

  )
};
