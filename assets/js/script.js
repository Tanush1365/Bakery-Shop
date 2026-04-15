const products = [
  {
    id: 1,
    name: "Contour Wool Coat",
    category: "women",
    price: 189,
    color: "Beige",
    size: ["S", "M", "L"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A softly structured coat cut in an oversized silhouette with premium wool blend texture.",
    featured: true
  },
  {
    id: 2,
    name: "Noir Layered Set",
    category: "men",
    price: 142,
    color: "Black",
    size: ["M", "L"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506629905607-d9c297dcb59c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506629905607-d9c297dcb59c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Relaxed street tailoring with a monochrome palette, designed for effortless everyday layering.",
    featured: true
  },
  {
    id: 3,
    name: "Ivory Flow Shirt",
    category: "women",
    price: 96,
    color: "White",
    size: ["XS", "S", "M"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A fluid button-up with an airy drape and softly polished finish for elevated daily wear.",
    featured: true
  },
  {
    id: 4,
    name: "Olive Utility Jacket",
    category: "men",
    price: 168,
    color: "Olive",
    size: ["S", "M", "L"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506629905607-d9c297dcb59c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A clean utility layer with sharp seams, soft structure, and a modern urban profile.",
    featured: true
  },
  {
    id: 5,
    name: "Beige Pleated Trousers",
    category: "women",
    price: 118,
    color: "Beige",
    size: ["S", "M", "L"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Tailored pleats and a long relaxed line make this a refined staple for day-to-night styling.",
    featured: false
  },
  {
    id: 6,
    name: "Monarch Knit Polo",
    category: "men",
    price: 88,
    color: "Black",
    size: ["M", "L"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506629905607-d9c297dcb59c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A textured knit polo with a smart collar and lightweight stretch for polished casual looks.",
    featured: false
  }
];

const body = document.body;
const cartKey = "demonWearCart";
const themeKey = "demonWearTheme";
let activeSize = "M";

const getCart = () => JSON.parse(localStorage.getItem(cartKey) || "[]");
const setCart = (cart) => localStorage.setItem(cartKey, JSON.stringify(cart));

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function renderProducts(list, target, compact = false) {
  if (!target) return;

  target.innerHTML = list.map((product) => `
    <article class="product-card reveal visible">
      <a class="product-thumb" href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-meta">
        <small>${product.category === "women" ? "Women" : "Men"} / ${product.color}</small>
        <h3>${product.name}</h3>
        <span class="rating">${product.rating} rating</span>
        <div class="price-line">
          <strong>$${product.price}</strong>
          <div class="product-actions">
            ${compact ? "" : `<button class="icon-button" type="button" data-wishlist="${product.id}" aria-label="Add to wishlist">♡</button>`}
            <button class="icon-button" type="button" data-add-cart="${product.id}" aria-label="Add to cart">+</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function applyFilters() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid || body.dataset.page !== "products") return;

  const category = document.querySelector('[data-filter="category"]').value;
  const price = document.querySelector('[data-filter="price"]').value;
  const size = document.querySelector('[data-filter="size"]').value;
  const color = document.querySelector('[data-filter="color"]').value;

  const filtered = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const sizeMatch = size === "all" || product.size.includes(size);
    const colorMatch = color === "all" || product.color === color;
    const priceMatch =
      price === "all" ||
      (price === "under100" && product.price < 100) ||
      (price === "100to160" && product.price >= 100 && product.price <= 160) ||
      (price === "over160" && product.price > 160);

    return categoryMatch && sizeMatch && colorMatch && priceMatch;
  });

  renderProducts(filtered, grid);
  const countNode = document.querySelector("[data-product-count]");
  if (countNode) countNode.textContent = filtered.length;
}

function addToCart(productId, size = activeSize) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find((item) => item.id === productId && item.size === size);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity: 1
    });
  }

  setCart(cart);
  updateCartCount();
}

function renderProductDetail() {
  const wrapper = document.querySelector("[data-product-detail]");
  if (!wrapper) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const product = products.find((item) => item.id === id) || products[0];
  activeSize = product.size[0];

  wrapper.innerHTML = `
    <div class="product-gallery reveal visible">
      <div class="product-gallery-main">
        <img src="${product.gallery[0]}" alt="${product.name}">
      </div>
      <div class="thumb-grid">
        ${product.gallery.map((image) => `<img src="${image}" alt="${product.name} view">`).join("")}
      </div>
    </div>
    <div class="product-info reveal visible">
      <p class="eyebrow">${product.category === "women" ? "Women" : "Men"} / ${product.color}</p>
      <h1>${product.name}</h1>
      <span class="rating">${product.rating} average rating</span>
      <div class="product-price">$${product.price}</div>
      <p>${product.description}</p>
      <strong>Select size</strong>
      <div class="size-selector">
        ${product.size.map((size, index) => `
          <button class="size-chip ${index === 0 ? "active" : ""}" type="button" data-size="${size}">
            ${size}
          </button>
        `).join("")}
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary" type="button" data-add-cart="${product.id}">Add to Cart</button>
        <button class="btn btn-secondary" type="button" data-wishlist="${product.id}">Add to Wishlist</button>
      </div>
      <div class="review-box">
        <strong>Reviews</strong>
        <p>Customers love the clean fit, premium feel, and easy styling versatility of this piece.</p>
      </div>
    </div>
  `;
}

function renderCart() {
  const cartItemsNode = document.querySelector("[data-cart-items]");
  if (!cartItemsNode) return;

  const cart = getCart();
  if (!cart.length) {
    cartItemsNode.innerHTML = `
      <div class="empty-state">
        <h2>Your cart is empty.</h2>
        <p>Start building your Demon Wear look from the latest collection.</p>
        <a class="btn btn-primary" href="products.html">Shop Now</a>
      </div>
    `;
  } else {
    cartItemsNode.innerHTML = cart.map((item) => `
      <article class="cart-item reveal visible">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>Size ${item.size}</p>
          <p>Quantity ${item.quantity}</p>
        </div>
        <strong>$${item.price * item.quantity}</strong>
      </article>
    `).join("");
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const subtotalNode = document.querySelector("[data-subtotal]");
  const totalNode = document.querySelector("[data-total]");
  if (subtotalNode) subtotalNode.textContent = `$${subtotal}`;
  if (totalNode) totalNode.textContent = `$${subtotal + 12}`;
}

function initHomeProducts() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  if (body.dataset.page === "home") {
    renderProducts(products.filter((product) => product.featured), grid, true);
  }

  if (body.dataset.page === "products") {
    renderProducts(products, grid);
    const countNode = document.querySelector("[data-product-count]");
    if (countNode) countNode.textContent = products.length;
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === "dark") body.classList.add("dark-theme");

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = body.classList.contains("dark-theme") ? "Light" : "Dark";
    button.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      const isDark = body.classList.contains("dark-theme");
      localStorage.setItem(themeKey, isDark ? "dark" : "light");
      button.textContent = isDark ? "Light" : "Dark";
    });
  });
}

function initMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  items.forEach((item) => observer.observe(item));
}

function initEvents() {
  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-filter]")) applyFilters();
  });

  document.addEventListener("click", (event) => {
    const cartButton = event.target.closest("[data-add-cart]");
    const wishlistButton = event.target.closest("[data-wishlist]");
    const sizeButton = event.target.closest("[data-size]");

    if (cartButton) {
      addToCart(Number(cartButton.dataset.addCart));
      return;
    }

    if (wishlistButton) wishlistButton.textContent = "♥";

    if (sizeButton) {
      activeSize = sizeButton.dataset.size;
      document.querySelectorAll("[data-size]").forEach((chip) => chip.classList.remove("active"));
      sizeButton.classList.add("active");
    }
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      alert("Thanks! Your request has been received.");
    });
  });
}

initTheme();
initMenu();
initReveal();
initHomeProducts();
renderProductDetail();
renderCart();
initEvents();
updateCartCount();
