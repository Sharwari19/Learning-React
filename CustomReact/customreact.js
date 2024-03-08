
function customRender(reactElememt, container)
{
    /*
    const domElement = document.createElement(reactElememt.type);
    domElement.innerHTML = reactElememt.children;
    domElement.setAttribute('href', reactElememt.props.href)
    domElement.setAttribute('target', reactElememt.props.target);

    container.appendChild(domElement);

    */

   const domElement=  document.createElement(reactElememt.type);
   domElement.innerHTML = reactElememt.children;

   for (const prop in reactElememt.props)
   {
        if(prop === 'children')
            continue;
        domElement.setAttribute(prop, reactElememt.props[prop]);
   }

   container.appendChild(domElement);


}



const reactElememt = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target:'_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElememt, mainContainer)