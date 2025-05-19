import Marquee from "react-fast-marquee";
import "./MarqueHeader.css"

function MarqueHeader(){
    return(
        <>
        <Marquee className="marquee-header" speed={60} gradient={false} style={{ background:"black",color: "white",fontWeight: "bold",height: "4vh"}}>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        <div className="marquee-text">ELEGANT-EBENE X SPECIAL OFFER!</div><div className="marquee-star">★</div>
        </Marquee>
        </>
    )
}

export default MarqueHeader

