const buttonElem = document.getElementById("btn");
const divElem = document.querySelector("#div");

function getDataFromStorage() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveDataToStorage(data) {
  localStorage.setItem("users", JSON.stringify(data));
}

window.addEventListener("DOMContentLoaded", function () {
  const users = getDataFromStorage();
  users.forEach((obj) => createUI(obj));
});

function createUI(obj) {
  // dynamically create a paragraph then append to the div
  let paraElem = document.createElement("p");
  paraElem.id = "paraId";
  paraElem.innerHTML = `Hello, ${obj.userName}`;
  divElem.appendChild(paraElem);

  // dynamically create a edit button
  const editbtn = document.createElement("button");
  editbtn.id = "editId";
  editbtn.innerText = "Edit";
  editbtn.classList.add("btn-cls");
  divElem.appendChild(editbtn);

  // dynamically create a delete button
  const deletebtn = document.createElement("button");
  deletebtn.id = "deleteId";
  deletebtn.innerText = "Delete";
  deletebtn.classList.add("deletebtn-cls");
  divElem.appendChild(deletebtn);

  editbtn.addEventListener("click", function () {
    paraElem.remove();
    editbtn.remove();
    deletebtn.remove();

    const label = document.createElement("label");
    label.innerText = "Name";
    label.classList.add("lable-cls");
    divElem.appendChild(label);

    const nameElem = document.createElement("input");
    nameElem.classList.add("nameElem-cls");
    nameElem.value = obj.userName;
    divElem.appendChild(nameElem);

    const btnForEdit = document.createElement("button");
    btnForEdit.innerText = "Update";
    btnForEdit.classList.add("btn-cls");
    divElem.appendChild(btnForEdit);

    btnForEdit.addEventListener("click", function () {
      label.remove();
      nameElem.remove();
      btnForEdit.remove();

      obj.userName = nameElem.value;

      let users = getDataFromStorage();
      users = users.map((item) => (item.id === obj.id ? obj : item));
      saveDataToStorage(users);

      paraElem.innerText = `Hello, ${obj.userName}`;
      divElem.appendChild(paraElem);
      divElem.appendChild(editbtn);
      divElem.appendChild(deletebtn);
    });
  });

  deletebtn.addEventListener("click", function () {
    paraElem.remove();
    editbtn.remove();
    deletebtn.remove();

    let users = getDataFromStorage();
    users = users.filter((item) => item.id !== obj.id);
    saveDataToStorage(users);
  });
}

buttonElem.addEventListener(
  "click",
  function () {
    const inputElem = document.querySelector("#Name");
    if (inputElem.value === "") return;

    const obj = {
      id: Date.now(),
      userName: inputElem.value,
      isCompleted: false,
    };

    const users = getDataFromStorage();
    users.push(obj);
    saveDataToStorage(users);

    createUI(obj);

    inputElem.value = "";
  },
  false,
);
