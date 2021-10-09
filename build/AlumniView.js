import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
function List(props) {
  const listItems = props.items.map((item) => /* @__PURE__ */ React.createElement(ListItem, {
    item
  }));
  return /* @__PURE__ */ React.createElement("ul", {
    class: "list-group"
  }, listItems);
}
function ListItem(props) {
  let jsonItems = [];
  const json = props.item;
  Object.keys(json).forEach((element) => {
    let temp = /* @__PURE__ */ React.createElement("h4", null, element, ": ", json[element]);
    jsonItems.push(temp);
  });
  return /* @__PURE__ */ React.createElement("li", {
    class: "list-group-item"
  }, jsonItems);
}
function Card(props) {
  console.log(props.items);
  const cardItems = props.items.map((item) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    class: "p-2 col-sm-12 col-md-6 col-lg-3"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "card"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "card-body"
  }, /* @__PURE__ */ React.createElement(CardItem, {
    item
  }))))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    class: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "row g-2"
  }, cardItems)));
}
function CardItem(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Image, {
    image: "profile.jpg"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement(FullName, {
    firstName: props.item.firstname,
    lastName: props.item.lastname
  }), /* @__PURE__ */ React.createElement(Major, {
    mayor: "Computer Science"
  }), /* @__PURE__ */ React.createElement(AboutMe, {
    aboutMe: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }), /* @__PURE__ */ React.createElement(GPA, {
    gpa: "3.4"
  }), /* @__PURE__ */ React.createElement(Resume, {
    resume: "functionalsample.pdf"
  })));
}
function FullName(props) {
  return /* @__PURE__ */ React.createElement("h5", {
    className: "card-title"
  }, props.firstName, " ", props.lastName);
}
function Major(props) {
  return /* @__PURE__ */ React.createElement("h6", {
    className: "card-subtitle mb-2 text-muted"
  }, props.mayor);
}
function GPA(props) {
  return /* @__PURE__ */ React.createElement("h6", {
    className: "card-subtitle mb-2 text-muted right"
  }, "   GPA:", props.gpa);
}
function Image(props) {
  return /* @__PURE__ */ React.createElement("img", {
    className: "card-img-top",
    src: props.image,
    alt: "Card image cap"
  });
}
function AboutMe(props) {
  return /* @__PURE__ */ React.createElement("p", {
    className: "card-text text-justify"
  }, props.aboutMe);
}
function Resume(props) {
  return /* @__PURE__ */ React.createElement("a", {
    href: "functionalsample.pdf",
    download: true
  }, /* @__PURE__ */ React.createElement("img", {
    src: "downloadIcon.png",
    alt: "Resume",
    width: "50",
    height: "50"
  }), "Resume");
}
export {List, Card, FullName, Major, GPA, Image, AboutMe, Resume};
