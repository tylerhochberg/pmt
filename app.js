const taskTable = document.querySelector('#tasktable');
const taskBody = document.querySelector('#taskbody');
const newTaskBtn = document.querySelector("#newtask");
let taskInputs = document.querySelector("input");

let availableRows = 0;
availableRows = taskTable.rows.length - 1;

let templateRow = `<tr id='row${availableRows}'>
                            <td class='checkmark-wrap'>
                                <label>
                                    <input type='checkbox' class='checkmark'>
                                </label>
                            </td>
                            <td><input type='text' name='taskname' class='tabletext' id='field${availableRows}'></td>
                            <td>Tyler</td>
                            <td class='status'>In Progress</td>
                            <td>June 2025</td>
                        </tr>`;


const templatePlaceholderRow = `<tr>
                            <td class="placeholder-row">
                                <label>
                                    <input type="checkbox" class="checkmark" disabled>
                                </label>
                            </td>
                            <td class="last-row"><input type="text" name="taskname" placeholder="Add New Task" class="tabletext placeholder-textfield"></td>
                        </tr>`

newTaskBtn.addEventListener('click', () => {
    availableRows += 1;
    let newRow = document.createElement('tr');
    newRow.innerHTML = templateRow;
    taskBody.appendChild(newRow);
});

