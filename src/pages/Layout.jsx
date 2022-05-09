import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top  bg-white  ">
                    <a
                        href="/"
                        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                    >
                        <svg
                            className="bi me-2"
                            width="40"
                            height="32"
                            role="img"
                            aria-label="Bootstrap"
                        >
                            {/* <use xlink:href="#bootstrap"></use> */}
                        </svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link
                                to="/"
                                className="nav-link px-2 link-secondary"
                            >
                                Home
                            </Link>
                        </li>
                        {/* FEATURES / SERVICES */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/features"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Features / Services
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/facilityhire"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Facility Hire
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/cafe"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Cafe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/gym"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Gym
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/personaltraining"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Personal Training
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/supplements"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Supplements
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/nutrition"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Nutritious Meals
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF FEATURES / SERVICES */}

                        {/* CLASSES */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/classes"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Classes
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/timetable"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Timetable
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/classdescriptions"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Class Descriptions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/virtualclassses"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Virtual Classes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF CLASSES */}

                        {/* 8 Week Challenge */}

                        <li>
                            <Link
                                to="/challenge"
                                class="btn"
                                role="button"
                                // id="dropdownMenuLink"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                8 Week Challenge
                            </Link>
                        </li>

                        {/* END OF 8 Week Challenge */}
                        {/* Creche */}

                        <li>
                            <Link
                                to="/creche"
                                class="btn"
                                role="button"
                                // id="dropdownMenuLink"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                Creche
                            </Link>
                        </li>

                        {/* END OF Creche */}

                        {/* MEMBERSHIP */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/join"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Memberships
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/casual"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Casual
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/corporate"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Corporate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/join"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Join
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/membershipoptions"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Membership Options
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/sportsclubs"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Sports Clubs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/tacworkcover"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            TAC Workcover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/youthfitness"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Youth Fitness
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF MEMBERSHIP */}

                        {/* START OF AQUATICS */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/acquatics"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Aquatics
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/aquaaerobics"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Aqua Aerobics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/lanepoolhire"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Lane Pool Hire
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/pool"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Pool
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/spa"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Spa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/steamroom"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Steamroom
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF AQAUATS */}

                        {/* 8 Week Challenge */}

                        <li>
                            <Link
                                to="/contactus"
                                class="btn"
                                role="button"
                                // id="dropdownMenuLink"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                Contact Us
                            </Link>
                        </li>

                        {/* END OF 8 Week Challenge */}

                        {/* <li>
                            <Link
                                to="/pricing"
                                className="nav-link px-2 link-secondary"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/FAQS"
                                className="nav-link px-2 link-secondary"
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="nav-link px-2 link-secondary"
                            >
                                About
                            </Link>
                        </li> */}
                    </ul>

                    <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                        >
                            Login
                        </button>
                        <button type="button" className="btn btn-primary">
                            Sign-up
                        </button>
                    </div>
                </header>

                <footer className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-bottom  bg-white  ">
                    <a
                        href="/"
                        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                    >
                        <svg
                            className="bi me-2"
                            width="40"
                            height="32"
                            role="img"
                            aria-label="Bootstrap"
                        >
                            {/* <use xlink:href="#bootstrap"></use> */}
                        </svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link
                                to="/"
                                className="nav-link px-2 link-secondary"
                            >
                                Home
                            </Link>
                        </li>
                        {/* FEATURES / SERVICES */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/features"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Features / Services
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/facilityhire"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Facility Hire
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/cafe"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Cafe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/gym"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Gym
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/personaltraining"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Personal Training
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/supplements"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Supplements
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/nutrition"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Nutritious Meals
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF FEATURES / SERVICES */}

                        {/* CLASSES */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/classes"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Classes
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/timetable"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Timetable
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/classdescriptions"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Class Descriptions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/virtualclassses"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Virtual Classes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF CLASSES */}

                        {/* 8 Week Challenge */}

                        <li>
                            <Link
                                to="/challenge"
                                class="btn"
                                role="button"
                                // id="dropdownMenuLink"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                8 Week Challenge
                            </Link>
                        </li>

                        {/* END OF 8 Week Challenge */}
                        {/* Creche */}

                        <li>
                            <Link
                                to="/creche"
                                class="btn"
                                role="button"
                                // id="dropdownMenuLink"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                Creche
                            </Link>
                        </li>

                        {/* END OF Creche */}

                        {/* MEMBERSHIP */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/join"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Memberships
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/casual"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Casual
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/corporate"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Corporate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/join"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Join
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/membershipoptions"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Membership Options
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/sportsclubs"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Sports Clubs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/tacworkcover"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            TAC Workcover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/youthfitness"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Youth Fitness
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF MEMBERSHIP */}

                        {/* START OF AQUATICS */}
                        <li>
                            <div class="dropdown">
                                <Link
                                    to="/acquatics"
                                    class="btn dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Aquatics
                                </Link>

                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <Link
                                            to="/aquaaerobics"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Aqua Aerobics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/lanepoolhire"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Lane Pool Hire
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/pool"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Pool
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/spa"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Spa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/steamroom"
                                            className="nav-link px-2 link-secondary"
                                        >
                                            Steamroom
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* END OF AQAUATS */}

                        {/* 8 Week Challenge */}

                        <li>
                            <Link
                                to="/contactus"
                                class="btn"
                                role="button"
                                // id="dropdownMenuLink"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                Contact Us
                            </Link>
                        </li>

                        {/* END OF 8 Week Challenge */}

                        {/* <li>
                            <Link
                                to="/pricing"
                                className="nav-link px-2 link-secondary"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/FAQS"
                                className="nav-link px-2 link-secondary"
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="nav-link px-2 link-secondary"
                            >
                                About
                            </Link>
                        </li> */}
                    </ul>

                    <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                        >
                            Login
                        </button>
                        <button type="button" className="btn btn-primary">
                            Sign-up
                        </button>
                    </div>
                </footer>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
