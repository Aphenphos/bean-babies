export default function createBeanieDetails(root) {
    const title = root.querySelector('#title');
    const subTheme = root.querySelector('#sub-theme');
    const img = root.querySelector('img');
    const link = root.querySelector('a');
    const astro = root.querySelector('#sign');
    const color = root.querySelector('#color');
    const swingTag = root.querySelector('#swingtag');
    const tushTag = root.querySelector('#tushtag');
    const bday = root.querySelector('#bday');
    const releaseDate = root.querySelector('#release-date');

    return ({ beanie }) => {
        title.textContent = `Name: ${beanie.title}`;
        subTheme.textContent = beanie.subtheme;
        img.src = beanie.image;
        link.href = beanie.link;
        astro.textContent = `Astrology Sign ${beanie.astroSign}`;
        color.textContent = beanie.color;
        swingTag.textContent = `Swing Tag ${beanie.swingTagGeneration}`;
        tushTag.textContent = `Tush Tag ${beanie.tushTagGeneration}`;
        bday.textContent = `Birthday :${beanie.birthday}`;
        releaseDate.textContent = `Release Date :${beanie.releaseDate}`;
    };

}