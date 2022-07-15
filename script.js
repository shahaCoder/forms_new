let form = document.forms.newfr
let inputs = form.querySelectorAll('.check')
let zero = document.querySelector('.zero')
let success = document.querySelector('.success')
form.onsubmit = (event) => {
    event.preventDefault()
    let one = 0
    inputs.forEach(inp => {
       if(inp.classList.contains('invalid') || inp.value.length === 0){
         one++
         inp.classList.add('invalid')
         let parent = inp.parentNode
        let lab = parent.querySelector('label')
        lab.style.display = 'inline'
        let img = parent.querySelector('.error-img')
        img.style.display = 'inline'
        zero.innerHTML++
       } else{
        success.innerHTML++
       }
    })
    if(one > 0){
        // zero.innerHTML++
     } else{
      submit()
      success.innerHTML++
     }
}
function submit() {
    let user = {}
    let frmdt = new FormData(form)
    frmdt.forEach((value, key)=> {
        user[key] = value
    })
    console.log(user);
}
let patterns = {
    name: /^[a-zA-Z а-я]+$/,
    info: /^[a-zA-Z а-я]+$/,
    js: /^[a-zA-Z а-я]+$/,
    css: /^[a-zA-Z а-я]+$/,
    html: /^[a-zA-Z а-я]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/,
}
function validate(field, regex){
    if(regex.test(field.value)){
        field.classList.add('valid')
        field.classList.remove('invalid')
        let newpr = field.parentNode
        let newimg = newpr.querySelector('.mark')
        newimg.style.display = 'inline'
        let parent = field.parentNode
        let lab = parent.querySelector('label')
        lab.style.display = 'none'
        let img = parent.querySelector('.error-img')
        img.style.display = 'none'
    } else{
        field.classList.add('invalid')
        field.classList.remove('valid')
        let parent = field.parentNode
        let lab = parent.querySelector('label')
        lab.style.display = 'inline'
        let img = parent.querySelector('.error-img')
        img.style.display = 'inline'
    }
}
inputs.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp,patterns[inp.name])
    }
})
