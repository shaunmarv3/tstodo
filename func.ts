let task = document.getElementById('task') as HTMLInputElement;
const list = document.getElementById('list') as HTMLElement;
let tasklen = document.getElementsByTagName('li');

function go(): void {
    if (tasklen.length > 10) {
        alert("please complete present tasks");
        return;
    }

    if (task.value === '') {
        alert("Enter something!!!");
    } else {
        let ni = document.createElement('li');
        let di = document.createElement('div');

        let checkb = document.createElement('input');
        checkb.type = 'checkbox';
        checkb.id = task.value;
        checkb.addEventListener('change', TaskCount);

        let labe = document.createElement('label');
        labe.htmlFor = task.value;
        labe.innerText = task.value;

        di.appendChild(checkb);
        di.appendChild(labe);
        di.classList.add('ml-2');
        ni.appendChild(di);
        list.appendChild(ni);

        let rem = document.createElement('button');
        rem.classList.add('chigga');
        rem.innerHTML = "x";
        ni.appendChild(rem);
        ni.classList.add('zigga');
        task.value = '';
        TaskCount();
    }
}

list.addEventListener('click', function (event): void {
    if ((event.target as HTMLElement).tagName === 'BUTTON') {
        (event.target as HTMLElement).parentElement.remove();
        TaskCount();
    }
});

function TaskCount(): void {
    const tasks = document.querySelectorAll("#list li");
    const completedTasks = document.querySelectorAll("#list input[type='checkbox']:checked");

    document.getElementById("completed")!.innerHTML = completedTasks.length.toString();
    document.getElementById("incomplete")!.innerHTML = (tasks.length - completedTasks.length).toString();
}
