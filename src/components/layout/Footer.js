import React from "react";

function Footer(){
    return(
        <footer className="text-center mt-auto">
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center text-dark p-3">
                © 2019~2023 Copyright:
                <a className="text-dark" href="https://www.qztap.com/">QzTap Inc.,</a>
            </div>
        </footer>
    );
}

export default Footer;