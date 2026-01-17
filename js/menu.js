const menus = [
  {
    nama: "Burger Ayam Crispy",
    deskripsi: "Ayam goreng renyah dengan keju, selada segar, dan saus khas Eatery Cafe.",
    harga: "15.000",
    kategori: "makanan",
    gambar: "images/food1.jpg"
  },
  {
    nama: "Roti Panggang Keju Lumer",
    deskripsi: "Roti panggang dengan keju lumer dan selada segar.",
    harga: "12.000",
    kategori: "makanan",
    gambar: "images/food2.jpg"
  },

  {
    nama: "Pizza Daging Keju Spesial",
    deskripsi: "Pizza dengan daging sapi panggang dan keju mozzarella.",
    harga: "25.000",
    kategori: "makanan",
    gambar: "images/food3.jpg"
  },

  {
    nama: "Roti Ayam Panggang Spesial",
    deskripsi: "Roti panjang isi ayam panggang berbumbu, sayuran segar, dan saus spesial.",
    harga: "18.000",
    kategori: "makanan",
    gambar: "images/food4.jpg"
  },

  {
    nama: "Roti Ayam Lumer",
    deskripsi: "Roti lembut berisi ayam suwir dengan saus krim gurih dan sayuran segar.",
    harga: "18.000",
    kategori: "makanan",
    gambar: "images/food5.jpg"
  },
  
  {
    nama: "Beef Cheese Wrap",
    deskripsi: "Roti lembut berisi daging sapi panggang, keju, dan sayuran segar.",
    harga: "15.000",
    kategori: "makanan",
    gambar: "images/food6.jpg"
  },

  {
    nama: "Cookies and Cream Frappucino",
    deskripsi: "Minuman dingin creamy dengan rasa cookies cokelat yang rich dan nagih.",
    harga: "10.000",
    kategori: "minuman",
    gambar: "images/drink1.jpg"
  },

  {
    nama: "Creamy Strawberry Milkshake",
    deskripsi: "Minuman creamy dengan rasa stroberi yang lembut dan manis.",
    harga: "10.000",
    kategori: "minuman",
    gambar: "images/drink2.jpg"
  },

  {
    nama: "Choco Drizzle Milkshake",
    deskripsi: "Milkshake cokelat lembut dengan siraman cokelat yang menggoda.",
    harga: "10.000",
    kategori: "minuman",
    gambar: "images/drink3.jpg"
  },

  {
    nama: "Chocolate Crumble Milk Tea",
    deskripsi: "Perpaduan milk tea creamy dengan topping cokelat crumble yang melimpah, cocok untuk pecinta rasa manis.",
    harga: "10.000",
    kategori: "minuman",
    gambar: "images/drink4.jpg"
  },

  {
    nama: "Brown Sugar Boba Milk Tea",
    deskripsi: "Milk tea creamy dengan boba kenyal dan sirup brown sugar yang harum dan legit.",
    harga: "6.000",
    kategori: "minuman",
    gambar: "images/drink5.jpg"
  },

  {
    nama: "Strawberry Smoothie Tea",
    deskripsi: "Perpaduan teh dan stroberi yang diblender halus, menghasilkan minuman segar dengan tekstur lembut.",
    harga: "5.000",
    kategori: "minuman",
    gambar: "images/drink6.jpg"
  }
];


const menuGrid = document.getElementById("menuGrid");

function renderMenu(filter = "all") {
  menuGrid.innerHTML = "";

  menus.forEach(menu => {
    if (filter === "all" || menu.kategori === filter) {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.dataset.category = menu.kategori;

      const waText = encodeURIComponent(
        `Halo, saya ingin memesan ${menu.nama}`
      );

      card.innerHTML = `
        <img src="${menu.gambar}" alt="${menu.nama}">
        <div class="menu-card-body">
          <h5>${menu.nama}</h5>
          <p>${menu.deskripsi}</p>
          <div class="menu-footer">
            <span class="price">${menu.harga}</span>
            <a href="https://wa.me/628812942590?text=${waText}" 
               target="_blank"
               class="btn-order">
               Pesan Sekarang
            </a>
          </div>
        </div>
      `;

      menuGrid.appendChild(card);
    }
  });
}

renderMenu();



const filterLinks = document.querySelectorAll(".filter-link");

filterLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    filterLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;
    renderMenu(filter);
  });
});
