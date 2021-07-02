import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar, Nav } from "react-bootstrap";

const PageHeader = ({ onShowInitModal }) => {
  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top" className="py-2">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/logo.png"
              width="56"
              height="56"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto">
            <i className="fal fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Link href="#publico-alvo" passHref>
                <Nav.Link as="a" className="text-primary fw-bold mx-2">
                  Público Alvo
                </Nav.Link>
              </Link>
              <Link href="#objetivos" passHref>
                <Nav.Link as="a" className="text-primary fw-bold mx-2">
                  Objetivos
                </Nav.Link>
              </Link>
              <Link href="#conteudo" passHref>
                <Nav.Link as="a" className="text-primary fw-bold mx-2">
                  Conteúdo
                </Nav.Link>
              </Link>
              <Link href="#metodologia" passHref>
                <Nav.Link as="a" className="text-primary fw-bold mx-2">
                  Metogologia
                </Nav.Link>
              </Link>
              <Nav.Link
                as="button"
                onClick={onShowInitModal}
                className="btn btn-primary text-white py-1 px-3 ml-4"
              >
                Começar!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*
      <header className="page-header">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1 className="page-title font-weight-bold text-center">{title}</h1>
          {subtitle && (
            <h4 className="page-subtitle text-center">{subtitle}</h4>
          )}
        </div>
      </header> */}
    </>
  );
};

export default PageHeader;
