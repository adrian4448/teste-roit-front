import axios from 'axios';
import RepositoriosService from './repositoriosService';

class GithubService {

    acessarGitAPI(userName) {
        return axios.get(`https://api.github.com/search/users?q=${userName}`).then(resp => {
            return resp.data;
        });
    }

    usuarioValido(gitUserName) {
        return this.acessarGitAPI(gitUserName).then(data => {
            if (data.total_count > 0) {
                return true;
            }
            return false;
        })
    }

    async getGithubInfo(gitUserName) {
        return this.acessarGitAPI(gitUserName).then(data => {
            const git = data.items.find(item => item.login = gitUserName)
            return RepositoriosService.adicionarRepositorios(git).then(repositorios => {
                const githubData = {
                    id: git.id,
                    githubUser: git.login,
                    profileUrl: git.html_url,
                    avatarUrl: git.avatar_url,
                    repositories: repositorios
                }
                return githubData;
            });
        });
    }

    userAlreadyExists(gitUserName) {
        return axios.get(`http://localhost:3000/users/github/${gitUserName}`).then(resp => {
            return resp.data;
        })
    }
}

export default new GithubService();