const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


function generate(team){
    console.log(team);
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
            <!-- Card for Manager -->
    
            <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class="card-header shadow p-3 mb-5 rounded">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-title">Title</h6>
                </div>
                <div class="card-body ">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ">${team[0].getName()}</li>
                        <li class="list-group-item">${team[0].getTitle()}</li>
                        <li class="list-group-item">${team[0].getID()}</li>
                        <li class="list-group-item">${team[0].getEmail()}</li>
                        <li class="list-group-item">${team[0].getNumber()}</li>
                    </ul>
    
                </div>
            </div>
    
    
            <!-- Card for Engineer -->
            <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class="card-header shadow p-3 mb-5 rounded">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-title">Title</h6>
                </div>
                <div class="card-body ">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${team[1].getName()}</li>
                        <li class="list-group-item">${team[1].getTitle()}</li>
                        <li class="list-group-item">${team[1].getID()}</li>
                        <li class="list-group-item">${team[1].getEmail()}</li>
                        <li class="list-group-item">${team[1].getGithub()}</li>
                    </ul>
    
                </div>
            </div>
    
    
    
            <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class="card-header shadow p-3 mb-5 rounded">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-title">Title</h6>
                </div>
                <div class="card-body ">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${team[2].getName()}</li>
                        <li class="list-group-item">${team[2].getTitle()}</li>
                        <li class="list-group-item">${team[2].getID()}</li>
                        <li class="list-group-item">${team[2].getEmail()}</li>
                        <li class="list-group-item">${team[2].getEducation()}</li>
                    </ul>
    
                </div>
            </div>
    
    
        </div>
    
    </body>
    
    </html>`

}

module.exports = generate;