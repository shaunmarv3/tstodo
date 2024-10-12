var task = document.getElementById('task');
var list = document.getElementById('list');
var tasklen = document.getElementsByTagName('li');
function go() {
    if (tasklen.length > 10) {
        alert("please complete present tasks");
        return;
    }
    if (task.value === '') {
        alert("Enter something!!!");
    }
    else {
        var ni = document.createElement('li');
        var di = document.createElement('div');
        var checkb = document.createElement('input');
        checkb.type = 'checkbox';
        checkb.id = task.value;
        checkb.addEventListener('change', TaskCount);
        var labe = document.createElement('label');
        labe.htmlFor = task.value;
        labe.innerText = task.value;
        di.appendChild(checkb);
        di.appendChild(labe);
        di.classList.add('ml-2');
        ni.appendChild(di);
        list.appendChild(ni);
        var rem = document.createElement('button');
        rem.classList.add('bg-orange-500', 'text-white', 'cursor-pointer', 'rounded-md', 'w-[50px]', 'pb-1', 'hover:bg-yellow-500');
        rem.innerHTML = "x";
        ni.appendChild(rem);
        ni.classList.add('flex', 'justify-between', 'mx-2', 'bg-blue-400', 'rounded-md');
        task.value = '';
        TaskCount();
    }
}
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        TaskCount();
    }
});
function TaskCount() {
    var tasks = document.querySelectorAll("#list li");
    var completedTasks = document.querySelectorAll("#list input[type='checkbox']:checked");
    document.getElementById("completed").innerHTML = completedTasks.length.toString();
    document.getElementById("incomplete").innerHTML = (tasks.length - completedTasks.length).toString();
}
