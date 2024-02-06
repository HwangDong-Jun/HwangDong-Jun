
// let ina = document.querySelector('.todo-input'),
//     addBtn = document.querySelector('.add-button'),
//     items = document.querySelector('.item');


// ina.addEventListener('keyup', () => {
//     if (ina.value.trim() != 0) {
//         addBtn.classList.add('active')
//     } else {
//         addBtn.classList.remove('active')
//     }
// })


// addBtn.addEventListener('click', () => {
//     if (ina.value.trim() != 0) {
//         let newitem = document.createElement('div');
//         newitem.classList.add('work')
//         newitem.innerHTML = `
//             <p>${ina.value}</p>
//             <div>
//                 <button><i class="bi bi-x-circle"></i></button>
//                 <button><i class="bi bi-check"></i></button>
//             </div>
//         </div>
//             `
//         items.appendChild(newitem);
//         addBtn.value = '';
//     } else {
//         alert(`Please enter a task`)
//     }
// })

// items.addEventListener('click', (e) => {
//     if (e.target.classList.contains('bi-x-circle')) {
//         e.target.parentElement.parentElement.parentElement.remove();
//     }
// })

// items.addEventListener('click', (e) => {
//     if (e.target.classList.contains('bi-check')
//     ) {
//         e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
//     }
// })




let ina = document.querySelector('.todo-input'),
    addBtn = document.querySelector('.add-button'),
    items = document.querySelector('.item');

ina.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (ina.value.trim() !== '') {
            addItem();
        } else {
            alert('할 일을 입력하세요.');
        }
    } else {
        if (ina.value.trim() !== '') {
            addBtn.classList.add('active');
        } else {
            addBtn.classList.remove('active');
        }
    }
});

addBtn.addEventListener('click', () => {
    if (ina.value.trim() !== '') {
        addItem();
    } else {
        alert('할 일을 입력하세요.');
    }
});

function addItem() {
    let newitem = document.createElement('div');
    newitem.classList.add('work');
    newitem.innerHTML = `
        <p>${ina.value}</p>
        <div>
            <button><i class="bi bi-x-circle"></i></button>
            <button><i class="bi bi-check"></i></button>
        </div>
    </div>`;
    items.appendChild(newitem);
    ina.value = '';
    addBtn.classList.remove('active');
}

items.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-x-circle')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

items.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-check')) {
        e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
    }
});
