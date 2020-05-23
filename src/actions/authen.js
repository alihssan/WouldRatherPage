export const authUser='Authenticated_User';

export function authuser(id){
    return{
        type:authUser,
        id
    }
}
