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
  const video2 = document.getElementById("ls-video-bg2");

  // Preload and buffer the second video
  video2.addEventListener("loadeddata", function () {
    video2.play();
  });

  // Hide first video and show the second when the first video ends
  document.getElementById("ls-video-bg").addEventListener("ended", function () {
    document.querySelector("#ls-video-bg").setAttribute("hidden", "true");
    document.querySelector("#ls-video-bg2").removeAttribute("hidden");

    // Play the second video after it's fully buffered
    if (video2.readyState >= 3) {
      // 3 means the video is buffered enough
      video2.play();
    }
  });
};

/* Handle Signup form validation */
//   const formSection = document.getElementById("ls-section-form");
//   const signupMobile = document.getElementById("lls-mobile");
//   const signupContinueBtn = document.getElementById("continue-btn");
//   const otpMsg = document.querySelector(".ls-otp-msg");
//   const loginLabel = document.querySelector("label[for='ls-name']");
//   const otpInput = document.getElementById("lls-otp");
//   const numberDiv = document.querySelector(".lls-number-div");
//   const resendDiv = document.getElementById("resend-div");
//   const inputSignupObj = {
//     mobile: "",
//   };
//   const OtpContinueBtn = document.getElementById("continue-btn2");

//   const checkAllFields = function () {
//     if (inputSignupObj.mobile) {
//       signupContinueBtn.removeAttribute("disabled");
//     } else {
//       signupContinueBtn.setAttribute("disabled", "true");
//     }
//   };

//   const checkAllFieldsOtp = function () {
//     if (otpInput.value.length === 4) {
//       OtpContinueBtn.removeAttribute("disabled");
//     } else {
//       OtpContinueBtn.setAttribute("disabled", "true");
//     }
//   };

//   signupMobile.addEventListener("blur", function () {
//     if (signupMobile.value === "") {
//       signupMobile.classList.add("ls-input-error");
//       signupMobile.setAttribute("placeholder", "Mobile is required");
//     } else {
//       signupMobile.classList.remove("ls-input-error");
//     }
//   });

//   /* input change handler*/
//   signupMobile.addEventListener("input", function (e) {
//     /* if key is not number do not enter*/
//     if (e.data && isNaN(e.data)) {
//       e.preventDefault();
//       signupMobile.value = signupMobile.value.slice(0, -1);
//     }
//     if (signupMobile.value.length > 10) {
//       signupMobile.value = signupMobile.value.slice(0, -1);
//     }

//     const mobilePattern = /^[0-9]{10}$/;
//     if (mobilePattern.test(signupMobile.value)) {
//       if (signupMobile.classList.contains("ls-input-error")) {
//         signupMobile.classList.remove("ls-input-error");
//       }
//       inputSignupObj.mobile = signupMobile.value;
//       console.log(inputSignupObj);
//       checkAllFields();
//     } else {
//       signupMobile.classList.add("ls-input-error");
//     }
//   });
//   /* if all field are filled then show continue */

//   signupContinueBtn.addEventListener("click", function () {
//     loginLabel.setAttribute("hidden", "true");
//     numberDiv.setAttribute("hidden", "true");
//     /* node of otpMsg */
//     otpMsg.classList.add("d-flex");
//     otpMsg.querySelector(
//       "span"
//     ).innerText = `OTP has been sent to ${inputSignupObj.mobile}`;
//     otpInput.classList.add("d-flex");
//     this.style.display = "none";
//     OtpContinueBtn.style.display = "block";
//     resendDiv.style.display = "flex";
//   });

//   otpInput.addEventListener("input", function () {
//     checkAllFieldsOtp();
//   });
// };

/* Handle Signup form validation */
document.addEventListener("DOMContentLoaded", function () {
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
  const editLink = document.querySelector(".ls-otp-msg a"); // Edit link

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
      // signupMobile.setAttribute("placeholder", "Mobile is required");
    } else {
      signupMobile.classList.remove("ls-input-error");
    }
  });

  /* input change handler */
  signupMobile.addEventListener("input", function (e) {
    if (e.data && isNaN(e.data)) {
      e.preventDefault();
      signupMobile.value = signupMobile.value.slice(0, -1);
    }
    if (signupMobile.value.length > 10) {
      signupMobile.value = signupMobile.value.slice(0, -1);
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (mobilePattern.test(signupMobile.value)) {
      signupMobile.classList.remove("ls-input-error");
      inputSignupObj.mobile = signupMobile.value;
      checkAllFields();
    } else {
      signupMobile.classList.add("ls-input-error");
    }
  });

  /* Show OTP form on Continue button click */
  signupContinueBtn.addEventListener("click", function () {
    loginLabel.setAttribute("hidden", "true");
    numberDiv.setAttribute("hidden", "true");
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

  /* Edit link functionality: revert to initial form state */
  editLink.addEventListener("click", function (e) {
    e.preventDefault();

    // Revert form to initial state
    loginLabel.removeAttribute("hidden");
    numberDiv.removeAttribute("hidden");
    otpMsg.classList.remove("d-flex");
    otpInput.classList.remove("d-flex");
    signupContinueBtn.style.display = "block";
    OtpContinueBtn.style.display = "none";
    resendDiv.style.display = "none";

    // Pre-fill mobile number input with previously entered value
    signupMobile.value = inputSignupObj.mobile;
    checkAllFields();
  });
});
