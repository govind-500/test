import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'
//import Question5 from '../components/assignment-4(08-04-22)/Question5'
//import Question6 from '../components/assignment-4(08-04-22)/Question6'
//import Question7 from '../components/assignment-4(08-04-22)/QuestioN7'
import Question1 from '../components/assignment-5/QuestioN1'
import QuestioN2 from '../components/assignment-5/QuestioN2'
Vue.use(Router)
const routes=[
    
    {
       path:'/about',
       name:"About",
        component:Helloworld 
    },
    //{
      //  path:'/question5',
       // name:"question5",
       // component:Question5

    //},
    //{
      //  path:'/question6',
       // name:"question6",
        //component:Question6

    //},
    // {
    //     path:'/question7',
    //     name:"question7",
    //     component:Question7

    // }
    {
        path:'/Question1',
        name:"QuestioN1",
        component:Question1 
     },
     {
        path:'/Question2',
        name:"QuestioN2",
        component:QuestioN2 
     },

]
let router =new Router ({routes})
export default router