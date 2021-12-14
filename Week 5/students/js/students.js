
// TODO keep the student list state in a global list
const slist = [];

function addStudent() {
    
      // TODO lookup the user entered text
      var sdata = document.getElementById("student").value;


      // TODO store the new student name in global list
      slist.push("<div>" + sdata + "</div>");
    
      // TODO render the entire list into the output div;
      var html = "";
      slist.forEach(function (list) { // loops and adds html to new index
          html += "<li>" + list + "</li>";
      });

      html = "<ol>" + html + "</ol>";
      document.getElementById("output").innerHTML =  "Student List" + html;

    return false;
}     

function init() {
    
    // TODO register the onsubmit for 'theForm' to use addStudent
    if (document && document.getElementById) {
        document.getElementById('theForm').onsubmit = addStudent;
    }
} 

window.onload = init;