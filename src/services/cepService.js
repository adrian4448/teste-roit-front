import axios from 'axios';

class CepService {
    getAdressByCep(cep) {
        return axios(`https://viacep.com.br/ws/${cep}/json/`).then(resp => {
            return resp.data
        });
    }
}

export default new CepService;
