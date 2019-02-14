import Div from "./Div";
import P from "./Paragraph";
import Img from "./Img";
import A from "./A";
import Button from "./Button";
import Nav from "./Nav";
import Li from "./Li";
import Ul from "./Ul";
import Span from "./Span";
import H5 from "./H5";

export default function (tag) {
    switch (tag) {
        case "a":
            return new A();
        case "button":
            return new Button();
        case "img":
            return new Img();
        case "h5":
            return new H5();
        case "nav":
            return new Nav();
        case "li":
            return new Li();
        case "p":
            return new P();
        case "span":
            return new Span();
        case "ul":
            return new Ul();
        default:
            return new Div();
    }
}