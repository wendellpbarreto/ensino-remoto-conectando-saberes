import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar, Nav } from "react-bootstrap";

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <Navbar bg="none" expand="lg" fixed="top" className="pt-3">
        <Container>
          <Navbar.Brand href="/">
            <img
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
              <Link href="/">
                <Nav.Link as="a" href="/" className="text-primary fw-bold mx-2">
                  Objetivos
                </Nav.Link>
              </Link>
              <Link href="/sequencia-didatica">
                <Nav.Link
                  as="a"
                  href="/sequencia-didatica"
                  className="text-primary fw-bold mx-2"
                >
                  Público Alvo
                </Nav.Link>
              </Link>
              <Link href="/ferramentas-de-checagem">
                <Nav.Link
                  as="a"
                  href="/ferramentas-de-checagem"
                  className="text-primary fw-bold mx-2"
                >
                  Conteúdo
                </Nav.Link>
              </Link>
              <Link href="/materiais-e-tutoriais">
                <Nav.Link
                  as="a"
                  href="/materiais-e-tutoriais"
                  className="text-primary fw-bold mx-2"
                >
                  Metogologia
                </Nav.Link>
              </Link>
              <Nav.Link
                as="a"
                href="/materiais-e-tutoriais"
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
