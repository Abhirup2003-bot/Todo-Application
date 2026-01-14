const buttonElem = document.getElementById("btn");
// add eventListener to btn
buttonElem.addEventListener(
  "click",
  function () {
    const inputElem = document.querySelector("#Name");
    const divElem = document.querySelector("#div");
    if (inputElem.value === "") return;
    const obj = {
      id: Date.now(),
      userName: inputElem.value,
      isCompleted: false,
    };

    // dynamically create a paragraph then append to the div
    let paraElem = document.createElement("p");
    paraElem.id = "paraId";
    paraElem.innerHTML = `Hello, ${obj.userName}`;
    divElem.appendChild(paraElem);
    console.log(paraElem);

    // dynamically create a edit button then append to the div
    const editbtn = document.createElement("button");
    editbtn.id = "editId";
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn-cls");
    divElem.appendChild(editbtn);
    // console.log(editbtn);

    // dynamically create a delete button then append to the div
    const deletebtn = document.createElement("button");
    deletebtn.id = "deleteId";
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("deletebtn-cls");
    divElem.appendChild(deletebtn);
    // console.log(deletebtn);

    // Add a Event Listener to edit button then add a input text and edit button became save button
    // Display the edited text with edit and delete button;

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
      divElem.appendChild(nameElem);

      const btnForEdit = document.createElement("button");
      btnForEdit.innerText = "Save";
      btnForEdit.classList.add("btn-cls");
      divElem.appendChild(btnForEdit);

      btnForEdit.addEventListener("click", function () {
        label.remove();
        nameElem.remove();
        btnForEdit.remove();

        paraElem.innerText = `Hello, ${nameElem.value}`;
        divElem.appendChild(paraElem);
        divElem.appendChild(editbtn);
        divElem.appendChild(deletebtn);
      });
    });

    // add Event Listener to the delete btn to delete the div elements

    deletebtn.addEventListener("click", function () {
      paraElem.remove();
      editbtn.remove();
      deletebtn.remove();
    });

    inputElem.value = "";
  },
  false
);
