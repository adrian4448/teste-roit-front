import UserService from '@/services/usersService'

export default {
    state: {
        usuarios: [],
        usuarioToEdit: { endereco: {}, githubInfo: {} },
        tableColumns: [
            { text: "ID", value: "_id", sortable: false, align: "start" },
            { text: "Nome", value: "nome", sortable: true },
            { text: "Idade", value: "idade", sortable: true },
            { text: "GitHub User", value: "githubInfo.githubUser", sortable: true },
            { text: "Endereço", value: "enderecoCompleto", sortable: false },
            { text: "Ações", value: "actions", sortable: false },
        ]
    },
    mutations: {
        adicionarUsuario(state, usuario) {
            state.usuarios.push(usuario)
        },
        alterarUsuario(state, usuarioToAlter) {
            const indice = state.usuarios.findIndex(usuario => usuario._id == usuarioToAlter._id)
            state.usuarios.splice(indice, 1, usuarioToAlter)
            state.usuarioToEdit = {}
        },
        atualizarUsuarios(state, usuarios) {
            state.usuarios = usuarios;
        },
        deletarUsuario(state, usuario) {
            state.usuarios.splice(state.usuarios.indexOf(usuario), 1)
        },
        usuarioToEdit(state, usuario) {
            state.usuarioToEdit = usuario;
        }
    },
    actions: {
        adicionarUsuario({ commit }, usuario) {
            UserService.cadastrarUsuario(usuario).then(usuarioToAdd => {
                commit('adicionarUsuario', usuarioToAdd);
            })
        },
        alterarUsuario({ commit }, usuario) {
            UserService.alterarUsuario(usuario).then(() => {
                commit('alterarUsuario', usuario);
            })
        },
        atualizarUsuarios({ commit }, usuarios) {
            commit('atualizarUsuarios', usuarios);
        },
        deletarUsuario({ commit }, userId) {
            UserService.deletarUsuario(userId).then(usuario => {
                commit('deletarUsuario', usuario);
            });
        },
        setUsuarioToEdit({ commit }, id) {
            UserService.getUsuarioById(id).then(usuario => {
                commit('usuarioToEdit', usuario)
            });    
        }
    },
    getters: {
        usuarios(state) {
           return state.usuarios;
        },
        usuarioToEdit(state) {
            return state.usuarioToEdit;
        },
        showForm(state) {
            return state.showForm;
        },
        usuarioToSave(state) {
            return state.usuarioToEdit;
        },
        tableColumns(state) {
            return state.tableColumns;
        }
    }
}