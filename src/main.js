document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuOpenBtn = document.querySelector('.mobile-menu-open');
  var mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
  var backdrop = document.querySelector('.backdrop');
  var mobileMenuNavLinks = document.querySelectorAll('.mobile-menu-nav a');

  function openMobileMenu() {
    backdrop.classList.add('is-open');
  }

  function closeMobileMenu() {
    backdrop.classList.remove('is-open');
  }

  mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

  mobileMenuNavLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });

  
  var shopNowLink = document.querySelector('.mobile-menu-button a');
  shopNowLink.addEventListener('click', function(event) {
    var targetSectionId = shopNowLink.getAttribute('href'); 
    var targetSection = document.querySelector(targetSectionId); 
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); 
      closeMobileMenu(); 
      event.preventDefault(); 
    }
  });
});