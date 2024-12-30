let username='';

export function getuser(){
   return username
}
export function setUsername(name){
    username=name
    console.log(`welcome${username}`)
  }