import axios from 'axios'

class RepositoriosService{

    acessarRepositoriosGit(gitUrl) {
        let repositorios = [];
        return axios.get(gitUrl).then(resp => {
            resp.data.forEach(repo => {
                const repositorieToSave = {
                    id: repo.id,
                    nome: repo.name,
                    descricao: repo.description,
                    repoUrl: repo.html_url,
                    donoUser: repo.owner.login
                }
                repositorios.push(repositorieToSave);
            });
            return repositorios;
        });
    }

    async adicionarRepositorios(githubUser) {
        const repositoriosId = [];
        await this.acessarRepositoriosGit(githubUser.repos_url).then(async repositorios => {
            for(let repositorio of repositorios) {
                await axios.post('http://localhost:3000/repositories', repositorio).then(newRepositorio => {
                    repositoriosId.push(newRepositorio.data._id);
                });   
            }
        })
        return repositoriosId;
    }
}

export default new RepositoriosService();