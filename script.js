let but1 = document.getElementById("but1")
but1.onclick = function () {
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    let edit = document.getElementById("edit");
    let form = document.getElementById('form');
    let prof = document.getElementById('profile');
    let name = document.getElementById('name');
    let pas = document.getElementById('pas');
    let aa =  false;
    let bb =  false;
    if (inp1.value == '') {
        inp1.style.border = 'solid 1px red';
        inp1.setAttribute('placeholder', 'The Username is empty')
    }
    if (inp1.value.length > 0 && inp1.value.length < 9) {
        inp1.style.border = 'solid 1px red';
        inp1.value = '';
        inp1.setAttribute('placeholder', ' Must be more than eight letter')
    } else if (inp1.value.length > 9) {
        inp1.style.border = 'solid 1px #89c06a';
        aa = true;
    }
    if (inp2.value == '') {
        inp2.style.border = 'solid 1px red';
        inp2.setAttribute('placeholder', 'The Password is empty')
    }
    if (inp2.value.length > 0 && inp2.value.length < 9) {
        inp2.style.border = 'solid 1px red';
        inp2.value = '';
        inp2.setAttribute('placeholder', 'Must be more than eight letter')
    } else if (inp2.value.length > 9) {
        inp2.style.border = 'solid 1px #89c06a';
        bb = true;
    }
    if (aa == true && bb == true) {
        name.innerHTML = inp1.value;
        pas.innerHTML = inp2.value;
        name.style.color = '#4CAF50';
        pas.style.color = '#4CAF50';
        form.style.display = 'none';
        prof.style.display = 'block';
        let img =  document.getElementById('img')
        let x = Math.round(Math.random() * 100);
        console.log(x);
        if (x <  20) {
            img.innerHTML = '<img src="ava.png" alt="" width="50%">'      
        }
        if (x > 20) {
            img.innerHTML = '<img src="ava2.png" alt="" width="30%">'      
        }
        if (x > 50) {
            img.innerHTML = '<img src="ava3.png" alt="" width="30%">'      
        }
        if (x > 80) {
            img.innerHTML = '<img src="ava4.png" alt="" width="25%">'      
         }
    }
    
    edit.onclick = function () {
        name.style.display = 'none';
        pas.style.display = 'none';
        edit.innerHTML = 'SAVE';
        let name2 = document.getElementById('name2');
        let pas2 = document.getElementById('pas2');
        name2.setAttribute('placeholder', 'Change Username');
        pas2.setAttribute('placeholder', 'Change Password');
        name2.style.display = 'block';
        pas2.style.display = 'block';
        edit.onclick = function () {
            if (name2.value.length < 9 && pas2.value.length < 9) {
                name2.style.border = 'solid 1px red';
                pas2.style.border = 'solid 1px red';
            } else {
                name.style.display = 'block';
                pas.style.display = 'block';
                name2.style.display = 'none';
                pas2.style.display = 'none';
                name.innerHTML = name2.value;
                pas.innerHTML = pas2.value;
            }
        }
     }
}



