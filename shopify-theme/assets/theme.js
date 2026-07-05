// Scroll-reveal: fade + translateY once an .ihk-reveal element enters view.
(function () {
  var els = document.querySelectorAll(".ihk-reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "-10% 0px -10% 0px", threshold: 0 }
  );
  els.forEach(function (el) {
    observer.observe(el);
  });
})();

// Mobile nav toggle.
(function () {
  var btn = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-nav-panel]");
  if (!btn || !panel) return;
  btn.addEventListener("click", function () {
    var isOpen = panel.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    btn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
})();

// Add-to-cart forms: submit via fetch so we can update the cart count without a full reload.
(function () {
  var forms = document.querySelectorAll("[data-ihk-cart-form]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      var submitBtn = form.querySelector("[type=submit]");
      var originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Adding...";
      }
      fetch("/cart/add.js", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Add to cart failed");
          return res.json();
        })
        .then(function () {
          return fetch("/cart.js").then(function (r) {
            return r.json();
          });
        })
        .then(function (cart) {
          document.querySelectorAll("[data-cart-count]").forEach(function (el) {
            el.textContent = cart.item_count;
          });
          if (submitBtn) {
            submitBtn.textContent = "Added!";
            setTimeout(function () {
              submitBtn.disabled = false;
              submitBtn.textContent = originalText;
            }, 1200);
          }
        })
        .catch(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
          form.submit();
        });
    });
  });
})();
