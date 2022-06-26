// import services and utilities
import { getBeans } from './services/bean-service.js';
import createBeanCard from './components/BeanList.js';
import createPaging from './components/Paging.js';
import createFilter from './components/Filter.js';

let title = '';
let theme = '';
let releaseYear = 0;
let beanies = [];

let page = 1;
let pageSize = 10;
let totalPages = 0;

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    title = params.get('title') || '';
    theme = params.get('theme') || '';
    releaseYear = params.get('releaseYear') || 0;

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

function handleFilter(title, theme, releaseYear) {
    const params = new URLSearchParams(window.location.search);
    params.set('title', title);
    params.set('theme', theme);
    params.set('releaseYear', releaseYear);

    params.set('page', 1);

    window.location.search = params.toString();
}


const Filter = createFilter(document.querySelector('#filter'), { handleFilter });
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });
const BeanList = createBeanCard(document.querySelector('#beanbaby-list'));



function display() {
    Filter({ title, theme, releaseYear });
    Paging({ page, pageSize, totalPages });
    BeanList({ beanies });
}

handlePageLoad();
