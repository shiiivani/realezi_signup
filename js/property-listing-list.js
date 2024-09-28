//property-type filter
window.onload = () => {
  let filters = {
    propertyType: [],
    bhkType: [],
    budgetMin: 0,
    budgetMax: 500000000,
    saleType: [],
    possessionStage: [],
  };

  /* Handle More Text */
  const dotDotDot = document.querySelectorAll("#dot-dot-dot");
  const moreText = document.querySelectorAll("#sponsored-more-txt");
  const moreBtn = document.querySelectorAll("#sponsored-more-btn");
  /* 
  moreBtn.addEventListener("click", () => {
    if (moreBtn.textContent === "more") {
      dotDotDot.style.display = "none";
      moreText.style.display = "inline";
      moreBtn.textContent = "show less";
    } else {
      dotDotDot.style.display = "inline";
      moreText.style.display = "none";
      moreBtn.textContent = "more";
    }
  }); */

  moreBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (item.textContent === "more") {
        dotDotDot[i].style.display = "none";
        moreText[i].style.display = "inline";
        item.textContent = "show less";
      } else {
        dotDotDot[i].style.display = "inline";
        moreText[i].style.display = "none";
        item.textContent = "more";
      }
    });
  });

  /* Flip chevron on dropdown open */
  //flip chevron on dropdown open
  document.querySelectorAll(".dropdown").forEach((item) => {
    item.addEventListener("shown.bs.dropdown", (event) => {
      event.target.querySelector("svg").style.transform = "rotate(180deg)";
    });
    item.addEventListener("hidden.bs.dropdown", (event) => {
      event.target.querySelector("svg").style.transform = "rotate(0deg)";
    });
  });
  //change property type on click
  document.querySelectorAll(".property-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-property-type");
      /* handle multi-select */
      if (item.classList.contains("active-property-type")) {
        filters.propertyType.push(e.target.getAttribute("data-property-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.propertyType = filters.propertyType.filter(
          (type) => type !== e.target.getAttribute("data-property-type")
        );
        if (filters.propertyType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  document.querySelectorAll(".bhk-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-bhk-type");
      /* handle multi-select */
      if (item.classList.contains("active-bhk-type")) {
        filters.bhkType.push(e.target.getAttribute("data-bhk-count"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.bhkType = filters.bhkType.filter(
          (type) => type !== e.target.getAttribute("data-bhk-count")
        );
        if (filters.bhkType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Budget Slider */
  const minSlider = document.getElementById("slider-min");
  const maxSlider = document.getElementById("slider-max");

  function setMinMax() {
    if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
      let tmp = minSlider.value;
      minSlider.value = maxSlider.value;
      maxSlider.value = tmp;
    }

    if (minSlider.value == 0) {
      document.getElementById("budget-start-label").textContent = "Rs. " + 0;
      filters.budgetMin = 0;
    } else {
      if (minSlider.value < 10000000) {
        document.getElementById("budget-start-label").textContent =
          "Rs. " + minSlider.value / 100000 + "L";
        filters.budgetMin = minSlider.value;
      } else {
        document.getElementById("budget-start-label").textContent =
          "Rs. " + minSlider.value / 10000000 + "Cr";
        filters.budgetMin = minSlider.value;
      }
    }
    /*  document.getElementById('budget-end-label').textContent = 'Rs. '+ maxSlider.value + 'Cr'; */
    if (maxSlider.value == 0) {
      document.getElementById("budget-end-label").textContent = "Rs. " + 0;
      filters.budgetMax = 500000000;
    } else {
      if (maxSlider.value < 10000000) {
        document.getElementById("budget-end-label").textContent =
          "Rs. " + maxSlider.value / 100000 + "L";
        filters.budgetMax = maxSlider.value;
      } else if (maxSlider.value == 50000000) {
        document.getElementById("budget-end-label").textContent =
          "Rs. " + 5 + "Cr";
        filters.budgetMax = 50000000;
      } else {
        document.getElementById("budget-end-label").textContent =
          "Rs. " + maxSlider.value / 10000000 + "Cr";
        filters.budgetMax = maxSlider.value;
      }
    }
  }

  minSlider.addEventListener("input", setMinMax);
  maxSlider.addEventListener("input", setMinMax);

  /* Sale Type */
  document.querySelectorAll(".sale-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-sale-type");
      /* handle multi-select */
      if (item.classList.contains("active-sale-type")) {
        filters.saleType.push(e.target.getAttribute("data-sale-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.saleType = filters.saleType.filter(
          (type) => type !== e.target.getAttribute("data-sale-type")
        );
        if (filters.saleType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Posession Stage */
  document.querySelectorAll(".possession-stages").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-possession-stage");
      /* handle multi-select */
      if (item.classList.contains("active-possession-stage")) {
        filters.possessionStage.push(
          e.target.getAttribute("data-possession-stage")
        );
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
        console.log(filters.possessionStage);
      } else {
        filters.possessionStage = filters.possessionStage.filter(
          (type) => type !== e.target.getAttribute("data-possession-stage")
        );
        console.log("else triggered");
        if (filters.possessionStage.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Handle Sort By Dropdown */
  const dropDownBtnTxt = document.getElementById("sortBySelection");
  const eachSortEl = document.querySelectorAll(".sort-by");
  eachSortEl.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      dropDownBtnTxt.innerHTML = item.getAttribute("data-sort-by");
    });
  });

  /* Handle More Filters Scroll */
  const allOptions = document.querySelectorAll(".more-left-btns");
  const scrollableMoreDiv = document.querySelector(".more-right-filters");
  allOptions.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      let idOfFilterToScroll = e.target.getAttribute("data-scroll-to");
      let element = document.getElementById(idOfFilterToScroll);
      scrollableMoreDiv.scrollTo({
        top: element.offsetTop - 0,
        behavior: "smooth",
      });
    });
  });

  /* handle card detail view */
  document.querySelectorAll(".pl-card-detailed-box").forEach((card) => {
    /* find the button  */
    let button = card.querySelector(".pl-card-detailed-button");

    /* find all card items with class .pl-card-detailed-content-item-hidden  */
    let cardItem = card.querySelectorAll(
      ".pl-card-detailed-content-item-hidden"
    );

    /* add event listener to button */
    button.addEventListener("click", () => {
      cardItem.forEach((item) => {
        console.log(item);
        item.classList.toggle("pl-card-detailed-content-item-hidden");
      });
    });
  });

  var splide = new Splide(".splide", {
    perPage: 1.2,
    type: "slide",
    focus: "center",
    rewind: true,
    breakpoints: {
      768: {
        perPage: 1.2,
      },
    },
  });

  splide.mount();

  new rive.Rive({
    src: "rive/fire.riv", // host your Rive file and add the url to src
    canvas: document.getElementById("pl-fire"),
    autoplay: true,
    layout: new rive.Layout({ fit: "contain", alignment: "center" }),
  });

  /* on clicking .pll-like button fill the path color to orange  */
  document.querySelectorAll(".pll-like").forEach((item) => {
    item.addEventListener("click", (e) => {
      let session = false;
      e.stopPropagation();
      session && item.querySelector("path").classList.toggle("pll-like-active");
    });
  });

  // Party Popper Animation
  const partyPopper = new rive.Rive({
    src: "./rive/partyPopper.riv",
    canvas: document.getElementById("partyPopper"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      partyPopper.resizeDrawingSurfaceToCanvas();
    },
  });

  let listedbySelections = [];
  let verifiedSelections = [];
  let amenitiesSelections = [];
  let bathroomSelections = [];
  let facingSelections = [];
  let ageOfPropertySelections = [];

  document.querySelectorAll(".more-filters").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.parentElement.parentElement.id === "pl-filter-listedby") {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          listedbySelections.pop(e.target.getAttribute("data-listed-by"));
        } else {
          item.classList.add("pl-more-active");
          listedbySelections.push(e.target.getAttribute("data-listed-by"));
        }
        console.log(listedbySelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-verified"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          verifiedSelections.pop(e.target.getAttribute("data-verified"));
        } else {
          item.classList.add("pl-more-active");
          verifiedSelections.push(e.target.getAttribute("data-verified"));
        }
        console.log(verifiedSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-amenities"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          amenitiesSelections.pop(e.target.getAttribute("data-amenities"));
        } else {
          item.classList.add("pl-more-active");
          amenitiesSelections.push(e.target.getAttribute("data-amenities"));
        }
        console.log(amenitiesSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-bathrooms"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          bathroomSelections.pop(e.target.getAttribute("data-bathroom"));
        } else {
          item.classList.add("pl-more-active");
          bathroomSelections.push(e.target.getAttribute("data-bathroom"));
        }
        console.log(bathroomSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-facing"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          facingSelections.pop(e.target.getAttribute("data-facing"));
        } else {
          item.classList.add("pl-more-active");
          facingSelections.push(e.target.getAttribute("data-facing"));
        }
        console.log(facingSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-ageOfProperty"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          ageOfPropertySelections.pop(
            e.target.getAttribute("data-age-of-property")
          );
        } else {
          item.classList.add("pl-more-active");
          ageOfPropertySelections.push(
            e.target.getAttribute("data-age-of-property")
          );
        }
        console.log(ageOfPropertySelections);
      }
    });
  });

  /* handle searchbox input */
  let selectedTags = [];
  const searchInput = document.getElementById("pl-search-input");
  const searchDropDiv = document.querySelector("#pl-search-drop-div");
  const searchDropdownList = document.querySelector(".pl-search-drop");
  const tagDiv = document.querySelector("#pl-search-tag-div");
  const allTagDiv = document.querySelector(".pl-tag-list-all");
  const focusSearchInput = () => {
    searchInput.focus();
  };

  tagDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInput.value = "";
    focusSearchInput();
  });

  /* handle dropdiv visibility */
  searchInput.addEventListener("focus", () => {
    console.log("focus triggered");
    tagDiv.style.display = "none";
    searchDropDiv.style.display = "block";
  });

  searchInput.addEventListener("blur", (e) => {
    console.log("blur triggered");
    searchDropDiv.style.display = "none";
    tagDiv.style.display = "flex";
  });
  searchDropdownList.querySelectorAll("li").forEach((item) => {
    console.log(item);
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      /* tagDiv.style.display = "flex"; */
      /* check if it exists on selectedTags, push if not else nothing */
      console.log(e.target.textContent);
      if (!selectedTags.includes(e.target.textContent)) {
        selectedTags.push(e.target.textContent);
        const mainlocation = document.getElementById("pl-tag-location");
        if (mainlocation) {
          tagDiv.removeChild(mainlocation);
        }
        if (
          tagDiv.childElementCount > 1 &&
          tagDiv.firstChild.textContent !== "Vadodara"
        ) {
          /* check if the element exists*/
          if (document.getElementById("pl-tag-counter")) {
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.classList.add("pl-counter-part");
            newTag.id = "alltag-id";
            newTag.textContent = e.target.textContent;
            document.querySelector(".pl-tag-list-all").appendChild(newTag);

            return;
          }

          const counterTag = document.createElement("div");
          counterTag.classList.add("pl-search-tag");
          counterTag.id = "pl-tag-counter";
          counterTag.textContent = selectedTags.length - 1 + "+";
          tagDiv.appendChild(counterTag);
          const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.classList.add("pl-counter-part");
          newTag.id = "alltag-id";
          newTag.textContent = e.target.textContent;
          document.querySelector(".pl-tag-list-all").appendChild(newTag);
          return;
        }

        const newTag = document.createElement("div");
        newTag.classList.add("pl-search-tag");
        newTag.textContent = e.target.textContent;
        tagDiv.appendChild(newTag);
        let copyChild = tagDiv.children[1].cloneNode(true);
        copyChild.id = "alltag-id";
        document.querySelector(".pl-tag-list-all").appendChild(copyChild);
      }
    });
  });

  /* handle tag removal from allTagDiv */
  allTagDiv.addEventListener("mousedown", (event) => {
    event.preventDefault();
    allTagDiv.querySelectorAll("#alltag-id").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allTagDiv.removeChild(item);
        selectedTags = selectedTags.filter(
          (tag) => tag !== e.target.textContent
        );
        console.log(selectedTags);
        /* remove from tagDiv */
        if (selectedTags.length === 0) {
          const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.textContent = "Vadodara";
          newTag.id = "pl-tag-location";
          /* remove all  */
          tagDiv.querySelectorAll(".pl-search-tag").forEach((item) => {
            tagDiv.removeChild(item);
          });
          tagDiv.appendChild(newTag);
        }
        tagDiv.querySelectorAll(".pl-search-tag").forEach((item) => {
          console.log(
            item.textContent +
              " is the item and length is: " +
              selectedTags.length
          );
          /* case 1: if len of selectedTags >= 2 and selected tag context is true */
          if (
            selectedTags.length >= 2 &&
            e.target.textContent == item.textContent
          ) {
            console.log("triggered case 1");
            /* remove the item and decrease the counter */
            tagDiv.removeChild(item);
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            /* add the reduced item as tag*/
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[0];
            tagDiv.insertBefore(newTag, tagDiv.children[1]);
            return;
          }

          /* case 1.5: if len of selectedTags === 2 and selected tag context is false */
          if (
            selectedTags.length === 1 &&
            e.target.textContent !== item.textContent
          ) {
            console.log("triggered case 1.5");
            const tagCounter = document.getElementById("pl-tag-counter");
            tagCounter.remove();
            /*  const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[1];
            tagDiv.appendChild(newTag); */
            return;
          }

          /* case 2: if len of selectedTags >= 2 and selected tag context is false */
          if (
            selectedTags.length >= 2 &&
            e.target.textContent !== item.textContent
          ) {
            console.log("triggered case 2");
            /* reduce counter */
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            return;
          }

          /* case 3: if len of selectedTags == 1 and selected tag context is true */
          if (
            selectedTags.length == 1 &&
            e.target.textContent == item.textContent
          ) {
            console.log("triggered case 3");
            tagDiv.removeChild(item);
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[0];
            tagDiv.appendChild(newTag);

            return;
          }
        });
      });
    });
  });

  /* handle tag removal */
  tagDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    return;
    const oldCode = `if (e.target.classList.contains("pl-search-tag")) {
      if (e.target.textContent === "Vadodara") {
        searchInput.value = "";
        focusSearchInput();
        return;
      }
      if (e.target.id === "pl-tag-counter") {
        selectedTags.splice(1, selectedTags.length - 1);
        allTagDiv.querySelectorAll(".pl-counter-part").forEach((item) => {
          /* if first item do not remove */
          if (item.textContent === selectedTags[0]) {
            return;
          }
          console.log("removed: ", item);
          allTagDiv.removeChild(item);
        });
        return;
      }
      /* IF THE SELECTED TAGS LEN > 0 AND THE FIRST CHILD IS pl-tag-counter we will first add the first count value as tag and reduce the count*/

      selectedTags = selectedTags.filter((tag) => tag !== e.target.textContent);
      tagDiv.removeChild(e.target);
      console.log("Removed: ", allTagDiv.querySelector(".pl-search-tag"));
      allTagDiv.removeChild(allTagDiv.querySelector(".pl-search-tag"));
      tagDiv.style.display = "flex";
      console.log(selectedTags);
      if (
        selectedTags.length > 0 &&
        document.getElementById("pl-tag-counter")
      ) {
        console.log("triggered");
        const newTag = document.createElement("div");
        newTag.classList.add("pl-search-tag");

        newTag.textContent = selectedTags[0];
        /* second child */
        tagDiv.insertBefore(newTag, tagDiv.children[1]);
        document.getElementById("pl-tag-counter").textContent =
          selectedTags.length - 1 + "+";
        if (selectedTags.length === 1) {
          tagDiv.removeChild(document.getElementById("pl-tag-counter"));
        }
      }
      if (selectedTags.length === 0) {
        const newTag = document.createElement("div");
        newTag.classList.add("pl-search-tag");
        newTag.textContent = "Vadodara";
        newTag.id = "pl-tag-location";
        tagDiv.appendChild(newTag);
      }
    }`;
  });

  /* if screen size is max-width 916px collapse pl-nav-2 */
  const plNav2 = document.querySelector("#pl-nav-2");
  const filterBtn = document.querySelector(".pl-mobile-filter-btn");
  if (window.innerWidth <= 916) {
    plNav2.classList.add("pl-nav-2-mob-hidden");
    filterBtn.addEventListener("click", () => {
      plNav2.classList.toggle("pl-nav-2-mob-hidden");
    });
  } else {
    plNav2.classList.remove("pl-nav-2-mob-hidden");
  }

  const plShare = document.querySelectorAll(".pll-share");
  const plShareDiv = document.querySelectorAll(".share-div");
  plShare.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      plShareDiv.forEach((div, j) => {
        j === i && div.classList.toggle("share-div-active");
      });
    });
  });

  /* Build Up Area JS */
  const builtupArea = document.getElementById("pl-filter-builtupArea");
  const builtupAreaStartLabel = document.getElementById(
    "builtupArea-start-label"
  );
  const builtupAreaEndLabel = document.getElementById("builtupArea-end-label");
  const builtupAreaMinSlider = document.getElementById(
    "builtupArea-slider-min"
  );
  const builtupAreaMaxSlider = document.getElementById(
    "builtupArea-slider-max"
  );
  const builtupAreaSliderTrack = document.querySelector(
    ".dual-range-slider .slider-track"
  );
  const builtupAreaLabels = document.querySelectorAll(
    ".dual-range-slider .labels span"
  );

  function setBuiltupAreaMinMax() {
    if (
      parseInt(builtupAreaMinSlider.value) >
      parseInt(builtupAreaMaxSlider.value)
    ) {
      let tmp = builtupAreaMinSlider.value;
      builtupAreaMinSlider.value = builtupAreaMaxSlider.value;
      builtupAreaMaxSlider.value = tmp;
    }

    if (builtupAreaMinSlider.value == 0) {
      builtupAreaStartLabel.textContent = "0";
    } else {
      builtupAreaStartLabel.textContent = builtupAreaMinSlider.value + "sq.ft";
    }
  }

  builtupAreaMinSlider.addEventListener("input", setBuiltupAreaMinMax);
  builtupAreaMaxSlider.addEventListener("input", setBuiltupAreaMinMax);

  builtupAreaMaxSlider.addEventListener("input", () => {
    if (builtupAreaMaxSlider.value == 5000) {
      builtupAreaEndLabel.textContent = "5000+ sq.ft";
    } else {
      builtupAreaEndLabel.textContent = builtupAreaMaxSlider.value + "sq.ft";
    }
  });

  /* end */
};

function shareToFacebook(url) {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareToWhatsApp(url) {
  window.open(`https://wa.me/?text=${url}`, "_blank");
}

function shareToEmail(url) {
  const subject = encodeURIComponent("Check out this article!");
  const body = encodeURIComponent(`I found this article interesting: ${url}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink(url) {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
}

document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".pl-posted-by-download-b");
  const likeButtons = document.querySelectorAll(".pll-like");
  const contactModalButtons = document.querySelectorAll(
    ".pl-posted-by-contact-p"
  );
  const interestModalButtons = document.querySelector(".interested-btn");
  const modal = document.querySelector(".brochure-modal-container");
  const closeIcon = document.querySelector(
    ".brochure-modal-container .close-icon"
  );
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showModal();
    });
  });

  contactModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showModal();
    });
  });

  likeButtons.forEach((button) => {
    button.addEventListener("mousedown", function (e) {
      showModal();
    });
  });

  interestModalButtons.addEventListener("click", function () {
    showModal();
  });

  closeIcon.addEventListener("click", function () {
    hideModal();
  });

  document
    .querySelector(".brochure-modal-container")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("brochure-modal-container")) {
        hideModal();
      }
    });
});

// Otp sent message
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".brochure-modal form");
  const countryCodeSelect = document.getElementById("country-code");
  const phoneNumberCont = document.querySelector(".phone-number-container");
  const phoneNumberInput = document.getElementById("phone-number");
  const sendOtpBtn = document.getElementById("send-otp-btn");
  const otpSentMessage = document.getElementById("otp-sent-message");

  sendOtpBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const countryCode = countryCodeSelect.value;
    const phoneNumber = phoneNumberInput.value;

    if (phoneNumber) {
      otpSentMessage.textContent = `We have sent the OTP to ${countryCode} ${phoneNumber}.`;
      otpSentMessage.classList.add("active");
      phoneNumberCont.classList.add("sent");
      document
        .querySelector(".otp-container")
        .classList.add("otp-container-active");
      phoneNumberInput.style.marginBottom = "0";
    } else {
      alert("Please enter a valid phone number.");
      document
        .querySelector(".otp-container")
        .classList.remove("otp-container-active");
    }
  });
});

// Checking validity of forms
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modals form");

  forms.forEach(function (form) {
    const submitButton = form.querySelector(".submit-btn");
    const checkBox = document.querySelector(".modals #checkboxId");
    const verifyOtpButton = document.querySelector("#verify-otp");
    form.addEventListener("input", function () {
      const isValid = form.checkValidity();

      if (isValid && checkBox.checked) {
        submitButton.disabled = false;
        submitButton.classList.add("active");
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active");
      }
    });
    verifyOtpButton.addEventListener("click", function (e) {
      e.preventDefault();
      const otpInput = document.querySelector("input[name='otp']");
      console.log(otpInput.value);
      if (otpInput.value.length === 4) {
        otpInput.setAttribute("disabled", true);
        verifyOtpButton.setAttribute("disabled", true);
        document.querySelector(".otp-container label").textContent = "Verified";
        document.querySelector(".otp-container label").style.color = "green";
        otpInput.value = "";
      } else {
        otpInput.value = "";
        alert("Please enter a valid OTP.");
      }
    });
  });
});

// Confirmation Modal Popup and form reset
document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll(".submit-btn");
  const modals = document.querySelectorAll(".modals");
  const confirmationPopupModals = document.querySelectorAll(
    ".confirmation-popup-modal"
  );
  const closeIcons = document.querySelectorAll(".modal-container .close-icon");

  submitButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      modals[index].style.display = "none";
      const form = modals[index].querySelector("form");
      if (form) form.reset();

      const confirmationModal = confirmationPopupModals[index];
      confirmationModal.style.display = "block";

      const video = confirmationModal.querySelector("video");
      video.play();

      setTimeout(function () {
        video.classList.add("shrink");
        confirmationModal.classList.add("show");
      }, 3500);
    });
  });

  closeIcons.forEach((closeIcon, index) => {
    closeIcon.addEventListener("click", function () {
      const confirmationModal = confirmationPopupModals[index];
      const video = confirmationModal.querySelector("video");

      confirmationPopupModals[index].style.display = "none";
      modals[index].style.display = "block";
      confirmationModal.classList.remove("show");
      video.classList.remove("shrink");
    });
  });
});
