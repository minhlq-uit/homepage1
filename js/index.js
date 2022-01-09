// go to top
btnToTop = document.getElementById('go-top');

window.onscroll = () => {
    let vh = window.scrollY;
    if(vh > 150 ) {
        btnToTop.style.display = 'block';
    }
    else {
        btnToTop.style.display = 'none';
    }
}