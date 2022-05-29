document.querySelectorAll('.hex').forEach(item => {
    item.addEventListener('keyup', event => {
        let regEx = /^[0-9a-fA-F]+$/;
        let isHex = regEx.test(event.target.value.toString());
        if (!isHex) {
            item.value = item.value.slice(0, -1);
        }
    })
})

function mov() {
    document.querySelector('#mov1').style.border = 'none';
    document.querySelector('#mov2').style.border = 'none';

    const list1 = document.querySelector('#mov1').value;
    const list2 = document.querySelector('#mov2').value;
    let value1 = getRegister(list1);
    let value2 = getRegister(list2);

    if (value1 == null) {
        document.querySelector('#mov1').style.border = 'solid red 1px';
    }
    if (value2 == null) {
        document.querySelector('#mov2').style.border = 'solid red 1px';
    }

    
}

function getRegister(event) {
    switch (event) {
        case '1':
            return document.querySelector('#ax').value;
        case '2':
            return document.querySelector('#bx').value;
        case '3':
            return document.querySelector('#cx').value;
        case '4':
            return document.querySelector('#dx').value;
        default:
            return null;

    }
}