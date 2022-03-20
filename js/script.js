

const ratingItemsList = document.querySelectorAll('.stars__1');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

 ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
const { itemValue } = item.dataset;
item.parentNode.dataset.totalValue = itemValue;

// request
} )


 );

 $('.sliders').slick({
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:1000,
})


$('.anims').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:1000,
})
