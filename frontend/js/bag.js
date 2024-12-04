// 商品數據
const cartItems = [
  { id: 1, name: "Blazer", color: "White", size: "M", price: 100, quantity: 2 },
  { id: 2, name: "Blazer", color: "Black", size: "M", price: 80, quantity: 1 },
  { id: 3, name: "Blazer", color: "red", size: "M", price: 100, quantity: 2 },
  { id: 4, name: "Blazer", color: "pink", size: "M", price: 80, quantity: 1 },
];

// 初始化購物車
const cartContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");

function renderCart() {
cartContainer.innerHTML = ""; // 清空購物車
let subtotal = 0;

cartItems.forEach((item) => {
  subtotal += item.price * item.quantity;

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  cartItem.innerHTML = `
    <div class="item-details">
      <img src="https://via.placeholder.com/50" alt="${item.name}">
      <ul>
        <li>ITEM NAME: ${item.name}</li>
        <li>ITEM STYLE: (${item.color}, ${item.size})</li>
        <li>QTY: ${item.quantity}</li>
      </ul>
    </div>
    <div class="item-actions">
      <p>NTD ${item.price}</p>
      <button class="remove-btn" data-id="${item.id}">X</button>
    </div>
  `;
  cartContainer.appendChild(cartItem);
});

subtotalElement.textContent = subtotal;
}

// 移除商品功能
cartContainer.addEventListener("click", (e) => {
if (e.target.classList.contains("remove-btn")) {
  const id = parseInt(e.target.dataset.id);
  const index = cartItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    cartItems.splice(index, 1); // 移除商品
    renderCart();
  }
}
});
document.addEventListener("DOMContentLoaded", function () {
  // 處理 Logo 點擊事件
  const logoLink = document.querySelector(".logo a");
  if (logoLink) {
      logoLink.addEventListener("click", function (event) {
          event.preventDefault(); // 防止默認行為，測試是否能手動控制跳轉
          const targetUrl = logoLink.getAttribute("href");
          if (targetUrl) {
              window.location.href = targetUrl; // 手動跳轉到目標頁面
          } else {
              console.error("連結沒有指定目標頁面");
          }
      });
  } else {
      console.error("找不到 .logo a 元素");
  }
  const wButton = document.querySelector(".nav-btn[data-gender='woman']"); 
  if (wButton) {
      wButton.addEventListener("click", function() {
          console.log("女性按鈕被點擊");
          window.location.href = `category.html?gender=woman`;  
      });
  } else {
      console.error("找不到女性性別按鈕");
  }

  const mButton = document.querySelector(".nav-btn[data-gender='man']");
  if (mButton) {
      mButton.addEventListener("click", function() {
          console.log("男性按鈕被點擊");
          window.location.href = `category.html?gender=man`;
      });
  } else {
      console.error("找不到男性性別按鈕");
  }
});


// 初始化購物車畫面
renderCart();
document.getElementById("checkout-btn").addEventListener("click", () => {
  window.location.href = "checkout.html"; // 這裡將導向結帳頁面
});