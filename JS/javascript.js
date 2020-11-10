function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function showDate() {
    var d = new Date();
    var curr_month = d.getMonth() + 1;
    var curr_date = d.getDate();
    var curr_year = d.getFullYear();
    document.write(curr_month + "-" + curr_date + "-" + curr_year);
}