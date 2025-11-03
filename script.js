window.onload = function() {
const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  console.log(hamburger, navMenu);
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => { 
      console.log('Hamburger clicked');
        hamburger.classList.toggle('active');
      navMenu.classList.toggle('active'); 
      
    });
  }
// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {    hamburger.classList.remove('active');    navMenu.classList.remove('active');}));
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {    anchor.addEventListener('click', function (e) {        e.preventDefault();        const target = document.querySelector(this.getAttribute('href'));        if (target) {            target.scrollIntoView({                behavior: 'smooth',                block: 'start'            });        }    });});
// Navbar background change on scroll
window.addEventListener('scroll', () => {    const navbar = document.querySelector('.navbar');    if (window.scrollY > 50) {        navbar.style.background = 'rgba(255, 255, 255, 0.95)';        navbar.style.backdropFilter = 'blur(10px)';    } else {        navbar.style.background = '#fff';        navbar.style.backdropFilter = 'none';    }});
// Form validation and submission
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', function (e) { e.preventDefault();        
    // Get form data    
const formData = new FormData(appointmentForm);    const data = Object.fromEntries(formData);        
// Basic validation    
if (!data.name || !data.email || !data.phone || !data.address || !data.service || !data['preferred-date'] || !data['preferred-time']) {        showNotification('Please fill in all required fields.', 'error');        return;    }       
 // Email validation    
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    if (!emailRegex.test(data.email)) {        showNotification('Please enter a valid email address.', 'error');        return;    }        
 // Phone validation (basic)    
 const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {        showNotification('Please enter a valid phone number.', 'error');        return;    }       
  // Date validation (not in the past)    
  const selectedDate = new Date(data['preferred-date']);    const today = new Date();    today.setHours(0, 0, 0, 0);        if (selectedDate < today) {        showNotification('Please select a future date for your appointment.', 'error');        return;    }        
  // Simulate form submission    
  showNotification('Appointment request submitted successfully! We will contact you soon to confirm your appointment.', 'success');        
  // Reset form    
  appointmentForm.reset();        
  // In a real application, you would send the data to a server    
  console.log('Appointment Data:', data);});
//Notification system
function showNotification(message, type = 'info') {   
     // Remove existing notifications   
      const existingNotification = document.querySelector('.notification');    
      if (existingNotification) {        existingNotification.remove();    }        
      // Create notification element    
      const notification = document.createElement('div');    notification.className = `notification notification-${type}`;    notification.innerHTML = `        <div class="notification-content">            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>            <span>${message}</span>        </div>        <button class="notification-close" onclick="this.parentElement.remove()">            <i class="fas fa-times"></i>        </button>    `;        
      // Add styles    
      notification.style.cssText = `        position: fixed;        top: 20px;        right: 20px;        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};        color: white;        padding: 1rem 1.5rem;        border-radius: 10px;        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);        z-index: 10000;        display: flex;        align-items: center;        gap: 1rem;        max-width: 400px;        animation: slideInRight 0.3s ease-out;    `;        
      // Add animation keyframes    
      if (!document.querySelector('#notification-styles')) {        const style = document.createElement('style');        style.id = 'notification-styles';        style.textContent = `            @keyframes slideInRight {                from {                    transform: translateX(100%);                    opacity: 0;                }                to {                    transform: translateX(0);                    opacity: 1;                }            }            .notification-content {                display: flex;                align-items: center;                gap: 0.5rem;            }            .notification-close {                background: none;                border: none;                color: white;                cursor: pointer;                padding: 0.25rem;                border-radius: 50%;                transition: background-color 0.2s;            }            .notification-close:hover {                background-color: rgba(255, 255, 255, 0.2);            }        `;        document.head.appendChild(style);    }        document.body.appendChild(notification);        
      // Auto remove after 5 seconds    
      setTimeout(() => {        if (notification.parentElement) {            notification.style.animation = 'slideInRight 0.3s ease-out reverse';            setTimeout(() => notification.remove(), 300);        }    }, 5000);}
// Set minimum date for appointment booking to today
document.addEventListener('DOMContentLoaded', () => {    const dateInput = document.getElementById('preferred-date');    if (dateInput) {        const today = new Date().toISOString().split('T')[0];        dateInput.setAttribute('min', today);    }});
// Add scroll-to-top functionality
function addScrollToTop() {    const scrollBtn = document.createElement('button');    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';    scrollBtn.className = 'scroll-to-top';    scrollBtn.style.cssText = `        position: fixed;        bottom: 30px;        right: 30px;        width: 50px;        height: 50px;        border-radius: 50%;        background: #2563eb;        color: white;        border: none;        cursor: pointer;        font-size: 1.2rem;        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);        transition: all 0.3s ease;        z-index: 1000;        opacity: 0;        visibility: hidden;    `;        document.body.appendChild(scrollBtn);        
    // Show/hide scroll button based on scroll position    
    window.addEventListener('scroll', () => {        if (window.scrollY > 300) {            scrollBtn.style.opacity = '1';            scrollBtn.style.visibility = 'visible';        } else {            scrollBtn.style.opacity = '0';            scrollBtn.style.visibility = 'hidden';        }    });      
      // Scroll to top when clicked   
    scrollBtn.addEventListener('click', () => {        window.scrollTo({            top: 0,            behavior: 'smooth'        });    });}
// Initialize scroll-to-top button
document.addEventListener('DOMContentLoaded', addScrollToTop);
}










// validation
// Indian state list for validation
    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
        'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
        'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
    ];

    // Valid pincode ranges for Indian states (first 2 digits)
    const validPincodeRanges = {
        '11': 'Delhi', '12': 'Haryana', '13': 'Punjab', '14': 'Punjab', '15': 'Punjab',
        '16': 'Punjab', '17': 'Himachal Pradesh', '18': 'Jammu & Kashmir', '19': 'Jammu & Kashmir',
        '20': 'Uttar Pradesh', '21': 'Uttar Pradesh', '22': 'Uttar Pradesh', '23': 'Uttar Pradesh',
        '24': 'Uttar Pradesh', '25': 'Uttar Pradesh', '26': 'Uttar Pradesh', '27': 'Uttar Pradesh',
        '28': 'Uttar Pradesh', '30': 'Rajasthan', '31': 'Rajasthan', '32': 'Rajasthan',
        '33': 'Rajasthan', '34': 'Rajasthan', '36': 'Gujarat', '37': 'Gujarat', '38': 'Gujarat',
        '39': 'Gujarat', '40': 'Maharashtra', '41': 'Maharashtra', '42': 'Maharashtra',
        '43': 'Maharashtra', '44': 'Maharashtra', '45': 'Madhya Pradesh', '46': 'Madhya Pradesh',
        '47': 'Madhya Pradesh', '48': 'Madhya Pradesh', '49': 'Chhattisgarh', '50': 'Telangana',
        '51': 'Andhra Pradesh', '52': 'Andhra Pradesh', '53': 'Andhra Pradesh', '56': 'Karnataka',
        '57': 'Karnataka', '58': 'Karnataka', '59': 'Karnataka', '60': 'Tamil Nadu',
        '61': 'Tamil Nadu', '62': 'Tamil Nadu', '63': 'Tamil Nadu', '64': 'Tamil Nadu',
        '67': 'Kerala', '68': 'Kerala', '69': 'Kerala', '70': 'West Bengal', '71': 'West Bengal',
        '72': 'West Bengal', '73': 'West Bengal', '74': 'West Bengal', '75': 'Odisha',
        '76': 'Odisha', '77': 'Odisha', '78': 'Assam', '79': 'Northeast', '80': 'Bihar',
        '81': 'Bihar', '82': 'Bihar', '83': 'Jharkhand', '84': 'Bihar', '85': 'Bihar'
    };

    // Phone validation
    function validatePhone(input) {
        const errorElement = document.getElementById(input.id + '-error');
        const value = input.value.replace(/\D/g, ''); // Remove non-digits
        
        // Auto-format while typing
        if (value !== input.value) {
            input.value = value;
        }

        if (value.length === 0) {
            errorElement.textContent = '';
            input.classList.remove('valid', 'invalid');
            return true;
        }

        if (value.length < 10) {
            errorElement.textContent = 'Phone number must be 10 digits';
            input.classList.add('invalid');
            input.classList.remove('valid');
            return false;
        }

        if (value[0] === '0' || value[0] === '1') {
            errorElement.textContent = 'Phone number cannot start with 0 or 1';
            input.classList.add('invalid');
            input.classList.remove('valid');
            return false;
        }

        if (value.length > 10) {
            input.value = value.substring(0, 10);
        }

        if (value.length === 10 && value[0] >= '2' && value[0] <= '9') {
            errorElement.textContent = '';
            input.classList.add('valid');
            input.classList.remove('invalid');
            return true;
        }

        return false;
    }

    // Pincode validation
    function validatePincode(input) {
        const errorElement = document.getElementById('pincode-error');
        const value = input.value.replace(/\D/g, ''); // Remove non-digits
        
        // Auto-format while typing
        if (value !== input.value) {
            input.value = value;
        }

        if (value.length === 0) {
            errorElement.textContent = '';
            input.classList.remove('valid', 'invalid');
            return true;
        }

        if (value[0] === '0') {
            errorElement.textContent = 'Pincode cannot start with 0';
            input.classList.add('invalid');
            input.classList.remove('valid');
            return false;
        }

        if (value.length < 6) {
            errorElement.textContent = 'Pincode must be 6 digits';
            input.classList.add('invalid');
            input.classList.remove('valid');
            return false;
        }

        if (value.length > 6) {
            input.value = value.substring(0, 6);
        }

        // Check if pincode is in valid Indian range
        const firstTwo = value.substring(0, 2);
        if (value.length === 6) {
            if (validPincodeRanges[firstTwo]) {
                errorElement.textContent = '';
                input.classList.add('valid');
                input.classList.remove('invalid');
                
                // Auto-fill state if possible
                const stateInput = document.getElementById('state');
                if (stateInput && !stateInput.value) {
                    // You can suggest the state based on pincode
                    // stateInput.value = validPincodeRanges[firstTwo];
                }
                return true;
            } else {
                errorElement.textContent = 'Please enter a valid Indian pincode';
                input.classList.add('invalid');
                input.classList.remove('valid');
                return false;
            }
        }

        return false;
    }

    // Text only validation (for city and state)
    function validateTextOnly(input, fieldName) {
        const errorElement = document.getElementById(fieldName + '-error');
        const value = input.value;
        
        // Remove any numbers or special characters except spaces, hyphens, and apostrophes
        const cleanedValue = value.replace(/[^A-Za-z\s\-']/g, '');
        
        if (cleanedValue !== value) {
            input.value = cleanedValue;
        }

        if (cleanedValue.length === 0) {
            errorElement.textContent = '';
            input.classList.remove('valid', 'invalid');
            return true;
        }

        

        // Additional validation for state
        if (fieldName === 'state' && cleanedValue.length >= 2) {
            const matchedState = indianStates.find(state => 
                state.toLowerCase().startsWith(cleanedValue.toLowerCase())
            );
            
        } else {
            errorElement.textContent = '';
        }

        input.classList.add('valid');
        input.classList.remove('invalid');
        return true;
    }

    // Address validation
    function validateAddress(input) {
        const errorElement = document.getElementById('address-error');
        const value = input.value.trim();

        if (value.length === 0) {
            errorElement.textContent = '';
            input.classList.remove('valid', 'invalid');
            return true;
        }

        if (value.length < 10) {
            errorElement.textContent = 'Address must be at least 10 characters';
            input.classList.add('invalid');
            input.classList.remove('valid');
            return false;
        }

        // Check for suspicious patterns (all same character, etc.)
        const uniqueChars = new Set(value.replace(/\s/g, '')).size;
        if (uniqueChars < 5) {
            errorElement.textContent = 'Please enter a valid address';
            input.classList.add('invalid');
            input.classList.remove('valid');
            return false;
        }

        errorElement.textContent = '';
        input.classList.add('valid');
        input.classList.remove('invalid');
        return true;
    }

    // Enhanced form submission
    function handleSubmit(event) {
        event.preventDefault();
        
        // Get current service type
        const serviceType = document.getElementById('service-type').value;
        let isValid = true;

        // Validate based on service type
        if (serviceType === 'HomeVisit' || serviceType === 'OtherServices') {
            isValid = validatePhone(document.getElementById('phone')) && isValid;
            isValid = validatePincode(document.getElementById('pincode')) && isValid;
            isValid = validateTextOnly(document.getElementById('city'), 'city') && isValid;
            isValid = validateTextOnly(document.getElementById('state'), 'state') && isValid;
            isValid = validateAddress(document.getElementById('address')) && isValid;
        } else if (serviceType === 'GovernmentSchemes') {
            isValid = validatePhone(document.getElementById('phone-govt')) && isValid;
        }

        if (!isValid) {
            alert('Please correct the errors in the form before submitting.');
            return false;
        }

        // Form is valid, proceed with submission
        const formData = new FormData(event.target);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        console.log('Form submitted with validated data:', data);
        alert('Service request submitted successfully!');
        
        // Reset form
        event.target.reset();
        handleServiceTypeChange('');
        
        // Clear validation classes
        document.querySelectorAll('.valid, .invalid').forEach(el => {
            el.classList.remove('valid', 'invalid');
        });
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
    }







    // Handle service type change
     // Handle service type selection change
        function handleServiceTypeChange(value) {
            // Hide all sections first
            document.getElementById('defaultMessage').style.display = 'none';
            document.getElementById('homeVisitSection').style.display = 'none';
            document.getElementById('otherServicesSection').style.display = 'none';
            document.getElementById('governmentSchemesSection').style.display = 'none';
            document.getElementById('addressDetails').style.display = 'none';

            // Clear required attributes
            document.getElementById('doctor-specialization').removeAttribute('required');
            document.getElementById('services').removeAttribute('required');
            document.getElementById('schemes').removeAttribute('required');
            document.getElementById('phone-govt').removeAttribute('required');
            document.getElementById('address').removeAttribute('required');
            document.getElementById('city').removeAttribute('required');
            document.getElementById('state').removeAttribute('required');
            document.getElementById('pincode').removeAttribute('required');
            document.getElementById('phone').removeAttribute('required');

            // Show relevant section based on selection
            switch(value) {
                case 'HomeVisit':
                    document.getElementById('homeVisitSection').style.display = 'block';
                    document.getElementById('addressDetails').style.display = 'block';
                    // Set required attributes
                    document.getElementById('doctor-specialization').setAttribute('required', 'required');
                    document.getElementById('address').setAttribute('required', 'required');
                    document.getElementById('city').setAttribute('required', 'required');
                    document.getElementById('state').setAttribute('required', 'required');
                    document.getElementById('pincode').setAttribute('required', 'required');
                    document.getElementById('phone').setAttribute('required', 'required');
                    break;
                    
                case 'OtherServices':
                    document.getElementById('otherServicesSection').style.display = 'block';
                    document.getElementById('addressDetails').style.display = 'block';
                    // Set required attributes
                    document.getElementById('services').setAttribute('required', 'required');
                    document.getElementById('address').setAttribute('required', 'required');
                    document.getElementById('city').setAttribute('required', 'required');
                    document.getElementById('state').setAttribute('required', 'required');
                    document.getElementById('pincode').setAttribute('required', 'required');
                    document.getElementById('phone').setAttribute('required', 'required');
                    break;
                    
                case 'GovernmentSchemes':
                    document.getElementById('governmentSchemesSection').style.display = 'block';
                    // Set required attributes
                    document.getElementById('schemes').setAttribute('required', 'required');
                    document.getElementById('phone-govt').setAttribute('required', 'required');
                    break;
                    
                default:
                    document.getElementById('defaultMessage').style.display = 'block';
                    break;
            }
        }

   


        // Keep calling this from your existing handleServiceTypeChange, or add the event listener below
  function setSubjectFromSelect() {
    const select = document.getElementById('service-type');
    const subjectInput = document.getElementById('subject');
    if (!select || !subjectInput) return;
    const selectedText = select.options[select.selectedIndex]?.text?.trim() || '';
    subjectInput.value = selectedText; // e.g., "Home - Visit"
  }

  function getSelectedText(id) {
    const el = document.getElementById(id);
    if (!el) return '';
    const i = el.selectedIndex;
    return i >= 0 ? el.options[i].text.trim() : '';
  }

  function formatEmailMessage() {
    const serviceType = document.getElementById('service-type')?.value || '';
    const subjectText = document.getElementById('subject')?.value || '';

    const patientName = document.getElementById('patient-name')?.value?.trim() || '';
    const phoneStd = document.getElementById('phone')?.value?.trim() || '';
    const phoneGovt = document.getElementById('phone-govt')?.value?.trim() || '';
    const phone = serviceType === 'GovernmentSchemes' ? phoneGovt : phoneStd;

    const address = document.getElementById('address')?.value?.trim() || '';
    const city = document.getElementById('city')?.value?.trim() || '';
    const state = document.getElementById('state')?.value?.trim() || '';
     const pincode = document.getElementById('pincode')?.value?.trim() || '';

    // More specific service detail (doctor/service/scheme)
    let selectedDetail = subjectText;
    if (serviceType === 'HomeVisit') {
      const docText = getSelectedText('doctor-specialization');
      if (docText) selectedDetail = `${subjectText} - ${docText}`;
    } else if (serviceType === 'OtherServices') {
      const svcText = getSelectedText('services');
      if (svcText) selectedDetail = `Other Services - ${svcText}`;
    } else if (serviceType === 'GovernmentSchemes') {
      const schemeText = getSelectedText('schemes');
      if (schemeText) selectedDetail = `Government Schemes - ${schemeText}`;
    }

    const lines = [
      `SERVICE SELECTED - ${selectedDetail || subjectText}`,
      `PATIENT NAME - ${patientName || 'N/A'}`,
      `CONTACT NO. - ${phone || 'N/A'}`
    ];

    // Include address fields for Home Visit and Other Services
    if (serviceType === 'HomeVisit' || serviceType === 'OtherServices') {
      lines.push(
        `ADDRESS - ${address || 'N/A'}`,
        `CITY - ${city || 'N/A'}`,
        `STATE - ${state || 'N/A'}`,
        `PINCODE - ${pincode || 'N/A'}`
      );
    }

      
    return lines.join('\n');
  }

  // Update subject whenever type changes
  document.getElementById('service-type')?.addEventListener('change', setSubjectFromSelect);

  // Keep "from_name" synced with patient name
  document.getElementById('patient-name')?.addEventListener('input', function() {
    const fromName = document.getElementById('from_name');
    if (fromName) fromName.value = this.value.trim();
  });

  // Prepare Web3Forms payload just before submit
  function prepareWeb3Form(e) {
    const form = e.target;

    // If you use custom validators, you can call them here as needed.
    // Also ensure native checks pass:
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return false;
    }

    // Ensure subject reflects the selected text
    setSubjectFromSelect();

    // Set from_name from patient name
    const patient = document.getElementById('patient-name')?.value?.trim() || '';
    const fromName = document.getElementById('from_name');
    if (fromName) fromName.value = patient;

    // Build message body
    const messageField = document.getElementById('message');
    if (messageField) messageField.value = formatEmailMessage();

    // Optional: prevent double-click submissions
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      const original = btn.textContent;
      btn.textContent = 'Submitting...';
      // Re-enable after a delay in case of redirect-less post (optional)
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
      }, 6000);
    }

    // Do NOT preventDefault here. Let the form post to Web3Forms.
    return true;
  }

 