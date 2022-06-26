// import services and utilities
import { getBeans } from './services/bean-service.js';
import createBeanCard from './components/BeanList.js';
import createPaging from './components/Paging.js';

let title = '';
let theme = '';
let releaseYear = '';
let beanies = [];

let page = 1;
let pageSize = 10;
let totalPages = 0;
// write handler functions

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    title = params.get('title') || '';
    theme = params.get('theme') || '';
    releaseYear = params.get('releaseYear') || '';

    const pageParam = params.get('page');
    page = pageParam ? Number(pageParam) : 1;
    const pageSizeParam = params.get('pageSize');
    pageSize = pageSizeParam ? Number(pageSizeParam) : 10;

    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;

    const { data, count } = await getBeans(title, theme, releaseYear, { start, end });

    beanies = data;

    totalPages = Math.ceil(count / pageSize);


    display();
}

function handlePaging(change, pageSize) {
    const params = new URLSearchParams(window.location.search);

    page = Math.max(1, page + change);
    params.set('page', page);
    params.set('pageSize', Number(pageSize));
    window.location.search = params.toString();
}

const BeanList = createBeanCard(document.querySelector('#beanbaby-list'));
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });



function display() {
    BeanList({ beanies });
    Paging({ page, pageSize, totalPages });
}

handlePageLoad();
