import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function BootstrapLayout({ children }) {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top" style={{ height: "60px" }}>
                <div className="container d-flex justify-content-start align-items-center">
                    <a className="navbar-brand fw-bold d-flex align-items-center fs-5" href="#">
                        <i className="bi bi-box-seam me-2 fs-4"></i> RepairService
                    </a>
                </div>
            </nav>

            {/* Page Content */}
            <main>{children}</main>

            {/* Footer */}
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <i className="bi-bootstrap-fill" style={{ fontSize: 30 }}></i>
                    </a>
                </footer>
            </div>
        </div>
    );
}
