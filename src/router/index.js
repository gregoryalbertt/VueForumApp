import {createRouter, createWebHistory} from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'

import sourceData from '@/data.json'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: PageHome 
    },
    { 
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow ,
        props: true,
        beforeEnter(to, from, next){
            //check if exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            // if exists, continue
            if(threadExists){
                return next()
            } else{
                next(
                    {
                            name: 'NotFound',
                            // preserve current path and remove the first char to avoid the target URL starting with `//`
                            params: { pathMatch: to.path.substring(1).split('/') },
                            query: to.query,
                            hash: to.hash
                    }
                )
            }
            // if doesnt, redirect

        }
    },
    {   path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: PageNotFound },
        {
            path: '/forum/:id',
            name: 'Forum',
            component: PageForum,
            props: true

        }

  ]

  export default createRouter({
    
    history: createWebHistory(),
    routes, 
  })