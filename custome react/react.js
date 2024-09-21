function customeRender(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.content
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.content;
  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  content: "click here to visit google!",
};

customeRender(reactElement, mainContainer);
