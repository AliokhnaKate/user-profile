import {Outlet} from "react-router-dom";
import SideNav from "../../sideNav/ui/SideNav";
import Header from "../../header/ui/Header";
import Footer from "../../footer/ui/Footer";
import {ThemeSwitcher} from "../../../features/themeSwitcher/ui/ThemeSwitcher";
import {useMainLayout} from "../model/useMainLayout";

function MainLayout () {
    const {loadingStates, updateLoading} = useMainLayout();

    return (
        <>
            <div>
                <Header>
                    <ThemeSwitcher />
                </Header>
                <SideNav />
                {/* Outlet используется для отображения дочерних страниц */}
                <Outlet context={{ loadingStates, updateLoading}} />
                <Footer />
            </div>
        </>
    )
}
export default MainLayout;