(function () {
  function initWhenReady() {
    const store = window.ChronoLuxStore;
    if (!store) {
      window.setTimeout(initWhenReady, 50);
      return;
    }

    function getCart() {
      return store.getCartItems();
    }

    function saveCart(cartItems) {
      store.setCartItems(cartItems);
      document.dispatchEvent(new Event("chronolux:cart-updated"));
    }

    function addToCart(productId, quantity) {
      const cart = getCart();
      const qty = quantity || 1;
      const existingItem = cart.find(function (item) {
        return item.productId === productId;
      });

      if (existingItem) {
        existingItem.quantity += qty;
      } else {
        cart.push({
          productId: productId,
          quantity: qty
        });
      }

      saveCart(cart);
      store.showToast("Watch added to cart", "success");
    }

    function removeFromCart(productId) {
      const cart = getCart().filter(function (item) {
        return item.productId !== productId;
      });
      saveCart(cart);
      store.showToast("Item removed from cart", "default");
    }

    function updateQuantity(productId, nextQuantity) {
      const cart = getCart();
      const item = cart.find(function (cartItem) {
        return cartItem.productId === productId;
      });

      if (!item) {
        return;
      }

      if (nextQuantity <= 0) {
        removeFromCart(productId);
        return;
      }

      item.quantity = nextQuantity;
      saveCart(cart);
    }

    function getDetailedItems() {
      return getCart()
        .map(function (item) {
          return {
            product: store.getProductById(item.productId),
            quantity: item.quantity
          };
        })
        .filter(function (item) {
          return Boolean(item.product);
        });
    }

    function getCartTotals() {
      const details = getDetailedItems();
      const subtotal = details.reduce(function (sum, item) {
        return sum + item.product.price * item.quantity;
      }, 0);

      const shipping = 0; // Free shipping on all orders

      return {
        items: details,
        subtotal: subtotal,
        shipping: shipping,
        total: subtotal + shipping,
        quantity: details.reduce(function (sum, item) {
          return sum + item.quantity;
        }, 0)
      };
    }

    function renderCartPage() {
      if (document.body.dataset.page !== "cart") {
        return;
      }

      const cartMount = document.querySelector("#cart-items");
      const summaryMount = document.querySelector("#cart-summary");
      if (!cartMount || !summaryMount) {
        return;
      }

      const totals = getCartTotals();
      if (!totals.items.length) {
        cartMount.innerHTML = [
          '<div class="empty-state glass-card">',
          '  <span class="card-index">00</span>',
          "  <h2>Your cart is waiting</h2>",
          "  <p>Add one of our signature timepieces to begin your ChronoLux order.</p>",
          '  <a class="btn btn-primary" href="shop.html">Shop Watches</a>',
          "</div>"
        ].join("");
      } else {
        cartMount.innerHTML = totals.items
          .map(function (item) {
            return [
              '<article class="cart-item glass-card" data-product-id="' + item.product.id + '">',
              '  <div class="cart-item-media"><img src="' + item.product.image + '" alt="' + item.product.name + '"></div>',
              '  <div class="cart-item-details">',
              "    <strong>" + item.product.name + "</strong>",
              "    <p>" + item.product.shortDescription + "</p>",
              "    <span>" + item.product.tags.join(" • ") + "</span>",
              '    <div class="qty-control" aria-label="Quantity control">',
              '      <button type="button" data-qty-action="decrease" data-product-id="' + item.product.id + '">-</button>',
              "      <strong>" + item.quantity + "</strong>",
              '      <button type="button" data-qty-action="increase" data-product-id="' + item.product.id + '">+</button>',
              "    </div>",
              "  </div>",
              '  <div class="cart-item-side">',
              "    <strong>" + store.formatCurrency(item.product.price * item.quantity) + "</strong>",
              '    <button class="link-button" type="button" data-remove-item="' + item.product.id + '">Remove</button>',
              "  </div>",
              "</article>"
            ].join("");
          })
          .join("");
      }

      summaryMount.innerHTML = [
        '<aside class="summary-card glass-card">',
        "  <h3>Order Summary</h3>",
        '  <div class="summary-list">',
        '    <div class="summary-row"><span>Items</span><strong>' + totals.quantity + "</strong></div>",
        '    <div class="summary-row"><span>Subtotal</span><strong>' + store.formatCurrency(totals.subtotal) + "</strong></div>",
        '    <div class="summary-row"><span>Shipping</span><strong>Free</strong></div>',
        "  </div>",
        '  <div class="summary-total"><span>Total</span><strong>' + store.formatCurrency(totals.total) + "</strong></div>",
        '  <a class="btn btn-primary btn-block" href="checkout.html">Proceed to Checkout</a>',
        '  <a class="btn btn-ghost btn-block" href="shop.html">Continue Shopping</a>',
        "</aside>"
      ].join("");
    }

    function renderCheckoutPage() {
      if (document.body.dataset.page !== "checkout") {
        return;
      }

      const summaryMount = document.querySelector("#checkout-summary");
      const form = document.querySelector("#checkout-form");
      const messageMount = document.querySelector("#checkout-message");
      const totals = getCartTotals();
      const currentUser = store.getCurrentUser();

      if (summaryMount) {
        if (!totals.items.length) {
          summaryMount.innerHTML = [
            '<div class="empty-state glass-card">',
            '  <span class="card-index">00</span>',
            "  <h2>No items to checkout</h2>",
            "  <p>Your bag is empty. Add a watch before placing an order.</p>",
            '  <a class="btn btn-primary" href="shop.html">Explore Watches</a>',
            "</div>"
          ].join("");
        } else {
          summaryMount.innerHTML = [
            '<aside class="summary-card glass-card">',
            "  <h3>Checkout Summary</h3>",
            '  <div class="order-list">' +
            totals.items
              .map(function (item) {
                return [
                  '<div class="order-line">',
                  "  <span>" + item.product.name + " x " + item.quantity + "</span>",
                  "  <strong>" + store.formatCurrency(item.product.price * item.quantity) + "</strong>",
                  "</div>"
                ].join("");
              })
              .join("") +
            "</div>",
            '  <div class="summary-total"><span>Total</span><strong>' + store.formatCurrency(totals.total) + "</strong></div>",
            "  <p>All orders are stored locally for demo purposes and shown in your dashboard.</p>",
            "</aside>"
          ].join("");
        }
      }

      if (!form) {
        return;
      }

      if (currentUser) {
        const fullName = form.querySelector("#checkout-name");
        const email = form.querySelector("#checkout-email");
        const phone = form.querySelector("#checkout-phone");
        if (fullName && !fullName.value) {
          fullName.value = currentUser.name || "";
        }
        if (email && !email.value) {
          email.value = currentUser.email || "";
        }
        if (phone && !phone.value) {
          phone.value = currentUser.phone || "";
        }
      }

      if (form.dataset.boundCheckout !== "true") {
        form.dataset.boundCheckout = "true";
        form.addEventListener("submit", function (event) {

          event.preventDefault();

          //  VALIDATION START

          const name =
            document.getElementById("checkout-name").value.trim();

          const email =
            document.getElementById("checkout-email").value.trim();

          const phone =
            document.getElementById("checkout-phone").value.trim();

          const city =
            document.getElementById("checkout-city").value.trim();

          const address =
            document.getElementById("checkout-address").value.trim();

          const pincode =
            document.getElementById("checkout-pincode").value.trim();

          const gmailPattern =
            /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

          if (!gmailPattern.test(email)) {
            alert("Email must be Gmail!");
            return;
          }

          if (!/^[0-9]{10}$/.test(phone)) {
            alert("Phone must be 10 digits!");
            return;
          }

          if (name.length < 3) {
            alert("Enter valid name!");
            return;
          }

          if (city.length < 2) {
            alert("Enter valid city!");
            return;
          }

          if (!/^[0-9]{6}$/.test(pincode)) {
            alert("Enter valid 6-digit Pincode!");
            return;
          }

          if (address.length < 10) {
            alert("Enter full address!");
            return;
          }

          const paymentMethod =
  document.getElementById("checkout-payment").value;

if (paymentMethod === "Card") {

  const cardNumber =
    document.getElementById("card-number").value;

  const cvv =
    document.getElementById("card-cvv").value;

  if (!/^[0-9]{16}$/.test(cardNumber)) {
    alert("Enter valid 16-digit card number");
    return;
  }

  if (!/^[0-9]{3}$/.test(cvv)) {
    alert("Enter valid 3-digit CVV");
    return;
  }

}

if (paymentMethod === "UPI") {

  const upi =
    document.getElementById("upi-id").value;

  if (!upi.includes("@")) {
    alert("Enter valid UPI ID");
    return;
  }

}
        

          // VALIDATION END

          const activeUser = store.getCurrentUser();
          const liveTotals = getCartTotals();
          if (!liveTotals.items.length) {
            store.showToast("Add a product before checkout", "error");
            return;
          }

          const formData = new FormData(form);
          const orderId = "CLX-" + Date.now().toString(36).toUpperCase();
          const orderRecord = {
            id: orderId,
            userId: activeUser ? activeUser.id : null,
            customer: {
              name: formData.get("fullName"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              address: formData.get("address"),
              city: formData.get("city"),
              pincode: formData.get("pincode"),
              paymentMethod: formData.get("paymentMethod")
            },
            items: liveTotals.items.map(function (item) {
              return {
                productId: item.product.id,
                name: item.product.name,
                quantity: item.quantity,
                price: item.product.price
              };
            }),
            amount: liveTotals.total,
            status: "Pending",
            createdAt: new Date().toISOString()
          };

          const orders = store.getOrders();
          orders.unshift(orderRecord);
          store.setOrders(orders);
          saveCart([]);
          form.reset();

          if (messageMount) {
            messageMount.innerHTML = [
              '<div class="inline-message success">',
              "  Order Placed Successfully. Your order ID is <strong>" + orderId + "</strong> and the current status is Pending.",
              "</div>"
            ].join("");
          }

          renderCheckoutPage();
          store.showToast("Order placed successfully", "success");
          window.setTimeout(function () {
            window.location.href = "order-success.html";
          }, 1200);
        });
      }
    }

    document.addEventListener("click", function (event) {
      const addButton = event.target.closest("[data-add-to-cart]");
      if (addButton) {
        addToCart(addButton.getAttribute("data-add-to-cart"), 1);
      }

      const removeButton = event.target.closest("[data-remove-item]");
      if (removeButton) {
        removeFromCart(removeButton.getAttribute("data-remove-item"));
        renderCartPage();
        renderCheckoutPage();
      }

      const quantityButton = event.target.closest("[data-qty-action]");
      if (quantityButton) {
        const productId = quantityButton.getAttribute("data-product-id");
        const action = quantityButton.getAttribute("data-qty-action");
        const item = getCart().find(function (cartItem) {
          return cartItem.productId === productId;
        });

        if (!item) {
          return;
        }

        updateQuantity(productId, action === "increase" ? item.quantity + 1 : item.quantity - 1);
        renderCartPage();
        renderCheckoutPage();
      }
    });

    document.addEventListener("chronolux:cart-updated", function () {
      renderCartPage();
      renderCheckoutPage();
    });

    document.addEventListener("DOMContentLoaded", function () {
      renderCartPage();
      renderCheckoutPage();
    });

    window.ChronoLuxCart = {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      updateQuantity: updateQuantity,
      getCartTotals: getCartTotals
    };
  }

  initWhenReady();
})();


// Allow only numbers in phone input

document.addEventListener("DOMContentLoaded", function () {

  const phoneInput =
    document.getElementById("checkout-phone");

  if (phoneInput) {

    phoneInput.addEventListener("input", function () {

      this.value =
        this.value.replace(/[^0-9]/g, "");

    });

  }


 // PAYMENT UI LOGIC START

  const paymentSelect =
    document.getElementById("checkout-payment");

  if (paymentSelect) {

    paymentSelect.addEventListener("change", function () {

      const method = this.value;

      const cardFields =
        document.getElementById("card-fields");

      const cardExtra =
        document.getElementById("card-extra");

      const cardCvv =
        document.getElementById("card-cvv-wrapper");

      const upiField =
        document.getElementById("upi-field");

      const codMessage =
        document.getElementById("cod-message");

      // Hide all first
      cardFields.style.display = "none";
      cardExtra.style.display = "none";
      cardCvv.style.display = "none";
      upiField.style.display = "none";
      codMessage.style.display = "none";

      // Show based on selection
      if (method === "Card") {
        cardFields.style.display = "block";
        cardExtra.style.display = "block";
        cardCvv.style.display = "block";
      }

      if (method === "UPI") {
        upiField.style.display = "block";
      }

      if (method === "Cash on Delivery") {
        codMessage.style.display = "block";
      }

    });

  }

  // PAYMENT UI LOGIC END

});


