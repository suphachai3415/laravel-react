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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
                <div className="container">
                    <a
                        className="navbar-brand fw-bold d-flex align-items-center"
                        href="#"
                    >
                        <i className="bi bi-box-seam me-2"></i> RepairService
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i className="bi bi-house-door me-1"></i>{" "}
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-clipboard-check me-1"></i>{" "}
                                    Status
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-info-circle me-1"></i>{" "}
                                    About
                                </a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="ค้นหา..."
                                aria-label="Search"
                            />
                            <button className="btn btn-light" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
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
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link px-2 text-body-secondary"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link px-2 text-body-secondary"
                            >
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link px-2 text-body-secondary"
                            >
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link px-2 text-body-secondary"
                            >
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link px-2 text-body-secondary"
                            >
                                About
                            </a>
                        </li>
                    </ul>
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
