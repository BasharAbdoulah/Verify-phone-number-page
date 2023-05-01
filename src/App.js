import "./App.css";
import "../src/Style/main.scss";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./Routes_logo.e4586c14.svg";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

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

  // function generateUniqueID() {
  //   var hardwareConcurrency = window.navigator.hardwareConcurrency || "";
  //   var platform = window.navigator.userAgent.platform || "";
  //   var userAgent = window.navigator.userAgent || "";
  //   var uniqueID = hardwareConcurrency + "-" + platform + "-" + userAgent;
  //   return uniqueID;
  // }

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

  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

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
                <div>
                  {/* <button onClick={() => getData({ ignoreCache: true })}>
                    Reload data
                  </button> */}
                  <p>VisitorId: {isLoading ? "Loading..." : data?.visitorId}</p>
                  <p>Your device is: {JSON.stringify(data?.device, null, 2)}</p>
                  <p>
                    Your Location is:{" "}
                    {JSON.stringify(data?.ipLocation.city.name, null, 2)}
                  </p>
                  {/* <pre>
                    {error ? error.message : JSON.stringify(data, null, 2)}
                  </pre> */}
                </div>
                {/* <h3>
                  {codeMode ? strings.code.title : strings.phoneNumber.title}
                </h3>

                <div className="row">
                  <div className="col">
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
                  <div className="row">
                    <div className="col">
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
                </div> */}
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
