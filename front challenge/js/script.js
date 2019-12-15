var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["nombre"] = document.getElementById("nombre").value;
    formData["categoria"] = document.getElementById("categoria").value;
    formData["marca"] = document.getElementById("marca").value;
    formData["precio"] = document.getElementById("precio").value; 
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nombre;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.categoria;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.marca;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.precio; 
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)"><button type="button" class="btn btn-outline-primary">Editar</button></a>
                       <a onClick="onDelete(this)"><button type="button" class="btn btn-outline-primary">Borrar</button></a>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("precio").value = "";  
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("categoria").value = selectedRow.cells[2].innerHTML;
    document.getElementById("marca").value = selectedRow.cells[3].innerHTML;
    document.getElementById("precio").value = selectedRow.cells[4].innerHTML; 
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.nombre;
    selectedRow.cells[2].innerHTML = formData.categoria;
    selectedRow.cells[3].innerHTML = formData.marca;
    selectedRow.cells[4].innerHTML = formData.precio; 
}

function onDelete(td) {
    if (confirm('Esta seguro que desea eliminar la fila?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}