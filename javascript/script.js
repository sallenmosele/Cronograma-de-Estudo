let scheduleList = [];

function addSchedule() {
    let subject = document.getElementById("subject").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;

    if (subject && day && time) {
        let schedule = {
            subject: subject,
            day: day,
            time: time
        };

        scheduleList.push(schedule);
        displaySchedule();
        clearForm();
    }
}

function displaySchedule() {
    let scheduleTable = document.getElementById("scheduleList");
    scheduleTable.innerHTML = "";

    scheduleList.forEach(function (schedule, index) {
        let row = scheduleTable.insertRow();

        let subjectCell = row.insertCell(0);
        subjectCell.innerHTML = schedule.subject;

        let dayCell = row.insertCell(1);
        dayCell.innerHTML = schedule.day;

        let timeCell = row.insertCell(2);
        timeCell.innerHTML = schedule.time;

        let deleteCell = row.insertCell(3);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Deletar";
        deleteButton.onclick = function () {
            deleteSchedule(index);
        };
        deleteCell.appendChild(deleteButton);
    });
}

function deleteSchedule(index) {
    scheduleList.splice(index, 1);
    displaySchedule();
}

function clearForm() {
    scheduleList.clearForm;
}
