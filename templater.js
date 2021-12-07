const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


function generate(team) {
    console.log("Templater", team);

    return `<!DOCTYPE html>
    <html lang='en'>
    
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>My Team</title>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'>
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    
    <body>
    
        <div class='jumbotron jumbotron-fluid shadow-lg' style='background-color: lightblue; color: white; text-align: center;'>
            <div class='container'>
                <h1 class='display-4'>My Team</h1>
            </div>
        </div>
    
        <div class='container row'>
    
            ${team.map(member => {
        console.log(member.getRole());
        //Card for Manager 
        if (member.getRole() === "Manager") {
            return `<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <div class="card-header shadow p-3 mb-5 rounded">
                        <h5 class="card-title">${member.name}</h5>
                        <h6 class="card-title">${member.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Name: ${member.getName()}</li>
                            <li class="list-group-item"> Role: ${member.getRole()}</li>
                            <li class="list-group-item"> ID: ${member.getId()}</li>
                            <li class="list-group-item"> Email: ${member.getEmail()}</li>
                            <li class="list-group-item"> Office Number: ${member.getOffice()}</li>
                        </ul>
                    </div>
                </div>`;
        }
        else if (member.getRole() === "Engineer") {
            return `<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <div class="card-header shadow p-3 mb-5 rounded">
                        <h5 class="card-title">${member.name}</h5>
                        <h6 class="card-title">${member.getRole()}</h6>
                    </div>
                    <div class="card-body ">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Name: ${member.getName()}</li>
                        <li class="list-group-item"> Role: ${member.getRole()}</li>
                        <li class="list-group-item"> ID: ${member.getId()}</li>
                        <li class="list-group-item"> Email: ${member.getEmail()}</li>
                            <li class="list-group-item">Github:${member.getGithub()}</li>
                        </ul>
        
                    </div>
                </div>`;
        } else {
            return `<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <div class="card-header shadow p-3 mb-5 rounded">
                        <h5 class="card-title">${member.name}</h5>
                        <h6 class="card-title">${member.getRole()}</h6>
                    </div>
                    <div class="card-body ">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Name: ${member.getName()}</li>
                        <li class="list-group-item"> Role: ${member.getRole()}</li>
                        <li class="list-group-item"> ID: ${member.getId()}</li>
                        <li class="list-group-item"> Email: ${member.getEmail()}</li>
                            <li class="list-group-item">${member.getEducation()}</li>
                        </ul>
        
                    </div>
                </div>`;
        }
    })
        }
        <!--ending the loop -->
    
    
        </div>
    
    </body>
    
    </html>`

}

module.exports = generate;