import {render, screen} from "@testing-library/react";
import App from "./App";
const {ControlWithButtons} = require("./components/ControlWithButtons/ControlWithButtons");

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText()
})