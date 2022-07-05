import { RouteLocationNormalized } from "vue-router";
import { useUserStore } from '@/store/user-store';
import router from '../router'

export const BasicAuthGuard=(to:RouteLocationNormalized, from:RouteLocationNormalized)=>{
    const userStore = useUserStore();
    const user =userStore.getLoggedInUser;
    console.log({...userStore.loggedInUser});
    if(user?.id){
        return true;
    }
    router.push('/login');
    return false;
}