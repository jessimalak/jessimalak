import React from "react";
import "./App.css";
import { Routes, Route, Outlet, NavLink, Navigate } from "react-router-dom";
import IndexScreen from "./screens/Index";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "./components/Icon";
import ProjectScreen from "./screens/Project";
import ProjectsScreen from "./screens/Projects";

function Layout() {
  return (
    <>
      <Navbar>
        <Container fluid>
          <Nav className='nav-items'>
            <Nav.Item>
              <NavLink to="/">
                <Icon name="home-outline" /> Inicio
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="projects">
                <Icon name="git-branch-outline" /> Proyectos
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexScreen />} />
        <Route path="projects" element={<ProjectsScreen />} />
        <Route path="projects/:name" element={<ProjectScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
