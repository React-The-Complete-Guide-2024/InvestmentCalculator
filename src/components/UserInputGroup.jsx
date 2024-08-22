
export default function UserInputGroup({onInputChange, userInput}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            value={userInput.initialInvestment}
            type="number"
            required
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            value={userInput.annualInvestment}
            type="number"
            required
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            value={userInput.expectedReturn}
            type="number"
            required
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            type="number"
            required
            onChange={(event) =>
              onInputChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
