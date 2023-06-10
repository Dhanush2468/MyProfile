import { Col } from "react-bootstrap";

export const ProjectCard = ({ title1, description, imgUrl,description3 ,title3,title2,description2}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title1}</h4>
          <a
            href="https://drinksmart.netlify.app"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            {description}
          </a>
        </div>
        <div className="proj-txtx">
        <h4>{title2}</h4>
          <a
            href="https://bookfinder2.netlify.app"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            {description2}
          </a>
        </div>
        <div className="proj-txtx">
        <h4>{title3}</h4>
          <a
            href="https://ours-sound-cloud.netlify.app"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "text-decoration 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            {description3}
          </a>
        </div>
        <div className="prolinks"></div>
      </div>
    </Col>
  );
};
