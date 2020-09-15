// Assign the data from `data.js` to a descriptive variable
var tableData = data;
// Console log the ufo sighting data from data.js
console.log(tableData);

// Assign tbody to a descriptive variable
var tbody = d3.select("tbody");
//STEP1: Appends a table to the web page and then adds new rows of data
// for each UFO sighting.

//Getting UFO Sighting values for each column
tableData.forEach(function(i) {
    console.log(i);
    //Append data for each row in the table
    var row = tbody.append("tr");

    //Display and output the result of the table
    Object.entries(i).forEach(function([key,value]) {
        console.log(key,value);
        // Append cell to the row
        var cell = row.append("td");
        // Add value/text to the cell
        cell.text(value);
    });
});

// STEP2: Filtering the tableData to display data according to the entered date
// Select the button
var button = d3.select("#filter-btn");

// // Select the form, I inluded id in the html code to
// easier locate id for form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //Add the summary/result data to the table
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input date
    var inputValue = inputElement.property("value");

    //Store and log all the values from table of data
    console.log(inputValue);

    // Filter the data according to entered datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    // Append the filtred data into table
    filteredData.forEach(function(i){
    console.log(i);
    // Append row by row for each UFO sigthing
    var row = tbody.append("tr");
    Object.entries(i).forEach(function([key,value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });

});
};
