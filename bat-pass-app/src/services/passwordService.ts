export default function generatePass(){
    let password: string = ''
    let characters: string= 'ABCDEFGHIJKLMNOPQRSTUXZÇ1234567890abcdefghijklmnopqrstuvxyzç!@#$%¨&*(),.;<>:[]{}/?'
    let passwordLength = 8

    for(let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
    )
}
    return password

}