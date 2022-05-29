let list1, list2, querySelector1, querySelector2, value1, value2, temp;



document.querySelectorAll('.hex').forEach(item => {
    item.addEventListener('keyup', event => {
        let regEx = /^[0-9a-fA-F]+$/;
        let isHex = regEx.test(event.target.value.toString());
        if (!isHex) {
            item.value = item.value.slice(0, -1);
        }
    })
})

function getRegisterValue(event) {
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

function listChecker() {
    document.querySelector(querySelector1).style.border = 'none';
    document.querySelector(querySelector2).style.border = 'none';
    list1 = document.querySelector(querySelector1).value;
    list2 = document.querySelector(querySelector2).value;
    if (list1 === '-- select --') {
        document.querySelector(querySelector1).style.border = 'solid red 1px';
    }
    if (list2 === '-- select --') {
        document.querySelector(querySelector2).style.border = 'solid red 1px';
    }
}

function assignInputValue(list, temp) {
    switch (list) {
        case '1':
            document.querySelector('#ax').value = temp;
            break;
        case '2':
            document.querySelector('#bx').value = temp;
            break;
        case '3':
            document.querySelector('#cx').value = temp;
            break;
        case '4':
            document.querySelector('#dx').value = temp;
            break;
        default:
            break;
    }
}

//mov
document.querySelector('#mov').addEventListener('click', event => {
    querySelector1 = '#mov1';
    querySelector2 = '#mov2';
    listChecker();
    value1 = getRegisterValue(list1);
    temp = value1;
    assignInputValue(list2, temp)
})

//xchg
document.querySelector('#xchg').addEventListener('click', event => {
    querySelector1 = '#xchg1';
    querySelector2 = '#xchg2';
    listChecker();
    value1 = getRegisterValue(list1);
    value2 = getRegisterValue(list2);
    temp = value1;
    assignInputValue(list2, temp)
    temp = value2;
    assignInputValue(list1, temp)
})