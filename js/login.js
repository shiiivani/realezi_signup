window.onload = function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 230) {
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
  const signupMobile = document.getElementById("lls-mobile");
  const signupContinueBtn = document.getElementById("continue-btn");
  const otpMsg = document.querySelector(".ls-otp-msg");
  const loginLabel = document.querySelector("label[for='ls-name']");
  const otpInput = document.getElementById("lls-otp");
  const numberDiv = document.querySelector(".lls-number-div");
  const resendDiv = document.getElementById("resend-div");
  const inputSignupObj = {
    mobile: "",
  };
  const OtpContinueBtn = document.getElementById("continue-btn2");

  const checkAllFields = function () {
    if (inputSignupObj.mobile) {
      signupContinueBtn.removeAttribute("disabled");
    } else {
      signupContinueBtn.setAttribute("disabled", "true");
    }
  };

  const checkAllFieldsOtp = function () {
    if (otpInput.value.length === 4) {
      OtpContinueBtn.removeAttribute("disabled");
    } else {
      OtpContinueBtn.setAttribute("disabled", "true");
    }
  };

  signupMobile.addEventListener("blur", function () {
    if (signupMobile.value === "") {
      signupMobile.classList.add("ls-input-error");
      signupMobile.setAttribute("placeholder", "Mobile is required");
    } else {
      signupMobile.classList.remove("ls-input-error");
    }
  });

  /* input change handler*/
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
  /* if all field are filled then show continue */

  signupContinueBtn.addEventListener("click", function () {
    loginLabel.setAttribute("hidden", "true");
    numberDiv.setAttribute("hidden", "true");
    /* node of otpMsg */
    otpMsg.classList.add("d-flex");
    otpMsg.querySelector(
      "span"
    ).innerText = `OTP has been sent to ${inputSignupObj.mobile}`;
    otpInput.classList.add("d-flex");
    this.style.display = "none";
    OtpContinueBtn.style.display = "block";
    resendDiv.style.display = "flex";
  });

  otpInput.addEventListener("input", function () {
    checkAllFieldsOtp();
  });
};
