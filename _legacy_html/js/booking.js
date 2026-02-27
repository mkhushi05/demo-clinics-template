document.addEventListener('DOMContentLoaded', () => {

    // State
    let currentStep = 1;
    const totalSteps = 4;
    const bookingData = {
        service: null,
        price: null,
        date: null,
        time: null,
        details: {},
        deposit: 50 // Fixed £50 deposit
    };

    // DOM Elements
    const steps = document.querySelectorAll('.booking-step');
    const progressIndicators = document.querySelectorAll('.progress-step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Step 1 Elements
    const serviceCards = document.querySelectorAll('.service-card');

    // Step 2 Elements
    const calendarDays = document.querySelectorAll('.calendar-day:not(.disabled)');
    const timeSlots = document.querySelectorAll('.time-slot');

    // Step 3 Elements
    const detailForm = document.getElementById('detailsForm');

    // Step 4 Elements
    const summaryService = document.getElementById('summary-service');
    const summaryDateTime = document.getElementById('summary-datetime');

    // Initial Setup
    updateUI();

    // Event Listeners
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);

    // Select Service
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            serviceCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            bookingData.service = card.dataset.service;
            bookingData.price = card.dataset.price;
            validateStep();
        });
    });

    // Select Date
    calendarDays.forEach(day => {
        if (!day.classList.contains('day-name')) {
            day.addEventListener('click', () => {
                calendarDays.forEach(d => d.classList.remove('selected'));
                day.classList.add('selected');
                bookingData.date = `Oct ${day.textContent}, 2026`; // MOCK
                validateStep();
            });
        }
    });

    // Select Time
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            bookingData.time = slot.textContent.trim();
            validateStep();
        });
    });

    // Detail Form Inputs
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('input', validateStep);
    });

    // Functions
    function handleNext() {
        if (currentStep < totalSteps) {
            if (currentStep === 3) {
                // Save form details before moving to payment
                bookingData.details.fname = document.getElementById('fname').value;
                bookingData.details.lname = document.getElementById('lname').value;
                bookingData.details.email = document.getElementById('email').value;
                bookingData.details.phone = document.getElementById('phone').value;
            }
            currentStep++;
            updateUI();
        } else if (currentStep === totalSteps) {
            submitBooking();
        }
    }

    function handlePrev() {
        if (currentStep > 1) {
            currentStep--;
            updateUI();
        }
    }

    function updateUI() {
        // Update Steps Visibility
        steps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update Progress Bar
        progressIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index + 1 < currentStep) {
                indicator.classList.add('completed');
                indicator.innerHTML = '✓';
            } else if (index + 1 === currentStep) {
                indicator.classList.add('active');
                indicator.innerHTML = index + 1;
            } else {
                indicator.innerHTML = index + 1;
            }
        });

        // Update Buttons
        if (currentStep === 1) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (currentStep === totalSteps) {
            nextBtn.textContent = 'Pay Deposit & Book';
            // Populate Summary
            summaryService.textContent = `${bookingData.service} (£${bookingData.price})`;
            summaryDateTime.textContent = `${bookingData.date} at ${bookingData.time}`;
        } else {
            nextBtn.textContent = 'Continue';
        }

        // Hide footer on completion step (Step 5)
        if (currentStep === 5) {
            document.querySelector('.booking-footer').style.display = 'none';
        }

        validateStep();
    }

    function validateStep() {
        let isValid = false;

        switch (currentStep) {
            case 1:
                isValid = !!bookingData.service;
                break;
            case 2:
                isValid = !!bookingData.date && !!bookingData.time;
                break;
            case 3:
                const fname = document.getElementById('fname').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                isValid = fname !== '' && email !== '' && phone !== '';
                break;
            case 4:
                // Mock validation for payment screen
                isValid = true;
                break;
            default:
                isValid = true;
        }

        if (isValid) {
            nextBtn.classList.remove('btn-disabled');
            nextBtn.disabled = false;
        } else {
            nextBtn.classList.add('btn-disabled');
            nextBtn.disabled = true;
        }
    }

    function submitBooking() {
        // Mock API Call delay
        nextBtn.textContent = 'Processing...';
        nextBtn.disabled = true;

        setTimeout(() => {
            // Move to success step (Hidden step 5)
            steps.forEach(step => step.classList.remove('active'));
            document.getElementById('step5').classList.add('active');
            document.querySelector('.booking-footer').style.display = 'none';
            document.querySelector('.booking-progress').style.display = 'none';

            // Populate Success Details
            document.getElementById('conf-name').textContent = bookingData.details.fname;
            document.getElementById('conf-service').textContent = bookingData.service;
            document.getElementById('conf-datetime').textContent = `${bookingData.date} at ${bookingData.time}`;

            // Scroll to top
            window.scrollTo(0, 0);

        }, 1500);
    }
});
