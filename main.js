console.log('заработало')
const password = document.getElementById('password')
const chek = document.getElementById('chek')

chek.addEventListener('click',function(){
    console.log('заработало')

    if (password.type === 'password'){
        password.type = 'text'
        chek.textContent='Скрыть'
    
    }else{
        password.type='password'
        chek.textContent='Показать'
    }

});