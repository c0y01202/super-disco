//captures a button click for a "save" button
$("#task-form-modal .btn-primary").click(function () {});

//saves tasks object in local storage
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
