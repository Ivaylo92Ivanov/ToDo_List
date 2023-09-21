import "./styles.css";
import { projectsLibraryCreator } from "./to-do.js";
import { domManipulator } from "./dom-manipulation";

const projectsLibrary = projectsLibraryCreator();
domManipulator.getLibrary(projectsLibrary);
domManipulator.createPage();

