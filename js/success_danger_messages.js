function message() {
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var Phonenumber = document.getElementById('phonenumber');
    var Message = document.getElementById('message');
    const Success = document.getElementById('success');
    const Danger = document.getElementById('danger');

    if(Name.value === '' || Email.value === '' || Phonenumber.value ==='' || Message.value === '') {
        Danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Phonenumber.value = '';
            Message.value = '';
        }, 2000);

        Success.style.display = 'block';
    }

    setTimeout(() => {
        Danger.style.display = 'none';
        Success.style.display = 'none';
    }, 4000);

}

function message2() {
    var Email = document.getElementById('email2');
    const Success = document.getElementById('success2');
    const Danger = document.getElementById('danger2');

    if(Email.value === '') {
        Danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            Email.value = '';
        }, 2000);

        Success.style.display = 'block';
    }

    setTimeout(() => {
        Danger.style.display = 'none';
        Success.style.display = 'none';
    }, 4000);

}