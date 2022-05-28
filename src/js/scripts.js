document.querySelectorAll('.hex').forEach(item => {
    item.addEventListener('keyup', event => {
        let regEx = /^[0-9a-fA-F]+$/;
        let isHex = regEx.test(event.target.value.toString());
        if (!isHex) {
            item.value = item.value.slice(0, -1);
        }
    })
})