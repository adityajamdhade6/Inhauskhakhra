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

// Product image gallery: click a thumbnail to swap the main image.
(function () {
  var mainImg = document.querySelector("[data-product-main-image]");
  var thumbs = document.querySelectorAll("[data-product-thumb]");
  if (!mainImg || thumbs.length === 0) return;
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      var src = thumb.getAttribute("data-full-src");
      if (src) mainImg.setAttribute("src", src);
      thumbs.forEach(function (t) {
        t.style.borderColor = "var(--color-ink)";
      });
      thumb.style.borderColor = "var(--color-masala)";
    });
  });
})();

// Money formatting (mirrors Shopify's standard money_format tokens).
function ihkFormatMoney(cents, format) {
  format = format || window.themeMoneyFormat || "${{amount}}";
  var value = (cents / 100).toFixed(2);
  var parts = value.split(".");
  var withThousands = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var amount = withThousands + "." + parts[1];
  var amountNoDecimals = withThousands;
  return format
    .replace(/\{\{\s*amount\s*\}\}/, amount)
    .replace(/\{\{\s*amount_no_decimals\s*\}\}/, amountNoDecimals);
}

// Product variant/option selector: pill buttons -> resolve matching variant.
(function () {
  var forms = document.querySelectorAll("[data-product-form]");
  forms.forEach(function (form) {
    var jsonEl = form.querySelector("[data-product-variants-json]");
    if (!jsonEl) return;
    var variants;
    try {
      variants = JSON.parse(jsonEl.textContent);
    } catch (e) {
      return;
    }

    var selected = {};
    form.querySelectorAll("[data-option-index]").forEach(function (group) {
      var idx = group.getAttribute("data-option-index");
      var firstBtn = group.querySelector("[data-option-value]");
      if (firstBtn) selected[idx] = firstBtn.getAttribute("data-value");
    });

    function findVariant() {
      return variants.find(function (v) {
        return (
          (selected.option1 === undefined || v.option1 === selected.option1) &&
          (selected.option2 === undefined || v.option2 === selected.option2) &&
          (selected.option3 === undefined || v.option3 === selected.option3)
        );
      });
    }

    function updateUI() {
      var variant = findVariant();
      var input = form.querySelector("[data-product-variant-id]");
      var submit = form.querySelector("[data-product-submit]");
      var priceEl = form.closest("section") && form.closest("section").querySelector("[data-product-price]");
      var mainImg = document.querySelector("[data-product-main-image]");

      if (!variant) {
        if (submit) {
          submit.disabled = true;
          submit.textContent = "Unavailable";
        }
        return;
      }
      if (input) input.value = variant.id;
      if (priceEl) priceEl.textContent = ihkFormatMoney(variant.price);
      if (submit) {
        submit.disabled = !variant.available;
        submit.textContent = variant.available ? "Add to Cart" : "Sold Out";
      }
      if (mainImg && variant.featured_image) {
        mainImg.setAttribute("src", variant.featured_image.src);
      }
    }

    form.querySelectorAll("[data-option-value]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = btn.getAttribute("data-option-index");
        selected[idx] = btn.getAttribute("data-value");

        form.querySelectorAll('[data-option-index="' + idx + '"][data-option-value]').forEach(function (b) {
          var isSel = b === btn;
          b.classList.toggle("is-selected", isSel);
          b.style.background = isSel ? "var(--color-ink)" : "transparent";
          b.style.color = isSel ? "var(--color-cream)" : "var(--color-ink)";
        });

        updateUI();
      });
    });
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
