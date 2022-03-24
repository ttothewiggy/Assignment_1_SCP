// variables for menu on mobile

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


// toggle function to open and close menubar when screen is less than 800px

navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});


//FAILED ATTEMP AT USING JAVASCRIPT FOR DROPDOWN
//IGNORE
//used css instead

// function for cataogue dropdown menu

// function dropdown() {
//     document.getElementById('myDropdown').classList.toggle('show');
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName('dropdown-content');
//         var i;
//         for (i = 0; i < dropdowns.length; i++){
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')){
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }