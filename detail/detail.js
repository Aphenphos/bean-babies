import { getBean } from '../services/bean-service.js';
import createBeanieDetails from '../components/BeanDetail.js';

let beanie;

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) window.location = '/';

    beanie = await getBean(id);
    if (!beanie) window.location = '/';

    display();
}

const BeanDetail = createBeanieDetails(document.querySelector('#bean-container'));

function display() {
    BeanDetail({ beanie });
}

handlePageLoad();