const header=resolve=>{
    require.ensure(['./components/header/header.vue'],()=>{
        resolve(require('./components/header/header.vue'))
    })
}
const singup=resolve=>{
    require.ensure(['./components/auth/singup'],()=>{
        resolve(require('./components/auth/singup'))
    })
}
const signin=resolve=>{
    require.ensure(['./components/auth/signin'],()=>{
        resolve(require('./components/auth/signin'))
    })
}
const dashboard=resolve=>{
    require.ensure(['./components/dashboard/dashboard'],()=>{
        resolve(require('./components/dashboard/dashboard'))
    })
}
const Welcome=resolve=>{
    require.ensure([ './components/home/welcome'],()=>{
        resolve(require( './components/home/welcome'))
    })
}
const User=resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/User.vue'))
    })
}
const UserDeatils=resolve=>{
    require.ensure(['./components/user/UserDeatils.vue'],()=>{
        resolve(require('./components/user/UserDeatils.vue'))
    })
}
const UserStart=resolve=>{
    require.ensure(['./components/user/UserStart.vue'],()=>{
        resolve(require('./components/user/UserStart.vue'))
    })
}
const UserEdit=resolve=>{
    require.ensure(['./components/user/UserEdit.vue'],()=>{
        resolve(require('./components/user/UserEdit.vue'))
    })
}
const vuex=resolve=>{
    require.ensure(['./components/Vuex/Vuex'],()=>{
        resolve(require('./components/Vuex/Vuex'))
    })
}

const Directives=resolve=>{
    require.ensure(['./components/Conditionals/Directives'],()=>{
        resolve(require('./components/Conditionals/Directives'))
    })
}
const instance=resolve=>{
    require.ensure(['./components/Conditionals/instance'],()=>{
        resolve(require('./components/Conditionals/instance'))
    })
}


export const routes=[
{path:'/header',component: header, name:'header' },
{path:'/singup',component:singup,name:'singup'},
{path:'/signin',component:signin,name:'signin'},
{path:'/dashboard',component:dashboard,name:'dashboard'},
{path:'/Welcome',component:Welcome,name:'Welcome'},
{path:'/User',component:User,children:[
    {path:'',component:UserStart},
    {path:':id',component:UserDeatils},
    {path:':id/edit',component:UserEdit, name :'useredit'}]}, 
    {path:'/vuex',component:vuex,children:[]}, 
    {path:'/Directives',component:Directives},
    {path:'/instance',component:instance}

    //  {path:'*',redirect:'/'} ,
]


