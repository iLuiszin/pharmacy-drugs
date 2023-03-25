let medicines = []

function addMedicine() {
  event.preventDefault()

  let medicine = {
    medName: document.getElementById('fname').value,
    medQtd: document.getElementById('fqtd').value,
    medClass: document.getElementById('fclass').value,
  }

  if (
    medicine.medName === '' ||
    medicine.medQtd === '' ||
    medicine.medClass === ''
  ) {
    alert('Preencha todos os campos')
  } else {
    document.getElementById('fname').value = ''
    document.getElementById('fqtd').value = ''
    document.getElementById('fclass').value = ''

    medicines.push(medicine)

    renderTable()
  }
}

function renderTable() {
  let table = document.getElementById('dataTable')

  table.innerHTML = `<thead>
        <th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>Classe de Medicamento</th>
        <th id="remove">Remover</th>
    </thead>`

  for (let i = 0; i < medicines.length; i++) {
    table.innerHTML += `<tbody>
        <td>${i}</td>
        <td>${medicines[i].medName}</td>
        <td>${medicines[i].medQtd}</td>
        <td>${medicines[i].medClass}</td>
        <td><img src="./img/trash.svg" alt="Lixo para deletar" onclick="removeItem(${i})"></td>
    </tbody>`
  }
}

function removeItem(index) {
  medicines.splice(index, 1)
  renderTable()
}
