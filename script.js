/**
 * A = P(1 + rt)
 * Test:
 * A = (1000000 x (1 + (0.035 x 5)) - 1000000 = 175000
 */

(function App() {
  class Calculator {
    constructor() {
      this.amountInput = document.getElementById("principal");
      this.rateInput = document.getElementById("rate-slider");
      this.rateValue = document.getElementById("rate-slider-input");
      this.yearsInput = document.getElementById("years");
      this.computeBtn = document.getElementById("computeBtn");
      
      this.msg = document.getElementById("message");
      this.msgDepositVal = document.getElementById("deposit");
      this.msgInterestVal = document.getElementById("interest-rate");
      this.msgInterestPaidVal = document.getElementById("interest-paid");
      this.msgYearPaid = document.getElementById("year-paid");
      
      this.rateValue.innerHTML = this.rateInput.value + "%"
      this.currentYear = new Date();
      this.events();
    }

    events() {
      this.computeBtn.addEventListener("click", () => this.compute());
      this.rateInput.addEventListener("input", () =>  this.rateValue.innerHTML = this.rateInput.value + "%")
    }

    compute() {
      this.msg.style.display = "block";
      this.msgDepositVal.innerHTML = Number(this.amountInput.value);
      this.msgInterestVal.innerHTML = Number(this.rateInput.value);
      this.msgInterestPaidVal.innerHTML =
        Number(this.amountInput.value) *
          (1 +
            Number(this.rateInput.value / 100) *
              Number(this.yearsInput.value)) -
        this.amountInput.value;
      this.msgYearPaid.innerHTML =
        this.currentYear.getFullYear() + Number(this.yearsInput.value);
    }
  }

  const calculate = new Calculator();
})();


