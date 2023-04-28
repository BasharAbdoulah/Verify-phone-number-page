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

  // Get unique id using browser local storage
  // function getMachineId() {
  //   let machineId = localStorage.getItem("MachineId");

  //   // if (!machineId) {
  //   //   machineId = crypto.randomUUID();
  //   //   localStorage.setItem("MachineId", machineId);
  //   // }

  //   return machineId;
  // }

  // console.log(getMachineId());

  function generateUniqueID() {
    var hardwareConcurrency = window.navigator.hardwareConcurrency || "";
    var platform = window.navigator.userAgent.platform || "";
    var userAgent = window.navigator.userAgent || "";
    var uniqueID = hardwareConcurrency + "-" + platform + "-" + userAgent;
    return uniqueID;
  }

  console.log(generateUniqueID());

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  if (lodaing) {
    setTimeout(() => {
      setLoading(false);
      setCodeMode(true);
    }, 2000);
  }
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
              <form>
                <p style={{ fontSize: "12px" }}>
                  Your device id is:{" "}
                  <code>{generateUniqueID().replace(/\s/g, "")}</code>
                </p>
                <h3>
                  {codeMode ? strings.code.title : strings.phoneNumber.title}
                </h3>
                <div className="row">
                  <div className="col">
                    <label>
                      {codeMode
                        ? strings.code.label
                        : strings.phoneNumber.label}
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                {codeMode ? (
                  ""
                ) : (
                  <div className="row">
                    <div className="col">
                      <label>Full Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col">
                    <button
                      onClick={handleSubmit}
                      className={`d-flex justify-content-center align-items-center ${
                        codeMode ? "code" : "number"
                      }`}
                    >
                      {lodaing ? (
                        <div
                          style={{ width: "30px", height: "30px" }}
                          className="spinner-border text-dark"
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
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <img height={20} src={logo} />
              </a>
              <span className="mb-3 mb-md-0 text-muted">
                &copy; 2022 Company, Inc
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <i className="bi bi-twitter"></i>
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
