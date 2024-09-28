window.onload = function () {
  window.addEventListener("scroll", function () {
    const fullViewPortHeight = window.innerHeight * 0.5;
    if (window.scrollY > fullViewPortHeight) {
      document
        .querySelector("#ls-section-form ")
        .classList.add("ls-section-form-linear");
    } else {
      document
        .querySelector("#ls-section-form ")
        .classList.remove("ls-section-form-linear");
    }
  });

  /* if rocket-first.mp4 video ends change video to  rocket-last.mp4 on loop */
  document.getElementById("ls-video-bg").addEventListener("ended", function () {
    document.querySelector("#ls-video-bg").setAttribute("hidden", "true");
    document.querySelector("#ls-video-bg2").removeAttribute("hidden");
  });

  /* Handle Signup form validation */
  const formSection = document.getElementById("ls-section-form");
  const signupName = document.getElementById("ls-name");
  const signupEmail = document.getElementById("ls-email");
  const signupMobile = document.getElementById("ls-mobile");
  const signupOtp = document.getElementById("ls-otp");
  const signupRegisterAsRadio = document.getElementsByName("register-as");
  const signupContinueBtn = document.getElementById("continue-btn");
  const signupVerifyOtp = document.getElementById("ls-otp-verify");
  const signupOtpMsg = document.getElementById("ls-otp-msg");
  const signupSendOtp = document.getElementById("ls-send-otp");

  const inputSignupObj = {
    name: "",
    email: "",
    mobile: "",
    registerAs: "individual",
    otp: "",
    verified: false,
  };

  const checkAllFields = function () {
    if (
      inputSignupObj.name &&
      inputSignupObj.email &&
      inputSignupObj.mobile &&
      inputSignupObj.otp &&
      inputSignupObj.verified
    ) {
      signupContinueBtn.removeAttribute("disabled");
    } else {
      signupContinueBtn.setAttribute("disabled", "true");
    }
  };

  signupEmail.addEventListener("blur", function () {
    if (signupEmail.value === "") {
      signupEmail.classList.add("ls-input-error");
      signupEmail.setAttribute("placeholder", "Email is required");
    } else {
      signupEmail.classList.remove("ls-input-error");
    }
  });

  signupMobile.addEventListener("blur", function () {
    if (signupMobile.value === "") {
      signupMobile.classList.add("ls-input-error");
      signupMobile.setAttribute("placeholder", "Mobile is required");
    } else {
      signupMobile.classList.remove("ls-input-error");
    }
  });

  signupName.addEventListener("blur", function () {
    if (signupName.value === "") {
      signupName.classList.add("ls-input-error");
      signupName.setAttribute("placeholder", "Name is required");
    } else {
      signupName.classList.remove("ls-input-error");
    }
  });

  signupOtp.addEventListener("blur", function () {
    if (signupOtp.value === "") {
      signupOtp.classList.add("ls-input-error");
      signupOtp.setAttribute("placeholder", "Invalid OTP");
    } else {
      signupOtp.classList.remove("ls-input-error");
    }
  });

  /* input change handler*/
  signupName.addEventListener("input", function () {
    inputSignupObj.name = signupName.value;
    checkAllFields();
  });
  signupEmail.addEventListener("input", function () {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(signupEmail.value)) {
      if (signupEmail.classList.contains("ls-input-error")) {
        signupEmail.classList.remove("ls-input-error");
      }
      inputSignupObj.email = signupEmail.value;
      console.log(inputSignupObj);
      checkAllFields();
    } else {
      signupEmail.classList.add("ls-input-error");
    }
  });

  signupMobile.addEventListener("input", function (e) {
    /* if key is not number do not enter*/
    if (e.data && isNaN(e.data)) {
      e.preventDefault();
      signupMobile.value = signupMobile.value.slice(0, -1);
    }
    if (signupMobile.value.length > 10) {
      signupMobile.value = signupMobile.value.slice(0, -1);
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (mobilePattern.test(signupMobile.value)) {
      if (signupMobile.classList.contains("ls-input-error")) {
        signupMobile.classList.remove("ls-input-error");
      }
      inputSignupObj.mobile = signupMobile.value;
      console.log(inputSignupObj);
      checkAllFields();
    } else {
      signupMobile.classList.add("ls-input-error");
    }
  });

  signupOtp.addEventListener("input", function () {
    inputSignupObj.otp = signupOtp.value;
    checkAllFields();
  });

  const howImages = document.querySelectorAll(".ls-how-img");
  const howTitleInfos = document.querySelectorAll(".ls-how-title-info");

  updateAccordionContent("individual");

  signupRegisterAsRadio.forEach((radio) => {
    radio.addEventListener("change", function () {
      inputSignupObj.registerAs = radio.value;
      checkAllFields();
      updateAccordionContent(radio.value);
      if (radio.value === "individual") {
        // Update images
        howImages.forEach((div, i) => {
          switch (i) {
            case 0:
              div.innerHTML =
                "<img src='images/login-signup/svg/how1.svg' alt='individual-1' />";
              break;
            case 1:
              div.innerHTML =
                "<img src='images/login-signup/svg/how2.svg' alt='individual-2' />";
              break;
            case 2:
              div.innerHTML =
                "<img src='images/login-signup/svg/how3.svg' alt='individual-3' />";
              break;
          }
        });

        // Update title and description
        howTitleInfos.forEach((div, i) => {
          const h5 = div.querySelector("h5");
          const p = div.querySelector("p");

          switch (i) {
            case 0:
              h5.textContent = "Fill in your Details";
              p.textContent =
                "Complete your profile, so that we understand who you are and how we can help you to choose the right property.";
              break;
            case 1:
              h5.textContent = "Tell us your Requirements";
              p.textContent =
                "Tell us in detail what you need. Whether it’s a house to buy/ sell/ rent or for any other add-on services, we have got you covered.";
              break;
            case 2:
              h5.textContent = "Track your Journey";
              p.textContent =
                "Make sure you are always informed with the progress of your search for the property. It also means that you can follow every step of your way from browsing through the listings to signing the deal.";
              break;
          }
        });
      } else if (radio.value === "business") {
        // Update images
        // howImages.forEach((div, i) => {
        //   switch (i) {
        //     case 0:
        //       div.innerHTML =
        //         "<img src='images/login-signup/svg/how2.svg' alt='builder-1' />";
        //       break;
        //     case 1:
        //       div.innerHTML =
        //         "<img src='images/login-signup/svg/how1.svg' alt='builder-2' />";
        //       break;
        //     case 2:
        //       div.innerHTML =
        //         "<img src='images/login-signup/svg/how3.svg' alt='builder-3' />";
        //       break;
        //   }
        // });

        // Update title and description
        howTitleInfos.forEach((div, i) => {
          const h5 = div.querySelector("h5");
          const p = div.querySelector("p");

          switch (i) {
            case 0:
              h5.textContent = "Sign-Up";
              p.textContent =
                "Start by registering and signing-up your business on our platform. It’s fast, effortless and provides you with an ability to reach a large audience of potential buyers and tenants.";
              break;
            case 1:
              h5.textContent = "Verify Your Account";
              p.textContent =
                "For better credibility and improved visibility of your account, ensure your account is verified. Because, it is a fact that users tend to trust and engage more with the verified accounts.";
              break;
            case 2:
              h5.textContent = "Post Properties";
              p.textContent =
                "Start listing your properties, be it for sale or rent. Expand your market and start getting potential buyers.";
              break;
          }
        });
      } else {
        // Update images for vendor
        // howImages.forEach((div, i) => {
        //   switch (i) {
        //     case 0:
        //       div.innerHTML =
        //         "<img src='images/login-signup/svg/how3.svg' alt='vendor-1' />";
        //       break;
        //     case 1:
        //       div.innerHTML =
        //         "<img src='images/login-signup/svg/how1.svg' alt='vendor-2' />";
        //       break;
        //     case 2:
        //       div.innerHTML =
        //         "<img src='images/login-signup/svg/how2.svg' alt='vendor-3' />";
        //       break;
        //   }
        // });

        // Update title and description for vendor
        howTitleInfos.forEach((div, i) => {
          const h5 = div.querySelector("h5");
          const p = div.querySelector("p");

          switch (i) {
            case 0:
              h5.textContent = "Sign-Up";
              p.textContent =
                "Create a vendor’s account and start listing your services including interior design, movers, packers and more.";
              break;
            case 1:
              h5.textContent = "Verify Your Account";
              p.textContent =
                "Make Sure to verify your account to add credibility and attract attention of the potential clients.";
              break;
            case 2:
              h5.textContent = "Start Receiving Leads";
              p.textContent =
                "Connect with interested leads/clients and expand effectively.";
              break;
          }
        });
      }
    });
  });

  signupVerifyOtp.addEventListener("click", function () {
    if (signupOtp.value === "") {
      signupOtp.classList.add("ls-input-error");
    } else if (signupOtp.value === "1234") {
      if (signupOtp.classList.contains("ls-input-error")) {
        signupOtp.classList.remove("ls-input-error");
      }
      signupOtp.setAttribute("disabled", "true");
      signupVerifyOtp.setAttribute("disabled", "true");
      signupVerifyOtp.innerHTML = "Verified";
      document.querySelector("#ls-resend-txt").style.display = "none";
      document.querySelector("#ls-resend-otp").style.display = "none";
      inputSignupObj.verified = true;
      checkAllFields();
    }
  });

  signupSendOtp.addEventListener("click", function () {
    console.log(signupMobile.value);
    if (
      inputSignupObj.mobile &&
      signupMobile.value.length === inputSignupObj.mobile.length
    ) {
      signupOtpMsg.innerHTML = `OTP sent to ${inputSignupObj.mobile}`;
      signupOtpMsg.style.display = "block";
      signupSendOtp.setAttribute("disabled", "true");
      document.querySelector(".otp-none").classList.remove("otp-none");
      checkAllFields();
    }
  });

  /* if all field are filled then show continue */
};
let category = "Individual";
// Function to update accordion content
function updateAccordionContent(category) {
  // Clear existing accordion items
  const accordionContainer = document.querySelector(
    "#accordionPanelsStayOpenExample"
  );
  accordionContainer.innerHTML = "";

  let accordionData = [];

  // Define accordion data based on the selected category
  if (category === "individual") {
    accordionData = [
      {
        question: "How do I create an account?",
        answer:
          "To create an account, sign up on the platform, go to your profile, complete all the required details, and verify your information.",
      },
      {
        question: "Is there any brokerage?",
        answer: "No, there is no brokerage.",
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, your personal information is secure with Realezi.",
      },
      {
        question:
          "If needed, how can I get assistance during the whole process?",
        answer:
          "Go to your dashboard, click on “Connect with DRM,” and request a call back. Your Dedicated Relationship Manager (DRM) will assist you.",
      },
      {
        question: "Is there any mobile application for Realezi?",
        answer: "Yes, Realezi has a mobile application.",
      },
      {
        question: "How does Realezi help me throughout the journey?",
        answer:
          "Realezi helps you through the entire process, from understanding your requirements to fulfilling them.",
      },
      {
        question: "Can I delete my account if I no longer need it?",
        answer: "Yes, you can delete your account.",
      },
      {
        question: "Can I save my favourite properties?",
        answer: "Yes, you can save your favorite properties.",
      },
      {
        question: "What services can I get access to?",
        answer:
          "You can access services related to buying, selling, solar panel, interior design,  architectural, legal aid, financing, and mover and packers.",
      },
      {
        question: "Can I update my profile details after signing-up?",
        answer: "Yes, you can update your profile details after signing up.",
      },
      {
        question: "Will I be able to track my homeownership journey?",
        answer: "Yes, you can track your journey on your dashboard.",
      },
      {
        question: "What do we mean by individuals?",
        answer:
          "People who want to buy or sell properties or avail services at individual capacity",
      },
    ];
  } else if (category === "business") {
    accordionData = [
      {
        question:
          "Does Realezi provide a dashboard to analyze our performance?",
        answer:
          "Yes, Realezi provides a dashboard where builders can analyze their performance.",
      },
      {
        question: "How does Realezi verify business accounts?",
        answer:
          "Realezi verifies business accounts through its own KYC verification process",
      },
      {
        question: "What kind of support does Realezi provide to businesses?",
        answer:
          "Realezi helps expedite site visits, provides add-on services, and offers end-to-end assistance during the selling process.",
      },
      {
        question: "How many properties will I be able to list on Realezi?",
        answer: "There is no limit to the number of properties you can list.",
      },
      {
        question: "How can I respond to enquiries from potential buyers?",
        answer:
          "All inquiries will be generated on your dashboard, where you can access and respond to them.",
      },
      {
        question: "In how much time will I be able to verify my account?",
        answer:
          "You will need an GST certificate, Aadhaar card, verified phone number, email ID, and address proof.",
      },
    ];
  } else if (category === "vendor") {
    accordionData = [
      {
        question: "How can I increase my chances of getting a lead?",
        answer:
          "You can increase your chances by posting all necessary information, uploading relevant documents, and providing videos or previous work examples.",
      },
      {
        question:
          "Can I update my service offerings or pricing of our listed products?",
        answer:
          "Yes, you can update your service offerings and pricing at any time.",
      },
      {
        question: "How can Realezi help me grow?",
        answer:
          "Realezi connects you with verified customers and helps you grow your business through a partnership model.",
      },
      {
        question: "What is the fee for listing my services on Realezi?",
        answer:
          "Currently, there is no upfront fee as Realezi works on a channel partnership model.",
      },
      {
        question: "How can I manage my leads?",
        answer: "You can manage your leads through your dashboard.",
      },
    ];
  }

  // Loop through the accordion data and add items to the accordion container
  accordionData.forEach((item, index) => {
    const isActive = index === 0 ? "show" : ""; // Keep the first accordion item open
    const accordionItem = `
        <div class="accordion-item my-3">
          <h2 class="accordion-header" id="panelsStayOpen-heading${index + 1}">
            <button class="accordion-button ${
              isActive ? "" : "collapsed"
            }" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse${
                index + 1
              }" aria-expanded="${isActive ? "true" : "false"}"
              aria-controls="panelsStayOpen-collapse${index + 1}">
              ${item.question}
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${
            index + 1
          }" class="accordion-collapse collapse ${isActive}"
            aria-labelledby="panelsStayOpen-heading${index + 1}">
            <div class="accordion-body">
              ${item.answer}
            </div>
          </div>
        </div>
      `;
    accordionContainer.innerHTML += accordionItem;
  });
}
