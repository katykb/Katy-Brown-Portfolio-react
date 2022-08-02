import React from "react";
import imsImage from "../../src/assets/imsImage.jpg";
import weatherImage from "../../src/assets/weatherApp.jpg";
import foodImage from "../../src/assets/Food Dictionary Landing.png";
import jateImage from "../../src/assets/jateImage.jpg";
import employeeTracker from "../../src/assets/employeeTracker.jpg";
import workDayPlanner from "../../src/assets/workDayPlanner.jpg";
import Container from "react-bootstrap/Container";
import "../../src/App.css";
import "../../src/Images.css";
import Card from "react-bootstrap/Card";

const Portfolio = () => {
  const cardDetails = [
    {
      image: imsImage,
      title: "Inventory Management System",
      text: "Tech used: JavaScript, Handlebars, HTML, CSS, Express, Node, APIs",
      URL: "https://recordshopprojecttwo-app.herokuapp.com/login",
      GitHub: "https://github.com/katykb/InventoryManagementSystem",
    },
    {
      image: weatherImage,
      title: "Weather Application",
      text: "Tech used: JavaScript, HTML, Materialize, CSS",
      URL: "https://katykb.github.io/Weather-Dashboard/",
      GitHub: "https://github.com/katykb/Weather-Dashboard",
    },
    {
      image: foodImage,
      title: "Food Dictionary",
      text: "Tech used: JavaScript, HTML, CSS, third-party API, Materialize",
      URL: "https://katykb.github.io/FoodDictionary/",
      GitHub: "https://github.com/katykb/FoodDictionary",
    },
    {
      image: jateImage,
      title: "Text Editor",
      text: "Tech used: JavaScript, IndexedDB API, Heroku, JavsScript, webpack, express",
      URL: "https://katybrown-jate-app.herokuapp.com/",
      GitHub: "https://github.com/katykb/Text-Editor",
    },
    {
      image: employeeTracker,
      title: "Employee Tracker",
      text: "Tech used: JavaScript, Node.js, HTML, CSS. Only GitHub available. This was not deployed.",
      URL: "",
      GitHub: "https://github.com/katykb/Department-Contact-Page",
    },
    {
      image: workDayPlanner,
      title: "5-day Work Planner",
      text: "Tech used: HTML, CSS, JavaScript, jQuery, Bootstrap, Moment JS, Font Awesome",
      URL: "https://katykb.github.io/MyDailyPlanner/",
      GitHub: "https://github.com/katykb/MyDailyPlanner",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Container>
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={card.URL}>URL</Card.Link>
            <Card.Link href={card.GitHub}>GitHub</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    );
  };

  return (
    <div className="grid page-container">
      {cardDetails.map(renderCard)}
      {/* <div className="content-wrap"> */}
        {/* <div className="box-display"></div> */}
      </div>
    // </div>
  );
};

export default Portfolio;
