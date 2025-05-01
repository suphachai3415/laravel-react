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
            <div className="container">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            {/* content */}
            <main>{children}</main>

            {/* footer */}
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">
                        © 2024 Company, Suphachai
                    </p>
                    <a
                        href="/"
                        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        <i
                            class="bi-bootstrap-fill"
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