const faqTitle = document.getElementsByClassName('main__faq-title');
const faqGroup = document.getElementsByClassName('main__faq-group');
const faqText = document.getElementsByClassName('main__faq-text');
const faqArrow = document.getElementsByClassName('main__arrow')

for(let i = 0; i < faqGroup.length; i++) {
    faqGroup[i].addEventListener('click', function () {
        if (faqText[i].style.display === 'block') {
            faqText[i].style.display = 'none';
            faqTitle[i].style.fontWeight = '400';
            
        } else {
            faqText[i].style.display = 'block';
            faqTitle[i].style.fontWeight = '700';
            faqArrow[i].style.transform = 'rotate(180deg)';
        }
    })
}