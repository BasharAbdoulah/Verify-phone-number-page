import "./App.css";
import "../src/Style/main.scss";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./Routes_logo.e4586c14.svg";

const strings = {
  phoneNumber: {
    title: "Please Enter your Phone Number!",
    label: "Phone Number",
    button: "Send",
  },
  code: {
    title: "Please Enter the code",
    label: "Code of 6 digits!",
    button: "Confirm",
  },
};

function App() {
  const [codeMode, setCodeMode] = useState(false);
  const [lodaing, setLoading] = useState(false);
  const [fullName, setFullName] = useState();
  const [code, setCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = (e) => {
    console.log(e.target.fullName.value);
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCodeMode(true);
      setPhoneNumber("");
    }, 2000);
  };

  return (
    <div className="App">
      <header className="row">
        <div className="logo col-6">
          <img
            alt="logo"
            src="https://storage.googleapis.com/wzukusers/user-34680569/images/5d89cff004d96YVt5GU3/Header-Logo-01_d200.png"
          />
        </div>
        <div className="nav-items col-6">
          <ul>
            {/* <li>About us</li>
            <li>Contact</li> */}
            <li>Phone number verification</li>
          </ul>
        </div>
      </header>
      <main id="content">
        <div className="row">
          <div className="middle-logo">
            <img height={20} src={logo} />
          </div>
          <div className="col-12">
            <div className="container form-container">
              <form onSubmit={handleSubmit}>
                <h3>
                  {codeMode ? strings.code.title : strings.phoneNumber.title}
                </h3>
                <div class="row">
                  <div class="col">
                    <label>
                      {codeMode
                        ? strings.code.label
                        : strings.phoneNumber.label}
                    </label>
                    <input
                      name="phoneNumber"
                      required
                      type="text"
                      class="form-control"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                {codeMode ? (
                  ""
                ) : (
                  <div class="row">
                    <div class="col">
                      <label>Full Name</label>
                      <input
                        required
                        name="fullName"
                        type="text"
                        class="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col">
                    <button
                      // onClick={handleSubmit}
                      className={`d-flex justify-content-center align-items-center ${
                        codeMode ? "code" : "number"
                      }`}
                    >
                      {lodaing ? (
                        <div
                          style={{ width: "25px", height: "25px" }}
                          class="spinner-border text-dark"
                          role="status"
                        ></div>
                      ) : codeMode ? (
                        strings.code.button
                      ) : (
                        strings.phoneNumber.button
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <div className="row footer-row">
        <footer class="d-flex  flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="container d-flex align-items-center justify-content-between">
            <div class="col-md-4 d-flex align-items-center copyright">
              <img height={20} src={logo} />

              <span class="m ml-1 text-muted">
                &copy; 2023, All rights reserved
              </span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a class="text-muted" href="#">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="#">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="#">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
