const vacancies = document.querySelectorAll('.vacancy');
const popupClose = document.querySelector('.popup__close');
const popupWindow = document.querySelector('.popup__window');
const vacanciesFilterArrow = document.querySelector('.vacancies__filter-arrow');
const filterForm = document.querySelector('.filter__form');
const html = document.querySelector('html');


vacancies.forEach(vacancy => {
    vacancy.addEventListener('click', function() {
        popupWindow.classList.remove('hide');
        popupWindow.classList.add('show');
    })

    vacancy.addEventListener('keypress', function(event) {
        if (event.code === 'Enter') {
            popupWindow.classList.remove('hide');
            popupWindow.classList.add('show');
        }
    })
});

popupClose.addEventListener('click', function() {
    popupWindow.classList.remove('show');
    popupWindow.classList.add('hide');
})

window.addEventListener('resize', function() {
    let widthScreen = document.querySelector('body').offsetWidth;
    let filterFormClasses = filterForm.classList;
    if (widthScreen < 925) {
        vacanciesFilterArrow.addEventListener('click', function() {
            if (!filterFormClasses.contains('show__flex')) {
                filterFormClasses.remove('hide');
                filterFormClasses.add('show__flex');
            } else {
                filterFormClasses.remove('show__flex');
                filterFormClasses.add('hide');
            }
        })
    } else {
        filterFormClasses.add('show__flex');
    }
});



