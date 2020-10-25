function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    if (filter === "MALE") {
        filter = "MALEY";
    }
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector(".srch");
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};

const classButton = document.querySelector('.classButton')
classButton.addEventListener('click', myClass)

function myClass() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("classDropdown");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector(".class");
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};

const sectionButton = document.querySelector('.sectionButton')
sectionButton.addEventListener('click', mySection)

function mySection() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("sectionDropdown");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector(".section");
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};

const genderButton = document.querySelector('.genderButton')
genderButton.addEventListener('click', myGender)

function myGender() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("genderDropdown");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector(".gender");
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};