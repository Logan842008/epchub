$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
const button = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

navbar.style.transitionDuration = "0.5s";
button.style.transitionDuration = "0.5s";

button.addEventListener("click", () => {
  if (navbar.classList.contains("max-lg:right-[-100%]")) {
    navbar.classList.remove("max-lg:right-[-100%]");
    navbar.classList.remove("max-lg:hidden");
    button.classList.remove("ri-menu-line");
    button.classList.add("ri-close-large-line");
    navbar.classList.add("max-lg:right-[5%]");
  } else if (navbar.classList.contains("max-lg:right-[5%]")) {
    navbar.classList.remove("max-lg:right-[5%]");
    navbar.classList.add("max-lg:right-[-100%]");
    button.classList.add("ri-menu-line");
    navbar.classList.add("max-lg:hidden");
    button.classList.remove("ri-close-large-line");
  }
});
let sections = document.querySelectorAll("section,header");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 92;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("text-blue-500");
        links.classList.remove("dark:text-purple-500");
        links.classList.remove("font-bold");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("text-blue-500");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("font-bold");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("dark:text-purple-500");
      });
    }
  });
};

function hideAllTypes() {
  ["laptops", "desktops"].forEach((id) => {
    const types = document.getElementById(id);
    types.classList.add("hidden");
    types.classList.remove("opacity-100");
    types.classList.add("opacity-0");
  });
}

document.getElementById("button-laptop").addEventListener("click", function () {
  hideAllTypes();
  showType("laptops");
});

document
  .getElementById("button-desktop")
  .addEventListener("click", function () {
    hideAllTypes();
    showType("desktops");
  });

function showType(id) {
  const types = document.getElementById(id);
  types.classList.remove("hidden");
  setTimeout(() => {
    types.classList.add("opacity-100");
    types.classList.remove("opacity-0");
  }, 100); // Delay is needed for the transition to work properly
}

document.addEventListener("DOMContentLoaded", () => {
  const imageElement = document.getElementById("dynamicImage");
  const coolerimg = document.getElementById("coolerimg");
  const coolername = document.getElementById("coolername");
  const configurator = document.getElementById("configurator");
  const laptopmodel = document.getElementById("laptopmodel");
  const i9good = document.getElementById("i9good");
  const amd9good = document.getElementById("amd9good");
  const i7good = document.getElementById("i7good");
  const amd7good = document.getElementById("amd7good");
  const i9bad = document.getElementById("i9bad");
  const amd9bad = document.getElementById("amd9bad");
  const i7bad = document.getElementById("i7bad");
  const amd7bad = document.getElementById("amd7bad");
  const baseprice = document.getElementById("baseprice");
  const laptopname = document.getElementById("laptopname");
  const displaytext = document.getElementById("displaytext");
  const display = document.getElementById("display");
  const cameratext = document.getElementById("cameratext");
  const camera = document.getElementById("camera");
  const colortext = document.getElementById("colortext");
  const color = document.getElementById("color");
  const fingertext = document.getElementById("fingertext");
  const finger = document.getElementById("finger");
  const facetext = document.getElementById("facetext");
  const face = document.getElementById("face");
  const keytext = document.getElementById("keytext");
  const key = document.getElementById("key");
  const mothertext = document.getElementById("mothertext");
  const mother = document.getElementById("mother");
  const powertext = document.getElementById("powertext");
  const power = document.getElementById("power");
  const coolertext = document.getElementById("coolertext");
  const cooler = document.getElementById("cooler");
  let basePrice = 25000;
  let cart = [];
  let couponprice = 0;

  document.getElementById("laptop9").addEventListener("click", () => {
    imageElement.src = "src/assets/9i.avif";
    amd7good.classList.add("hidden");
    amd9good.classList.add("hidden");
    amd7bad.classList.remove("hidden");
    amd9bad.classList.remove("hidden");
    i9good.classList.add("hidden");
    i7good.classList.add("hidden");
    i9bad.classList.remove("hidden");
    i7bad.classList.remove("hidden");
    displaytext.classList.remove("hidden");
    display.classList.remove("hidden");
    cameratext.classList.remove("hidden");
    camera.classList.remove("hidden");
    colortext.classList.remove("hidden");
    color.classList.remove("hidden");
    fingertext.classList.remove("hidden");
    finger.classList.remove("hidden");
    facetext.classList.remove("hidden");
    face.classList.remove("hidden");
    keytext.classList.remove("hidden");
    key.classList.remove("hidden");
    mothertext.classList.add("hidden");
    mother.classList.add("hidden");
    powertext.classList.add("hidden");
    power.classList.add("hidden");
    coolertext.classList.add("hidden");
    cooler.classList.add("hidden");
    toggleConfigurator(configurator);
    laptopmodel.textContent = "Legion Pro 9";
    laptopname.textContent = "LEGION PRO 9";
    baseprice.textContent = "RM25,000.00";
    basePrice = 25000.0;
    const serialNumber = generateSerialNumber(10); // Generate a serial number
    const spanElement = document.getElementById("serialNumberDisplay"); // Get the span element by its ID
    spanElement.textContent = serialNumber; // Set the text content of the span element to the serial number
    updateTotalPrice();
  });

  document.getElementById("laptop7").addEventListener("click", () => {
    imageElement.src = "src/assets/pro7i.avif";
    amd7good.classList.add("hidden");
    amd9good.classList.add("hidden");
    amd7bad.classList.remove("hidden");
    amd9bad.classList.remove("hidden");
    i9good.classList.add("hidden");
    i7good.classList.add("hidden");
    i9bad.classList.remove("hidden");
    i7bad.classList.remove("hidden");
    displaytext.classList.remove("hidden");
    display.classList.remove("hidden");
    cameratext.classList.remove("hidden");
    camera.classList.remove("hidden");
    colortext.classList.remove("hidden");
    color.classList.remove("hidden");
    fingertext.classList.remove("hidden");
    finger.classList.remove("hidden");
    facetext.classList.remove("hidden");
    face.classList.remove("hidden");
    keytext.classList.remove("hidden");
    key.classList.remove("hidden");
    mothertext.classList.add("hidden");
    mother.classList.add("hidden");
    powertext.classList.add("hidden");
    power.classList.add("hidden");
    coolertext.classList.add("hidden");
    cooler.classList.add("hidden");
    toggleConfigurator(configurator);
    laptopmodel.textContent = "Legion Pro 7";
    laptopname.textContent = "LEGION PRO 7";
    baseprice.textContent = "RM20,000.00";
    basePrice = 20000.0;
    const serialNumber = generateSerialNumber(10); // Generate a serial number
    const spanElement = document.getElementById("serialNumberDisplay"); // Get the span element by its ID
    spanElement.textContent = serialNumber; // Set the text content of the span element to the serial number
    updateTotalPrice();
  });

  document.getElementById("laptop5").addEventListener("click", () => {
    imageElement.src = "src/assets/pro5.avif";
    amd7good.classList.add("hidden");
    amd9good.classList.add("hidden");
    amd7bad.classList.remove("hidden");
    amd9bad.classList.remove("hidden");
    i9good.classList.add("hidden");
    i7good.classList.add("hidden");
    i9bad.classList.remove("hidden");
    i7bad.classList.remove("hidden");
    displaytext.classList.remove("hidden");
    display.classList.remove("hidden");
    cameratext.classList.remove("hidden");
    camera.classList.remove("hidden");
    colortext.classList.remove("hidden");
    color.classList.remove("hidden");
    fingertext.classList.remove("hidden");
    finger.classList.remove("hidden");
    facetext.classList.remove("hidden");
    face.classList.remove("hidden");
    keytext.classList.remove("hidden");
    key.classList.remove("hidden");
    mothertext.classList.add("hidden");
    mother.classList.add("hidden");
    powertext.classList.add("hidden");
    power.classList.add("hidden");
    coolertext.classList.add("hidden");
    cooler.classList.add("hidden");
    laptopmodel.textContent = "Legion Pro 5";
    laptopname.textContent = "LEGION PRO 5";
    baseprice.textContent = "RM17,000.00";
    basePrice = 17000.0;
    toggleConfigurator(configurator);
    const serialNumber = generateSerialNumber(10); // Generate a serial number
    const spanElement = document.getElementById("serialNumberDisplay"); // Get the span element by its ID
    spanElement.textContent = serialNumber; // Set the text content of the span element to the serial number
    updateTotalPrice();
  });

  document.getElementById("p1").addEventListener("click", () => {
    imageElement.src = "src/assets/p1.png";
    coolerimg.src = "src/assets/krakenl53.png";
    amd7good.classList.remove("hidden");
    amd9good.classList.remove("hidden");
    amd7bad.classList.remove("hidden");
    amd9bad.classList.remove("hidden");
    i9good.classList.remove("hidden");
    i7good.classList.remove("hidden");
    i9bad.classList.remove("hidden");
    i7bad.classList.remove("hidden");
    cameratext.classList.add("hidden");
    camera.classList.add("hidden");
    displaytext.classList.add("hidden");
    display.classList.add("hidden");
    colortext.classList.add("hidden");
    color.classList.add("hidden");
    fingertext.classList.add("hidden");
    finger.classList.add("hidden");
    facetext.classList.add("hidden");
    face.classList.add("hidden");
    keytext.classList.add("hidden");
    key.classList.add("hidden");
    mothertext.classList.remove("hidden");
    mother.classList.remove("hidden");
    powertext.classList.remove("hidden");
    power.classList.remove("hidden");
    coolertext.classList.remove("hidden");
    cooler.classList.remove("hidden");
    toggleConfigurator(configurator);
    laptopmodel.textContent = "Player: 1 Prime";
    laptopname.textContent = "PLAYER: 1 PRIME";
    coolername.textContent = "Kraken L53 RGB";
    baseprice.textContent = "RM35,000.00";
    basePrice = 35000.0;
    const serialNumber = generateSerialNumber(10); // Generate a serial number
    const spanElement = document.getElementById("serialNumberDisplay"); // Get the span element by its ID
    spanElement.textContent = serialNumber; // Set the text content of the span element to the serial number
    updateTotalPrice();
  });

  document.getElementById("p2").addEventListener("click", () => {
    imageElement.src = "src/assets/p2.png";
    coolerimg.src = "src/assets/krakenl63.png";
    amd7good.classList.remove("hidden");
    amd9good.classList.remove("hidden");
    amd7bad.classList.remove("hidden");
    amd9bad.classList.remove("hidden");
    i9good.classList.remove("hidden");
    i7good.classList.remove("hidden");
    i9bad.classList.remove("hidden");
    i7bad.classList.remove("hidden");
    displaytext.classList.add("hidden");
    display.classList.add("hidden");
    cameratext.classList.add("hidden");
    camera.classList.add("hidden");
    colortext.classList.add("hidden");
    color.classList.add("hidden");
    fingertext.classList.add("hidden");
    finger.classList.add("hidden");
    facetext.classList.add("hidden");
    face.classList.add("hidden");
    keytext.classList.add("hidden");
    key.classList.add("hidden");
    mothertext.classList.remove("hidden");
    mother.classList.remove("hidden");
    powertext.classList.remove("hidden");
    power.classList.remove("hidden");
    coolertext.classList.remove("hidden");
    cooler.classList.remove("hidden");
    toggleConfigurator(configurator);
    laptopmodel.textContent = "Player: 2 Prime";
    laptopname.textContent = "PLAYER: 2 PRIME";
    coolername.textContent = "Kraken L63 RGB";
    baseprice.textContent = "RM37,500.00";
    basePrice = 37500.0;
    const serialNumber = generateSerialNumber(10); // Generate a serial number
    const spanElement = document.getElementById("serialNumberDisplay"); // Get the span element by its ID
    spanElement.textContent = serialNumber; // Set the text content of the span element to the serial number
    updateTotalPrice();
  });

  document.getElementById("p3").addEventListener("click", () => {
    imageElement.src = "src/assets/p3.png";
    coolerimg.src = "src/assets/krakenl73.png";
    amd7good.classList.remove("hidden");
    amd9good.classList.remove("hidden");
    amd7bad.classList.remove("hidden");
    amd9bad.classList.remove("hidden");
    i9good.classList.remove("hidden");
    i7good.classList.remove("hidden");
    i9bad.classList.remove("hidden");
    i7bad.classList.remove("hidden");
    cameratext.classList.add("hidden");
    camera.classList.add("hidden");
    displaytext.classList.add("hidden");
    display.classList.add("hidden");
    colortext.classList.add("hidden");
    color.classList.add("hidden");
    fingertext.classList.add("hidden");
    finger.classList.add("hidden");
    facetext.classList.add("hidden");
    face.classList.add("hidden");
    keytext.classList.add("hidden");
    key.classList.add("hidden");
    mothertext.classList.remove("hidden");
    mother.classList.remove("hidden");
    powertext.classList.remove("hidden");
    power.classList.remove("hidden");
    coolertext.classList.remove("hidden");
    cooler.classList.remove("hidden");
    toggleConfigurator(configurator);
    laptopmodel.textContent = "Player: 3 Prime";
    laptopname.textContent = "PLAYER: 3 PRIME";
    coolername.textContent = "Kraken L73 RGB";
    baseprice.textContent = "RM40,000.00";
    basePrice = 40000.0;
    const serialNumber = generateSerialNumber(10); // Generate a serial number
    const spanElement = document.getElementById("serialNumberDisplay"); // Get the span element by its ID
    spanElement.textContent = serialNumber; // Set the text content of the span element to the serial number
    updateTotalPrice();
  });
  toggleCartVisibility();
  function toggleConfigurator(element) {
    if (element.classList.contains("hidden")) {
      setTimeout(() => {
        element.classList.add("opacity-100");
        element.classList.remove("opacity-0");
      }, 100);

      element.classList.remove("hidden");
    }
  }
  const categories = [
    "processor",
    "graphics",
    "os",
    "ram",
    "storage",
    "screen",
    "camera",
    "color",
    "finger",
    "face",
    "keyboard",
    "wifi",
    "warranty",
    "motherboard",
    "power",
    "cooler",
    "monitor",
    "keyboard1",
    "mouse",
    "headset",
    "driving",
  ];
  const priceDisplayElement = document.getElementById("totalPrice");
  let selectedOptions = {
    processor: null,
    graphics: null,
    os: null,
    ram: null,
    storage: null,
    screen: null,
    camera: null,
    color: null,
    finger: null,
    face: null,
    keyboard: null,
    wifi: null,
    warranty: null,
    motherboard: null,
    power: null,
    cooler: null,
    monitor: null,
    keyboard1: null,
    mouse: null,
    headset: null,
    driving: null,
  };

  function updateTotalPrice() {
    let totalPrice = basePrice;
    for (let category of categories) {
      const selectedButton = selectedOptions[category];
      if (selectedButton) {
        totalPrice += parseFloat(selectedButton.getAttribute("data-price"));
      }
    }
    priceDisplayElement.textContent = `RM${totalPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
    })}`;
    couponprice = totalPrice;
  }
  function addtoCart(totalPrice) {
    cart.push({
      name: laptopmodel.textContent,
      price: totalPrice,
      img: imageElement.src,
    });
    console.log(cart);
    displayCart();
    updateCartTotal();
    toggleCartVisibility();
  }
  function toggleCartVisibility() {
    const cartSection = document.getElementById("cart");
    if (cart.length === 0) {
      cartSection.classList.add("hidden");
    } else {
      cartSection.classList.remove("hidden");
    }
  }

  function updateCartTotal() {
    let cartTotal = 0;
    cart.forEach((item) => {
      cartTotal += item.price;
    });
    const cartTotalElement = document.getElementById("cartTotal");
    cartTotalElement.textContent = `RM${cartTotal.toLocaleString("en-US", {
      minimumFractionDigits: 2,
    })}`;
  }

  function displayCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = ""; // Clear the container before adding new items

    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
      <div class="flex md:flex-row max-md:flex-col w-[100%] justify-between items-center rounded-lg border-[3px] dark:border-purple-500 border-blue-500 py-2 px-2 pr-5 dark:bg-neutral-900 bg-neutral-300">
      <div class="cart-item-img flex md:flex-row max-md:flex-col justify-around items-center">
      <i class="fa-solid fa-trash-can delete-button cursor-pointer text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-red-400 to-red-500 text-3xl" data-index="${index}"></i>
        <img class="w-[100px]" src="${item.img}" alt="${item.name}">
      </div>
      <div class="cart-item-info md:text-right max-md:text-center">
        <h4 class = "text-xl">${item.name}</h4>
        <p class = "text-3xl text-transparent bg-clip-text bg-gradient-to-r dark:from-purple-600 dark:via-purple-400 dark:to-purple-600 from-blue-600 via-blue-400 to-blue-600">RM${item.price.toFixed(
          2
        )}</p>
      </div>
    </div>
    <br>
      `;
      cartContainer.appendChild(itemElement);
    });
    document.querySelectorAll(".delete-button").forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        removeFromCart(index);
      });
    });
  }

  function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart
    displayCart(); // Update the cart display
    updateCartTotal(); // Update the total price display
    toggleCartVisibility();
  }

  // Attach the event listener outside of the updateTotalPrice function
  document.getElementById("addtocart").addEventListener("click", () => {
    // Ensure that the total price is up-to-date before adding to the cart
    updateTotalPrice();
    // Get the latest total price from the priceDisplayElement
    let totalPrice = parseFloat(
      priceDisplayElement.textContent.replace(/RM|,/g, "")
    );
    addtoCart(totalPrice);
  });
  document.getElementById("couponInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const couponCode = e.target.value;
      if (couponCode.toUpperCase() === "LOGANISPRO") {
        discountRate = 0.1;
        applyDiscount();
        e.target.value = ""; // Clear the input field
        document.getElementById("discountNotification").classList.remove("hidden");
      } else if (couponCode.toUpperCase() === "EPCHUB2024") {
        discountRate = 0.24;
        applyDiscount();
        e.target.value = ""; // Clear the input field
        document.getElementById("discountNotification").classList.remove("hidden");
      }
    }
  });
  
  document.getElementById("applycoupon").addEventListener("click", function () {
    const couponInput = document.getElementById("couponInput");
    const couponCode = couponInput.value;
    if (couponCode.toUpperCase() === "LOGANISPRO") {
      discountRate = 0.1;
      applyDiscount();
      couponInput.value = ""; // Clear the input field
      document.getElementById("discountNotification").classList.remove("hidden");
    } else if (couponCode.toUpperCase() === "EPCHUB2024") {
      discountRate = 0.24;
      applyDiscount();
      couponInput.value = ""; // Clear the input field
      document.getElementById("discountNotification").classList.remove("hidden");
    }
  });
  
  let isDiscountApplied = false;
  let discountRate = 0;

  function applyDiscount() {
    if (!isDiscountApplied) {
      let cartTotal = 0;
      cart.forEach((item) => {
        cartTotal += item.price;
      });
      couponprice = cartTotal;
      cartTotal *= 1 - discountRate;
      couponprice = cartTotal;

      const cartTotalElement = document.getElementById("cartTotal");
      if (cartTotalElement) {
        cartTotalElement.textContent = `RM${cartTotal.toFixed(2)}`;
      }

      isDiscountApplied = true;

      // Show success message
      const discountNotificationElement = document.getElementById(
        "discountNotification"
      );
      if (discountNotificationElement) {
        discountNotificationElement.textContent =
          "The coupon has been applied.";
        discountNotificationElement.classList.remove("hidden");
      }
    } else {
      // Show message that the code has been used
      const discountNotificationElement = document.getElementById(
        "discountNotification"
      );
      if (discountNotificationElement) {
        discountNotificationElement.textContent =
          "Discount coupon has already been used.";
        discountNotificationElement.classList.remove("hidden");
      }
    }
  }
  document.getElementById("checkOut").addEventListener("click", function () {
    // Clear the cart
    // Show a popup message
    alert(
      `Thank you for shopping with EPC HUB! A total of RM${couponprice.toLocaleString(
        "en-US",
        {
          minimumFractionDigits: 2,
        }
      )} has been paid.`
    );
    cart = [];
    // Update the display to show the empty cart
    displayCart(); // Update the cart display
    updateCartTotal(); // Update the total price display
    toggleCartVisibility();
    // Optionally, navigate to the home page. This depends on your setup; you might use window.location.href or your routing logic
    // window.location.href = '/home'; // Uncomment this line if you want to redirect

    const config = document.getElementById("configurator");
    const laptopboi = document.getElementById("laptops");
    const desktopboi = document.getElementById("desktops");
    config.classList.add("hidden");
    laptopboi.classList.add("hidden");
    desktopboi.classList.add("hidden");
  });

  function updateCategorySelection(category, selectedButton) {
    // Deselect all buttons in the category and update their text
    document
      .querySelectorAll(`.option-select[data-category="${category}"]`)
      .forEach((button) => {
        const parentCard = button.closest(".option-card");
        const price = parseFloat(button.getAttribute("data-price"));
        const priceDifference =
          price - parseFloat(selectedButton.getAttribute("data-price"));

        button.classList.remove(
          "bg-gradient-to-tr",
          "from-blue-600",
          "via-blue-400",
          "to-blue-600",
          "dark:from-purple-600",
          "dark:via-purple-400",
          "dark:to-purple-600",
          "selected",
          "border-3"
        );
        parentCard.classList.remove("dark:bg-purple-500/20", "bg-blue-500/20");

        button.textContent =
          priceDifference >= 0
            ? `+RM${priceDifference.toFixed(2)}`
            : `-RM${Math.abs(priceDifference).toFixed(2)}`;
      });

    // Select the clicked button and update its text to "Selected"
    selectedButton.classList.add(
      "bg-gradient-to-tr",
      "from-blue-600",
      "via-blue-400",
      "to-blue-600",
      "dark:from-purple-600",
      "dark:via-purple-400",
      "dark:to-purple-600",
      "selected",
      "border-3",
      "border-blue-500",
      "dark:border-purple-500"
    );

    selectedButton
      .closest(".option-card")
      .classList.add("dark:bg-purple-500/20", "bg-blue-500/20");

    if (parseFloat(selectedButton.getAttribute("data-price")) == 0) {
      selectedButton.textContent = "Included";
    } else {
      selectedButton.textContent = "Selected";
    }

    // Update the selected option for the category
    selectedOptions[category] = selectedButton;

    // Update the total price
    updateTotalPrice();
  }

  // Attach event listeners to option buttons
  document.querySelectorAll(".option-select").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      updateCategorySelection(category, button);
    });
  });

  // Initialize the default selection for each category
  categories.forEach((category) => {
    const defaultSelected =
      document.querySelector(
        `.option-select[data-category="${category}"][data-price="0"]`
      ) ||
      document.querySelector(`.option-select[data-category="${category}"]`);
    if (defaultSelected) {
      updateCategorySelection(category, defaultSelected);
    }
  });
});

function generateSerialNumber(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let serialNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    serialNumber += characters[randomIndex];
  }

  return serialNumber;
}
