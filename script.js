const dialog = document.querySelectorAll('dialog')[0];
const endDialog = document.querySelectorAll('dialog')[1];

dialog.showModal();

const inputs = document.querySelectorAll('input[type="checkbox"]');
const doneButton = document.getElementById('done');
const editButtons = document.querySelectorAll('button[id="edit"]');
const removeButtons = document.querySelectorAll('button[id="remove"]');

dialog.onchange = update;
dialog.onsubmit = showNextModal;

function update() {
  const checked = Array.from(inputs).filter((input) => input.checked);    
  doneButton.disabled = checked.length < 10;
}

function showNextModal() {    
  endDialog.showModal();
}

editButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const label = e.target.previousElementSibling; // Get the label next to the button
    const newText = prompt("Edit your task:", label.innerText);
    if (newText !== null) {
      label.innerText = newText;
    }
  });
});

removeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const taskDiv = e.target.parentElement; 
    taskDiv.remove();
  });
});
