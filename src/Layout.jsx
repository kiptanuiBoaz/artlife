import { Outlet } from 'react-router-dom';
import Footer from "./components/footer/Footer";

export const Layout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}