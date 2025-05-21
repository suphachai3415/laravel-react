import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function BootstrapLayout({ children }) {
    return (
        <div>
            {/* style */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossorigin="anonymous"
            ></link>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            ></link>

            {/* navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top"
                style={{ height: "60px" }}
            >
                <div className="container d-flex justify-content-start align-items-center">
                    <a
                        className="navbar-brand fw-bold d-flex align-items-center fs-5"
                        href="#"
                    >
                        <i className="bi bi-box-seam me-2 fs-4"></i>{" "}
                        RepairService
                    </a>
                </div>
            </nav>

            {/* content */}
            <main>{children}</main>

            {/* footer */}
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">
                        © 2024 Company, Inc
                    </p>
                    <a
                        href="/"
                        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        <i
                            className="bi-bootstrap-fill"
                            style={{ fontSize: 30 }}
                        ></i>
                    </a>
                </footer>
            </div>
            {/* script */}
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossorigin="anonymous"
            ></script>
        </div>
    );
}
