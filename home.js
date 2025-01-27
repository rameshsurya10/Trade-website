$(document).ready(function(){

});


function faqnav(event, tab){
    var open_faq = '#'+tab+ '_Questions';
    $('.question-grid').addClass('d-none');
    $('.subnav-items .items').removeClass('active');
    $(open_faq).removeClass('d-none');
    setTimeout(function(){
        $(event).addClass('active');
    },100);
}

$('.accordion').on('show.bs.collapse', function(e) {
    $(e.target).siblings('.accordion-header').find('.icon').text('-');
});

$('.accordion').on('hide.bs.collapse', function(e) {
    $(e.target).siblings('.accordion-header').find('.icon').text('+');
});

// Popup-overlay ----- Privacy-policy

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const privacyPolicy = document.getElementById("privacy-policy");
    const closeButton = document.createElement("button");
    const privacyPolicyLink = document.getElementById("privacy-policy-link");

    closeButton.classList.add("close-btn");
    closeButton.innerHTML = "&times;"; 
    privacyPolicy.appendChild(closeButton);

    function showPopup() {
        popupOverlay.style.display = "flex"; 
        document.body.classList.add("no-scroll"); 
    }

    function hidePopup() {
        popupOverlay.style.display = "none"; 
        document.body.classList.remove("no-scroll"); 
    }

    privacyPolicyLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        showPopup();
    });

    closeButton.addEventListener("click", hidePopup);

    // Optional: Hide the popup when clicking outside of it
    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});



