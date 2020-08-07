document.querySelector('#add-time')

.addEventListener('click', clonoField)

function clonoField() {
    const fields = document.querySelector('.schedule-item').cloneNode(true)

    document.querySelector('#schedule-items').appendChild(fields)
}

//huasdhuasuhd huhuhhuhu uhasuhasuhasu hausdhaushd