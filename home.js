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

// popup-overlay-2 -------- terms & conditions

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay2 = document.querySelector(".popup-overlay-2");
    const termsConditions = document.getElementById("terms-conditions");
    const closeButton2 = document.createElement("button");
    const termsConditionsLink = document.getElementById("terms-conditions-link");

    closeButton2.classList.add("close-btn-2");
    closeButton2.innerHTML = "&times;"; 
    termsConditions.appendChild(closeButton2);

    function showPopup2() {
        popupOverlay2.style.display = "flex"; 
        document.body.classList.add("no-scroll"); 
    }

    function hidePopup2() {
        popupOverlay2.style.display = "none"; 
        document.body.classList.remove("no-scroll"); 
    }

    termsConditionsLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        showPopup2();
    });

    closeButton2.addEventListener("click", hidePopup2);

    popupOverlay2.addEventListener("click", function (event) {
        if (event.target === popupOverlay2) {
            hidePopup2();
        }
    });
});

// popup-overlay-3 ------ risk disclosure

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay3 = document.querySelector(".popup-overlay-3");
    const riskDisclosure = document.getElementById("risk-disclosure");
    const closeRiskButton = document.createElement("button");
    const riskDisclosureLink = document.getElementById("risk-disclosure-link");

    closeRiskButton.classList.add("close-risk-btn");
    closeRiskButton.innerHTML = "&times;";
    riskDisclosure.appendChild(closeRiskButton);

    function showRiskPopup() {
        popupOverlay3.style.display = "flex";
        document.body.classList.add("disable-scroll");
    }

    function hideRiskPopup() {
        popupOverlay3.style.display = "none";
        document.body.classList.remove("disable-scroll");
    }

    riskDisclosureLink.addEventListener("click", function (event) {
        event.preventDefault();
        showRiskPopup();
    });

    closeRiskButton.addEventListener("click", hideRiskPopup);

    popupOverlay3.addEventListener("click", function (event) {
        if (event.target === popupOverlay3) {
            hideRiskPopup();
        }
    });
});

// popup-overlay-4 ------- refund policy

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay4 = document.querySelector(".popup-overlay-4");
    const refundPolicy = document.getElementById("refund-policy");
    const closeRefundButton = document.createElement("button");
    const refundPolicyLink = document.getElementById("refund-policy-link");

    closeRefundButton.classList.add("close-btn-refund");
    closeRefundButton.innerHTML = "&times;";
    refundPolicy.appendChild(closeRefundButton);

    function showRefundPopup() {
        popupOverlay4.style.display = "flex";
        document.body.classList.add("no-scroll");
    }

    function hideRefundPopup() {
        popupOverlay4.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    refundPolicyLink.addEventListener("click", function (event) {
        event.preventDefault();
        showRefundPopup();
    });

    closeRefundButton.addEventListener("click", hideRefundPopup);

    popupOverlay4.addEventListener("click", function (event) {
        if (event.target === popupOverlay4) {
            hideRefundPopup();
        }
    });
});

// popup-overlay ------ Disclaimer

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay-5");
    const disclaimer = document.getElementById("disclaimer");
    const closeButton = document.createElement("button");
    const disclaimerLink = document.getElementById("disclaimer-link");

    closeButton.classList.add("close-btn-5");
    closeButton.innerHTML = "&times;";
    disclaimer.appendChild(closeButton);

    function showPopup() {
        popupOverlay.style.display = "flex";
        document.body.classList.add("no-scroll-5");
    }

    function hidePopup() {
        popupOverlay.style.display = "none";
        document.body.classList.remove("no-scroll-5");
    }

    disclaimerLink.addEventListener("click", function (event) {
        event.preventDefault();
        showPopup();
    });

    closeButton.addEventListener("click", hidePopup);

    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});
