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
        <Col>
          <Link to="/list-categories/beef" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/vvpprx1487325699.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Beef</p>
            </div>
          </Link>
        </Col>
        <Col>
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
        <Col>
          <Link to="/list-categories/chicken" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Chicken</p>
            </div>
          </Link>
        </Col>
        <Col>
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
        <Col>
          <Link to="/list-categories/goat" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/vussxq1511882648.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Goat</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/lamb" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/sxrpws1511555907.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Lamb</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/miscellaneous" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/wvpvsu1511786158.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Miscellaneous</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/pasta" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/usywpp1511189717.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Pasta</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/dessert" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/1525876468.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Pork</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/seafood" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Seafood</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/side" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/xxtsvx1511814083.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Side</p>
            </div>
          </Link>
        </Col>
        <Col>
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
        <Col>
          <Link to="/list-categories/vegan" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/rvxxuy1468312893.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Vegan</p>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/list-categories/vegetarian" className="categories-link">
            <img
              className="categorie-image"
              src="https:\/\/www.themealdb.com\/images\/media\/meals\/wrustq1511475474.jpg"
              alt=""
            />
            <div className="text">
              <p className="title-categorie">Vegetarian</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
