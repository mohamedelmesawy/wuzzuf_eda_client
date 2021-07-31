var baseUrl = "http://localhost:8090/api/v1";



window.onload = function () {
    //  Buttons --------------------------------
    $.ajax(
        {
            url: baseUrl + "/summary",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTable(result, "summaryModalCenter-body", null);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/allJobsSpark",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTableData(result, "dataModalCenter-body", ["#", "title","company","location","type","level","Years of Experience","country","skills"]);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/structure",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTableStructure(result, "structureModalCenter-body", ['Field Name', 'Data-Type']);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/mostDemandingCompanies",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTable(result, "countModalCenter-body", ['Company', 'Frequency']);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/mostPopularJobs",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTable(result, "jobsModalCenter-body", ["Job Title", "Frequency"]);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/mostPopularAreas",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTable(result, "areasModalCenter-body", ["Area", "Frequency"]);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/mostRequiredSkills",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTable(result, "skillsModalCenter-body", ["Skill", "Frequency"]);
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/yearsofexp",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                GenerateTableYear(result, "yearsModalCenter-body", ["Job Title", "Years of Experience", "Factorized Years"]);
            }
        }
    );


    //  Charts --------------------------------
    $.ajax(
        {
            url: baseUrl + "/image/areasbarchart",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                document.getElementById("areas-chart").src = baseUrl + "/image/areasbarchart"; 
                document.getElementById("enlarge-chart-areas-popup").src = baseUrl + "/image/areasbarchart"; 
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/image/companiespiechart",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                document.getElementById("companies-chart").src = baseUrl + "/image/companiespiechart"; 
                document.getElementById("enlarge-chart-companies-popup").src = baseUrl + "/image/companiespiechart"; 
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/image/jobsbarchart",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                document.getElementById("jobs-chart").src = baseUrl + "/image/jobsbarchart"; 
                document.getElementById("enlarge-chart-jobs-popup").src = baseUrl + "/image/jobsbarchart"; 
            }
        }
    );

    $.ajax(
        {
            url: baseUrl + "/image/kmeans/7",
            contentType: 'application/json',
            type: 'GET',
            success: function(result){
                document.getElementById("kmeans-chart").src = baseUrl + "/image/kmeans/7"; 
                document.getElementById("enlarge-chart-kmeans-popup").src = baseUrl + "/image/kmeans/7"; 
            }
        }
    );

    console.log('Developers');
}




// ----------------------------------------------------------------
// Private Functions to create HTML tables from JSON
// ----------------------------------------------------------------
function GenerateTableYear(data, parentDivId, headers) {
    var result = data.map(el=>Object.values(el));

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.classList.add("styled-table");
    table.border = "1";

    //Get the count of columns.
    var columnCount = result[0].length;

    //Add the header row.
    var row = table.insertRow(-1);

    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = headers[i];
        row.appendChild(headerCell);
    }

    //Add the result rows.
    for (var i = 1; i < result.length; i++) {
        row = table.insertRow(-1);

        for (var j = 0; j < columnCount; j++) {
            if (j==0 || j==2 || j==7){
                var cell = row.insertCell(-1);
                cell.innerHTML = result[i][j];
            }
        }
    }

    var dvTable = document.getElementById(parentDivId);
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function GenerateTableStructure(data, parentDivId, headers) {
    var result = data.map(el=>Object.values(el));

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.classList.add("styled-table");
    table.border = "1";

    //Get the count of columns.
    var columnCount = result[0].length;

    //Add the header row.
    var row = table.insertRow(-1);

    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = headers[i];
        row.appendChild(headerCell);
    }
    
    //Add the result rows.
    for (var i = 1; i < result.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = result[i][j];
        }
    }

    var dvTable = document.getElementById(parentDivId);
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function GenerateTableData(data, parentDivId, headers) {
    var result = data.map(el=>Object.values(el));

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.classList.add("styled-table");
    table.border = "1";

    //Get the count of columns.
    var columnCount = result[0].length;

    //Add the header row.
    var row = table.insertRow(-1);

    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = headers[i];
        row.appendChild(headerCell);
    }
    
    //Add the result rows.
    for (var i = 1; i < result.length; i++) {
        row = table.insertRow(-1);

        for (var j = 0; j < columnCount; j++) {
            if (j <= 8){
                var cell = row.insertCell(-1);
                cell.innerHTML = result[i][j];
            }
        }
    }

    var dvTable = document.getElementById(parentDivId);
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function GenerateTable(result, parentDivId, headers) {
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.classList.add("styled-table");
    table.border = "1";

    if (headers){
        //Add the header row.
        var row = table.insertRow(-1);
    
        for (var i = 0; i < headers.length; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = headers[i];
            row.appendChild(headerCell);
        }
    }
    
    //Add the result rows.
    for (let key in result){
        var row = table.insertRow(-1);
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = key;
        row.appendChild(headerCell);

        var cell = row.insertCell(-1);
        cell.innerHTML = result[key];
    }
   
    var dvTable = document.getElementById(parentDivId);
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}





// DELETE ME
// ----------------------------------------------------------------
//  Buttons  --------------------------------
// ----------------------------------------------------------------
// $('#btn-summary').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/summary",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 GenerateTable(result, "summaryModalCenter-body", null);
//                 // document.getElementById("summaryModalCenter-body").appendChild(renderjson(result));
//             }
//         }
//     );
// });

// $('#btn-data').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/allJobsSpark",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 GenerateTableData(result, "dataModalCenter-body", ["#", "title","company","location","type","level","Years of Experience","country","skills"]);
//                 // document.getElementById("dataModalCenter-body").appendChild(renderjson(result));
//             }
//         }
//     );
// });
  
// $('#btn-structure').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/structure",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 // document.getElementById("structureModalCenter-body").appendChild(renderjson(result));
//                 GenerateTableStructure(result, "structureModalCenter-body", ['Field Name', 'Data-Type']);
//             }
//         }
//     );
// });

// $('#btn-count').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/mostDemandingCompanies/10",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 GenerateTable(result, "countModalCenter-body", ['Company', 'Frequency']);
//                 // document.getElementById("countModalCenter-body").appendChild(renderjson(result));
//             }
//         }
//     );
// });
  
// $('#btn-jobs').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/mostPopularJobs/10",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 // document.getElementById("jobsModalCenter-body").appendChild(renderjson(result));
//                 GenerateTable(result, "jobsModalCenter-body", ["Job Title", "Frequency"]);
//             }
//         }
//     );
// });
  
// $('#btn-areas').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/mostPopularAreas/10",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 GenerateTable(result, "areasModalCenter-body", ["Area", "Frequency"]);
//                 // document.getElementById("areasModalCenter-body").appendChild(renderjson(result));
//             }
//         }
//     );
// });
  
// $('#btn-skills').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/mostRequiredSkills/10",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 GenerateTable(result, "skillsModalCenter-body", ["Skill", "Frequency"]);
//                 // document.getElementById("skillsModalCenter-body").appendChild(renderjson(result));
//             }
//         }
//     );
// });
  
// $('#btn-years').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/yearsofexp",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 GenerateTableYear(result, "yearsModalCenter-body", ["Job Title", "Years of Experience", "Factorized Years"]);
//                 // document.getElementById("yearsModalCenter-body").appendChild(renderjson(result));
//             }
//         }
//     );
// });
  



// ----------------------------------------------------------------
//  Charts --------------------------------
// ----------------------------------------------------------------
// $('#btn-chart-areas').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/image/areasbarchart",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 document.getElementById("areas-chart").src = baseUrl + "/image/areasbarchart"; 
//                 document.getElementById("enlarge-chart-areas-popup").src = baseUrl + "/image/areasbarchart"; 
//             }
//         }
//     );
// });

// $('#btn-chart-companies').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/image/companiespiechart",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 document.getElementById("companies-chart").src = baseUrl + "/image/companiespiechart"; 
//                 document.getElementById("enlarge-chart-companies-popup").src = baseUrl + "/image/companiespiechart"; 
//             }
//         }
//     );
// });

// $('#btn-chart-jobs').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/image/jobsbarchart",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 document.getElementById("jobs-chart").src = baseUrl + "/image/jobsbarchart"; 
//                 document.getElementById("enlarge-chart-jobs-popup").src = baseUrl + "/image/jobsbarchart"; 
//             }
//         }
//     );
// });

// $('#btn-chart-kmeans').on('click', function(){
//     $.ajax(
//         {
//             url: baseUrl + "/image/kmeans/7",
//             contentType: 'application/json',
//             type: 'GET',
//             success: function(result){
//                 document.getElementById("kmeans-chart").src = baseUrl + "/image/kmeans/7"; 
//                 document.getElementById("enlarge-chart-kmeans-popup").src = baseUrl + "/image/kmeans/7"; 
//             }
//         }
//     );
// });

// $('#btn-chart-developers').on('click', function(){
//    console.log('Developers');
// });
