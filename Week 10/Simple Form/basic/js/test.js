function validateForms(evt){
    const name = document.getElementById('name').value;

    console.log('form validation: name=' + name);

    if (name.length == 0){
        console.log('form invalid')
        evt.preventDefault();
        return false;
    }
        console.log('form valid')
        return true;
} 

window.onload = () =>{
    document.getElementById('testform').onsubmit = validateForms
}