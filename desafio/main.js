(function(){
    const url = "https://api.github.com/takenet";
    const client_id = "1991d675e966a5021cef";
    const client_secret = "f5fadb7c68b0651e7e73fe177591749ee8cc48f9";
    const search = document.getElementById("search");
    const count = 5;
    const sort = "created: desc";
    const language = "c"

    async function getUser(user){
        const repositorioResponse = await fetch(`${url}/repos?
        &language=${language}
        &per_page=${count}
        &sort=${sort}
        &client_id=${client_id}
        &client_secret${client_secret}`);

        const repos = await repositorioResponse.json();

        return {repos};
    }

    function showRepos(repos)
    {
        let output = '';

        repos.ForEach(repo => {
            output = `${repo.name}`
        });
    }

    search.addEventListener("keyup", e => {const user = e.target.value;
    
        if(user.length > 0)
        {
            getUser(user).then(res => {
                showRepos(res.repos);
            });
        }
    
    })
})();