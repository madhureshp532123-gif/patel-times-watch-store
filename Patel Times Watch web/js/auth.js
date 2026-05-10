(function () {
  function initWhenReady() {
    const store = window.ChronoLuxStore;
    if (!store) {
      window.setTimeout(initWhenReady, 50);
      return;
    }

    function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}

    function setCurrentUser(user) {
      store.writeJSON(store.STORAGE_KEYS.currentUser, user);
      document.dispatchEvent(new Event("chronolux:auth-updated"));
    }

    function clearCurrentUser() {
      localStorage.removeItem(store.STORAGE_KEYS.currentUser);
      document.dispatchEvent(new Event("chronolux:auth-updated"));
    }

    function registerUser(payload) {
      const users = store.getUsers();
      const emailUsed = users.some(function (user) {
        return user.email.toLowerCase() === payload.email.toLowerCase();
      });

      if (emailUsed) {
        return {
          ok: false,
          message: "An account with this email already exists."
        };
      }

      const nextUser = {
        id: "USR-" + Date.now().toString(36).toUpperCase(),
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        password: payload.password
      };

      users.push(nextUser);
      store.setUsers(users);
      setCurrentUser({
        id: nextUser.id,
        name: nextUser.name,
        email: nextUser.email,
        phone: nextUser.phone
      });

      return {
        ok: true,
        message: "Account created successfully."
      };
    }

    function loginUser(email, password) {
      const users = store.getUsers();
      const user = users.find(function (record) {
        return record.email.toLowerCase() === email.toLowerCase() && record.password === password;
      });

      if (!user) {
        return {
          ok: false,
          message: "Invalid email or password."
        };
      }

      setCurrentUser({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      });

      return {
        ok: true,
        message: "Login successful."
      };
    }

    function renderMessage(target, tone, message) {
      if (!target) {
        return;
      }

      target.innerHTML = '<div class="inline-message ' + tone + '">' + message + "</div>";
    }

    function initRegisterPage() {
      if (document.body.dataset.page !== "register") {
        return;
      }

      const form = document.querySelector("#register-form");
      const messageMount = document.querySelector("#register-message");
      if (!form || !messageMount) {
        return;
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = String(formData.get("fullName")).trim();
        const email = String(formData.get("email")).trim();
        const phone = String(formData.get("phone")).trim();
        const password = String(formData.get("password"));
        const confirmPassword = String(formData.get("confirmPassword"));

        if (!isValidEmail(email)) {
          renderMessage(messageMount, "error", "Please enter a valid email address.");
          return;
        }
        
        if (!/^[0-9]{10}$/.test(phone)) {
  renderMessage(messageMount, "error", "Phone must be 10 digits.");
  return;
}

        if (password.length < 6) {
          renderMessage(messageMount, "error", "Password must be at least 6 characters long.");
          return;
        }

        if (password !== confirmPassword) {
          renderMessage(messageMount, "error", "Passwords do not match.");
          return;
        }

        const result = registerUser({
          name: name,
          email: email,
          phone: phone,
          password: password
        });

        if (!result.ok) {
          renderMessage(messageMount, "error", result.message);
          return;
        }

        renderMessage(messageMount, "success", "Account created successfully. Redirecting to your dashboard...");
        store.showToast("Welcome to ChronoLux", "success");
        window.setTimeout(function () {
          window.location.href = "dashboard.html";
        }, 900);
      });
    }

    function initLoginPage() {
      if (document.body.dataset.page !== "login") {
        return;
      }

      const form = document.querySelector("#login-form");
      const messageMount = document.querySelector("#login-message");
      if (!form || !messageMount) {
        return;
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const email = String(formData.get("email")).trim();
        const password = String(formData.get("password"));

        const result = loginUser(email, password);
        if (!result.ok) {
          renderMessage(messageMount, "error", result.message);
          return;
        }

        renderMessage(messageMount, "success", "Login successful. Redirecting to dashboard...");
        store.showToast("Signed in successfully", "success");
        window.setTimeout(function () {
          window.location.href = "dashboard.html";
        }, 800);
      });
    }

    function formatOrderDate(isoDate) {
      return new Date(isoDate).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }

    function renderDashboardPage() {
      if (document.body.dataset.page !== "dashboard") {
        return;
      }

      const currentUser = store.getCurrentUser();
      const dashboardBody = document.querySelector("#dashboard-body");
      if (!dashboardBody) {
        return;
      }

      if (!currentUser) {
        dashboardBody.innerHTML = [
          '<div class="empty-state glass-card">',
          '  <span class="card-index">01</span>',
          "  <h2>Please login to view your dashboard</h2>",
          "  <p>Your saved orders and account details appear here once you sign in.</p>",
          '  <a class="btn btn-primary" href="login.html">Login Now</a>',
          "</div>"
        ].join("");
        return;
      }

      const userOrders = store.getOrders().filter(function (order) {
        return order.userId === currentUser.id || order.customer.email.toLowerCase() === currentUser.email.toLowerCase();
      });

      const totalSpend = userOrders.reduce(function (sum, order) {
        return sum + order.amount;
      }, 0);

      dashboardBody.innerHTML = [
        '<div class="dashboard-main">',
        '  <div class="dashboard-head">',
        "    <div>",
        "      <h1>Welcome back, " + currentUser.name.split(" ")[0] + "</h1>",
        '      <p class="dashboard-subtitle">Track orders, review your account details, and continue building your collection.</p>',
        "    </div>",
        '    <button class="btn btn-outline" type="button" data-logout>Logout</button>',
        "  </div>",
        '  <div class="dashboard-stats">',
        '    <article class="dashboard-card glass-card"><h3>Total Orders</h3><strong>' + userOrders.length + "</strong><p>Orders placed with ChronoLux</p></article>",
        '    <article class="dashboard-card glass-card"><h3>Total Spend</h3><strong>' + store.formatCurrency(totalSpend) + "</strong><p>Combined value of your local orders</p></article>",
        '    <article class="dashboard-card glass-card"><h3>Account Email</h3><strong style="font-size:1.1rem;">' + currentUser.email + "</strong><p>Current signed in account</p></article>",
        "  </div>",
        '  <article class="form-card glass-card">',
        "    <h2>Your Orders</h2>",
        (userOrders.length
          ? userOrders
              .map(function (order) {
                return [
                  '<article class="order-card glass-card">',
                  "  <h3>Order " + order.id + "</h3>",
                  '  <div class="order-list">',
                  '    <div class="order-line"><span>Status</span><span class="status-badge pending">' + order.status + "</span></div>",
                  '    <div class="order-line"><span>Placed On</span><strong>' + formatOrderDate(order.createdAt) + "</strong></div>",
                  '    <div class="order-line"><span>Amount</span><strong>' + store.formatCurrency(order.amount) + "</strong></div>",
                  '    <div class="order-line"><span>Products</span><strong>' + order.items.map(function (item) { return item.name + " x " + item.quantity; }).join(", ") + "</strong></div>",
                  "  </div>",
                  "</article>"
                ].join("");
              })
              .join("")
          : '<div class="empty-state"><span class="card-index">02</span><h2>No orders yet</h2><p>Place your first ChronoLux order and it will appear here with a pending status.</p><a class="btn btn-primary" href="shop.html">Start Shopping</a></div>'),
        "  </article>",
        "</div>"
      ].join("");
    }

    document.addEventListener("click", function (event) {
      const logoutButton = event.target.closest("[data-logout]");
      if (!logoutButton) {
        return;
      }

      clearCurrentUser();
      store.showToast("Logged out successfully", "success");
      window.setTimeout(function () {
        window.location.href = "login.html";
      }, 350);
    });

    document.addEventListener("DOMContentLoaded", function () {
      initRegisterPage();
      initLoginPage();
      renderDashboardPage();
    });

    document.addEventListener("chronolux:auth-updated", renderDashboardPage);

    window.ChronoLuxAuth = {
      registerUser: registerUser,
      loginUser: loginUser
    };
  }

  initWhenReady();
})();
