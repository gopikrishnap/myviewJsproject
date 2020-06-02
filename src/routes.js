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


export const routes=[
{path:'/header',component: header, name:'header' },
{path:'/singup',component:singup,name:'singup'},
{path:'/signin',component:signin,name:'signin'},
{path:'/dashboard',component:dashboard,name:'dashboard'},
{path:'/Welcome',component:Welcome,name:'Welcome'}

]


