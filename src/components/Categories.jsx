import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../css/Categories.css';

const Categories = () => {
  return (
    <Container fluid={true}>
      <div className="categoriesList-title">
        <span className="categorie-title-main">Categories</span>
      </div>
      <div className="categorie-love">
        <span>Recipes made with love</span>
      </div>
      <Row xs="2" sm="3" md="4">
        <Col className="container-image">
          <Link to="/list-categories/breakfast" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/1543774956.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Breakfast</p>
            </div>
          </Link>
        </Col>
        <Col className="container-image">
          <Link to="/list-categories/starter" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/tvvxpv1511191952.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Starter</p>
            </div>
          </Link>
        </Col>
        <Col className="container-image">
          <Link to="/list-categories/maindish" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/wspuvp1511303478.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Main dish</p>
            </div>
          </Link>
        </Col>
        <Col className="container-image">
          <Link to="/list-categories/dessert" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/sywswr1511383814.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Dessert</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
