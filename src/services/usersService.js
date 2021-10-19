import axios from 'axios'
import GithubService from './githubService';

class usersService {
    cadastrarUsuario(usuario) {
        return GithubService.getGithubInfo(usuario.githubInfo.githubUser).then(githubInfo => {
            usuario.githubInfo = githubInfo;
            return axios.post('http://localhost:3000/users', usuario).then(response => {
                return response.data;
            });
        })
    }

    alterarUsuario(usuario) {
        return GithubService.getGithubInfo(usuario.githubInfo.githubUser).then(githubInfo => {
            usuario.githubInfo = githubInfo;
            return axios.patch(`http://localhost:3000/users/${usuario._id}`, usuario);
        });
    }

    getAllUsuarios() {
        return axios.get('http://localhost:3000/users').then(resp => {
            return resp.data;
        })
    }

    getUsuarioById(id) {
        return axios.get(`http://localhost:3000/users/${id}`).then(resp => {
            return resp.data;
        })
    }

    deletarUsuario(id) {
        return axios.delete(`http://localhost:3000/users/${id}`).then(resp => {
            return resp.data;
        })
    }
}

export default new usersService