import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="bg-gray-100">
            <Header />

            <main className="custom-width py-6">{children}</main>
            
            <Footer />
        </div>
    );
}

export default Layout;
