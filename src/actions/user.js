export const RECEIVE_USER='Receive_User'


export function users(users){
    return{
        type: RECEIVE_USER,
        users
    }
}
