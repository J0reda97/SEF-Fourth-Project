import data from './products.json' assert { type: 'json' };

const dataContainer = document.querySelector('#data-container');
const sortType = document.querySelector('#sort-type');
const searchInput = document.querySelector('#search');

function drawData() {
    searchInput.value = '';
    dataContainer.innerHTML = '';

    const sortedData = sortData(data, sortType.value);
    renderData(sortedData);
}

function sortData(data, sortType) {
    if (sortType === 'name') {
        return data.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'cat') {
        return data.slice().sort((a, b) => a.category.localeCompare(b.category));
    }

    return data;
}

function renderData(data) {
    data.forEach((item) => {
        const card = createCard(item);
        dataContainer.appendChild(card);
    });
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4 mb-4';

    const cardInnerHtml = `
    <div class="card">
      <img src="${item.imgSrc}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h4 class="card-title">Name: ${item.name}</h4>
        <h5 class="card-title">Price: ${item.price}</h5>
        <h6 class="card-title">Category: ${item.category}</h6>
        <br>
        <div class="d-flex align-items-center justify-content-between">
          <button class="btn btn-primary addToCart">Add to cart</button>
          <i class="fa-solid fa-heart fa-xl"></i>
        </div>
      </div>
    </div>
  `;

    card.innerHTML = cardInnerHtml;
    return card;
}

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
    );

    dataContainer.innerHTML = '';
    renderData(filteredData);
}

function initializePage() {
    drawData();
    sortType.onchange = drawData;
    searchInput.onkeyup = search;

    const addToCartBtns = document.querySelectorAll('.addToCart');

    addToCartBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (localStorage.getItem('username') !== null) {

            } else {
                window.location.assign('../pages/register.html');
            }
        });
    });
}

window.onload = initializePage;