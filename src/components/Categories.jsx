import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Categories.css';

const Categories = () => {
  return (
    <Container fluid={true}>
      <div className="categoriesList-title">
        <span className="categorie-title">Categories</span>
      </div>
      <div className="categorie-love">
        <span>Recipes made with love</span>
      </div>
      <Row xs="2" sm="3" md="4">
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/vvpprx1487325699.jpg"
            alt=""
          />
          <div className="text">
            <p>Beef</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/1543774956.jpg"
            alt=""
          />
          <div className="text">
            <p>Breakfast</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg"
            alt=""
          />
          <div className="text">
            <p>Chicken</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/sywswr1511383814.jpg"
            alt=""
          />
          <div className="text">
            <p>Dessert</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/vussxq1511882648.jpg"
            alt=""
          />
          <div className="text">
            <p>Goat</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/sxrpws1511555907.jpg"
            alt=""
          />
          <div className="text">
            <p>Lamb</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/wvpvsu1511786158.jpg"
            alt=""
          />
          <div className="text">
            <p>Miscellaneous</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/usywpp1511189717.jpg"
            alt=""
          />
          <div className="text">
            <p>Pasta</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/1525876468.jpg"
            alt=""
          />
          <div className="text">
            <p>Pork</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg"
            alt=""
          />
          <div className="text">
            <p>Seafood</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/xxtsvx1511814083.jpg"
            alt=""
          />
          <div className="text">
            <p>Side</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/tvvxpv1511191952.jpg"
            alt=""
          />
          <div className="text">
            <p>Starter</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/rvxxuy1468312893.jpg"
            alt=""
          />
          <div className="text">
            <p>Vegan</p>
          </div>
        </Col>
        <Col>
          <img
            className="categorie-image"
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/wrustq1511475474.jpg"
            alt=""
          />
          <div className="text">
            <p>Vegetarian</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
