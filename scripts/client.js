console.log('script sourced');
// Shortcut for ready
$(readyNow);
let monthlyTotal = 0;

function readyNow() {
    console.log('jQuery is working!');
    // Add event hanlders
    // $('#employee-form').submit(onFormSubmit);
    // Listen for 'submit' on forms
    $('#employee-form').on('submit', onFormSubmit);
    // $('#submit-btn').on('click', onFormSubmit);
    // Listen for 'click' on buttons
    //     target           event        filter          function
    $('#employee-data').on('click', '.delete-button', deleteEmployee);
    // Listen for clicks on the entire employee table, if what was clicked
    // was '.delete-button', call the deleteEmployee function.

    // Testing monthly total
    // updateMonthlyTotal(40000);
    // updateMonthlyTotal(1000000);
}

function deleteEmployee(event) {
    console.log(event.target);
    console.log(this);
    let salary = $(this).closest('tr').find('.salary-amount').text();
    console.log('Salary:', salary);
    updateMonthlyTotal(-salary);
  // button   td       tr  
    $(this).parent().parent().remove();
    // Does the same thing as the above line
    // $(this).closest('tr').remove();
}

function onFormSubmit(event) {
    console.log(event.target);
    event.preventDefault();
    console.log('form!');
    let employeeName = $('#employee-name').val();
    let employeeLast = $('#employee-last').val();
    let employeeID = $('#employee-id').val();
    let employeeTitle = $('#employee-title').val();
    let employeeSalary = $('#employee-salary').val();

    console.log(`Employee: ${employeeName}`);
    // Access the HTML table body element
    let employeeTable = $('#employee-data');
    // Append our data to the table body
    employeeTable.append(`
       <tr>
        <td>${employeeName}</td>
        <td>${employeeLast}</td>
        <td>${employeeID}</td>
        <td>${employeeTitle}</td>
        <td class="salary-amount">${employeeSalary}</td>
        <td>
            <button class="delete-button">
                Delete
            </button>
        </td>
       </tr>
    `);
    updateMonthlyTotal(employeeSalary);
}

function updateMonthlyTotal(salary) {
    console.log(salary);
    let monthly = Number(salary) / 12;
    monthlyTotal += Math.round(monthly);
    monthlyTotal = Math.round(monthlyTotal);
    $('#total-dollar').text(`$${monthlyTotal}`);
    if (monthlyTotal > 20000) {
        // .addClass, .removeClass would also work
        $('#monthly-total').css('background-color', 'red');
    } else {
        $('#monthly-total').css('background-color', 'white');
    } 
}