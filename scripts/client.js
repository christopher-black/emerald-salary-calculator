console.log('script sourced');
// Shortcut for ready
$(readyNow);

function readyNow() {
    console.log('jQuery is working!');
    // Add event hanlders
    // $('#employee-form').submit(onFormSubmit);
    // Listen for 'submit' on forms
    $('#employee-form').on('submit', onFormSubmit);
    // $('#submit-btn').on('click', onFormSubmit);
    // Listen for 'click' on buttons

}

function onFormSubmit(event) {
    event.preventDefault();
    console.log('form!');
    let employeeName = $('#employee-name').val();
    console.log(`Employee: ${employeeName}`);
}