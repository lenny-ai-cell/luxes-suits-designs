import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <section className="row bg-success p-4">
                <div className="col-md-4">
                    <h4 className="text-light text-center">About Us</h4>
                    <p className="text-light">Luxes Suits is a premium brand known for its exquisite craftsmanship and luxurious suit designs.</p>
                    <p className="text-light">Our headquarters is located in the heart of the fashion district, offering bespoke suit designs to match your elegance and style.</p>
                    <p className="text-light">Please note that our suits are crafted from the finest materials and are available at premium prices.</p>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center text-light">Contact Us</h4>
                    <form action="">
                        <input type="email" placeholder="Enter your email" className="form-control" /><br />
                        <textarea placeholder="Leave a comment" rows="7" className="form-control" id="comment"></textarea>
                        <br />
                        <input type="submit" value="Send Message" className="btn btn-outline-warning" />
                    </form>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center text-light">Stay Connected</h4><br />
                    <div className="social-links text-center">
                        <Link to="https://facebook.com">
                        <img src="images/facebook.png" alt="" width="50px" />
                        </Link>

                        <Link to="https://instagram.com">
                        <img src="images/instagram.jpeg" alt="" width="50px" />
                        </Link>

                        <Link to="https://wa.me/+254729336429">
                        <img src="images/whatapp.png" alt="" width="50px" />
                        </Link>
                        <br />
                        <p className="text-light">Discover our luxury suit collections, made to elevate your style. Whether you're looking for bespoke suits or our signature ready-to-wear collection, we have designs to suit your taste and preference.</p>
              
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white text-center p-2">
                <h5>Developed by L.tycoon &copy; 2025. All rights reserved</h5>
            </footer>
        </div>
    );
};

export default Footer;
