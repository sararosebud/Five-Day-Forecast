



// Wait for document to load
$(document).ready(() => {
    $('.info').on('submit', () => {

        // prevents default behaviour
        // Prevents event propagation
        return false;
    });
});

$('.input-group').keypress((e) => {
  
    // Enter key corresponds to number 13
    if (e.which === 13) {
        $('.input-group').submit();
        console.log('form submitted');
        addElement();
       
    }
})