const rootElement = document.getElementById("root");
const reactRootElement = ReactDOM.createRoot(rootElement);
// const app = React.createElement("h1", null, "Hello World");
// reactRootElement.render(app)

const app = React.createElement(
    "ul",
    null,
    React.createElement("li", null, React.createElement("p", null, "Item 1" )),
    React.createElement("li", null, React.createElement("p", null, "Item 2")),
    React.createElement("li", null, React.createElement("p", null, "Item 3"))
);

reactRootElement.render(app);