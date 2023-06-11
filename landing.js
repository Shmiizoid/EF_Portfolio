
//Click arrow function Landing page_________________________________________
const pageLink = document.getElementById("landing");
    pageLink.addEventListener('click', () => goToPage ('home.html'));

    const goToPage = (page) => {
        window.location.href = page;
    };
