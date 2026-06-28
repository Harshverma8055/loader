document.addEventListener('DOMContentLoaded', () => {
  // 1. Quick Callback Form Handling
  const callbackForm = document.getElementById('callback-form');
  if (callbackForm) {
    callbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('cb-name').value.trim();
      const phone = document.getElementById('cb-phone').value.trim();
      const tractor = document.getElementById('cb-tractor').value.trim();
      const location = document.getElementById('cb-location').value.trim();
      
      if (!name || !phone || !tractor || !location) {
        alert('Please fill out all fields in the enquiry form.');
        return;
      }
      
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit mobile number (starting with 6-9).');
        return;
      }
      
      // Simulate form submission success
      alert(`Thank you, ${name}! Your callback request for your ${tractor} has been submitted successfully. A Madina Engineering representative will call you on +91 ${phone} shortly.`);
      callbackForm.reset();
    });
  }

  // 2. Dealer Application Form Handling
  const dealerForm = document.getElementById('dealer-form');
  if (dealerForm) {
    dealerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const firmName = document.getElementById('dl-firm').value.trim();
      const contactName = document.getElementById('dl-name').value.trim();
      const phone = document.getElementById('dl-phone').value.trim();
      const email = document.getElementById('dl-email').value.trim();
      const state = document.getElementById('dl-state').value;
      const message = document.getElementById('dl-msg').value.trim();
      
      if (!firmName || !contactName || !phone || !state) {
        alert('Please fill out the Firm Name, Contact Person, Phone, and State fields.');
        return;
      }
      
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit mobile number (starting with 6-9).');
        return;
      }
      
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address or leave the field blank.');
          return;
        }
      }
      
      // Simulate form submission success
      alert(`Dealer application received for "${firmName}" in ${state}. Thank you, ${contactName}. Our dealer development team will review your application and contact you within 2 business days.`);
      dealerForm.reset();
    });
  }
});
