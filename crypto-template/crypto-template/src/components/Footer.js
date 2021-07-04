import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
        <MDBContainer
          className="text-center text-md-left"
          style={{ marginTop: "2rem" }}
        >
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                MatixCoin
              </h5>
              <p>Here you can find useful info about our cryptocurrency.</p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                MatixCoin
              </h5>
              <div className="footer__links">
                <p>
                  <a href="#!"></a>
                </p>
                <p>
                  <a>Home</a>
                </p>
                <p>
                  <a>Telegram</a>
                </p>
                <p>
                  <a>Chart</a>
                </p>
                <p>
                  <a>Buy on Pancake</a>
                </p>
              </div>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold"> Contact</h5>
              <p>Lorem ipsum lorem ipsum</p>
              <p>lorem_ipsum@gmail.com</p>
              <p>555 555 555 </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p
                className="text-center text-md-left grey-text"
                style={{ marginLeft: "6rem" }}
              >
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> MatixCoin </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default Footer;
