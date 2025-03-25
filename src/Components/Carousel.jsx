import { Link } from "react-router-dom";

const Carousel = () => {
    return ( 
        <div classNameName="">
            <section className="row">
            <div className="col-md-12">
                <div className="carousel slide" id="myCarousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src="images/unnamed.jpg" alt="" className="d-block w-100"/>
                        </div>

                        <div className="carousel-item">
                            <img src="images/good.webp" alt="" className="d-block w-100"/>
                        </div>

                        <div className="carousel-item">
                            <img src="images/indybest best mens suits.avif" alt="" className="d-block w-100"/>
                            <div className="carousel-caption">
                                
                                
                            </div>
                        </div>
                        
                    </div>

                    <Link to="#myCarousel" className="carousel-control-prev" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </Link>

                    <Link to="#myCarousel" className="carousel-control-next" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </Link>
                    <ol className="carousel-indicators">
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </div>
           </section>
        </div>
     );
}
 
export default Carousel;