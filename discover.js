document.getElementById("discover-btn").addEventListener("click", function (event) {
    window.location.href = "./index1.html"


})
clearHistory.addEventListener("click", () => {
    historyLog.innerHTML = "";

});
const image = document.getElementById('colorChangeImage');
const body = document.body;

image.addEventListener('click', () => {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const dateElement = document.getElementById('currentDate');
const currentDate = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
const taskCountElement = document.getElementById('taskCount');
let taskCount = parseInt(taskCountElement.textContent);

const completedCountElement = document.getElementById('completedCount');
let completedCount = parseInt(completedCountElement.textContent);

const activityLog = document.getElementById('activityLog');
const clearHistoryButton = document.getElementById('clearHistory');

const completeButtons = document.querySelectorAll('.complete-btn');
completeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (taskCount > 0) {
            taskCount--;
            taskCountElement.textContent = taskCount.toString();
            completedCount++;
            completedCountElement.textContent = completedCount.toString();
            button.disabled = true;
            button.classList.remove('bg-green-500');
            button.classList.add('bg-gray-400');
            alert("Board Update Successfully!");
           
            if (button.dataset.taskId.length>"6") {
                alert("Congratulations! You have completed all the current tasks.!");             
         }
            const now = new Date();
            const time = now.toLocaleTimeString();

            const logMessage = `You have Completed the Task : ${button.dataset.taskId} at ${time}`;
            const logItem = document.createElement('p');
            logItem.textContent = logMessage;
            logItem.classList.add('bg-gray-100', 'p-2', 'mb-2', 'rounded');
            activityLog.appendChild(logItem);
        }
    });
});

clearHistoryButton.addEventListener('click', () => {
    activityLog.innerHTML = '';
});