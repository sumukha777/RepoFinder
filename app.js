//Initialize github
const github  = new GitHub;

//Init UI
const ui = new UI;

//input Search

const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get the input text

    const userText = e.target.value;

    //If userText is not null
    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
              if(data.profile.message === 'Not Found'){
                //show an alert
                ui.showAlert('Profile Not Found', 'alert alert-danger');
              } else {
                //display user profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
              }
            })
    } else {
        //clear the user field
        ui.clearProfile();
    }
});