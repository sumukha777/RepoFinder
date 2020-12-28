class GitHub {
    constructor() {
        this.client_id = 'f95177eabe4fa504a5d7';
        this.client_secret = '32c78b118f68bf2c026bb3ac4645a6c772aa29e4';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    //now, we need to get the user
    async getUser(user){
        //we need the profile as well as their recent repos
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // In this project, not only the profile is displayed but also the latest repos of the user is also displayed.
        //profileResponse is used to fetch user's profile while repoResponse is used to fetch user's recent repositories.
        
        const profileData = await profileResponse.json();//since API call is in json format
        const repos = await repoResponse.json();
        return{
            profile:profileData, repos
        }
    }
}