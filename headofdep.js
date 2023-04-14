


/*menu sidebar*/
let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let main_content = document.querySelector('.main-content')


menu.onclick = function(){
    sidebar.classList.toggle('active')
    main_content.classList.toggle('active')


}



/*request table*/
const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}
// 2. Sorting | Ordering data of HTML table
/*
table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}
*/






//lien entre les page 
// Get references to the sidebar links and main content sections
const sidebarLinks = document.querySelectorAll('.sidebar a');
const mainSections = document.querySelectorAll('.main-content section');

// Loop through each sidebar link and add a click event listener
sidebarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Get the ID of the section to show based on the link's href attribute
    const sectionId = link.getAttribute('href');
    
    // Loop through each main content section
    mainSections.forEach((section) => {
      // If the section has the same ID as the one we want to show, display it
      if (section.getAttribute('id') === sectionId.substring(1)) {
        section.style.display = 'block';
      } else {
        // Otherwise, hide it
        section.style.display = 'none';
      }
    });
  });
});


/* profile */


const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);
