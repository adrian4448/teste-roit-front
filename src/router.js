import Vue from 'vue'
import Router from 'vue-router'

import PersonView from './views/PersonView.vue'
import Form from './components/Form.vue'
import DeleteDialog from './components/DeleteDialog.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { 
            path: '/usuarios', 
            component: PersonView,
            children:
            [
                { path: 'add', component: Form },
                { path: 'edit/:id', component: Form, props: true },
                { path: 'delete/:id', component: DeleteDialog, props: true }
            ]
        },
        {
            path: '*',
            redirect: '/usuarios'
        }
    ]
})