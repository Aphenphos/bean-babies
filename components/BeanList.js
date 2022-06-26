export default function createBeanCard(root) {

    return ({ beanies }) => {
        root.innerHTML = '';

        for (const beanie of beanies) {
            const card = BeanCard({ beanie });
            root.append(card);
        }
    };

}

export function BeanCard({ beanie }) {
    const li = document.createElement('li');
    li.classList.add('card');

    const a = document.createElement('a');
    a.href = `detail/?id=${beanie.id}`;

    const img = document.createElement('img');
    img.alt = beanie.title;
    img.src = beanie.image;
    img.classList.add('bean-img');

    const h1 = document.createElement('h1');
    h1.textContent = beanie.title;
    h1.classList.add('bean-title');
    
    const h2 = document.createElement('h2');
    h2.textContent = beanie.theme;
    h2.classList.add('bean-theme');

    const h3 = document.createElement('h3');
    h3.textContent = beanie.releaseYear;
    h3.classList.add('bean-release-year');
    

    a.append(img, h1, h2, h3);
    li.append(a);
    return li;
}
