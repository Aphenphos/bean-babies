// import services and utilities
import { getBeans } from './services/bean-service.js';
// import component creators
import createBeanCard from './components/BeanList.js';
// declare state variables
let beanies = [];
// write handler functions

async function handlePageLoad() {
    beanies = await getBeans();
    display();
}

// Create each component: 
// - pass in the root element via querySelector
const BeanList = createBeanCard(document.querySelector('#beanbaby-list'));
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
function display() {
    BeanList({ beanies });
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
handlePageLoad();
