import React from "react";
import "./Footer.css";

const Footer = () => (
  <div>
    <footer className="footer">

      <button type="button" className="btn-contact" data-toggle="modal" data-target="#exampleModalCenter2">
              Contact Tacoma
      </button>

      <p className="copyright">© Tacoma Transport, Inc</p>

      <p className="contact-phone">407-777-7777</p>

    </footer>
    <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle2">We'd love to hear from you!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Phone: 407-777-777</p>
            <p>Email: Test@test.com</p>
            </div>
          <div className="modal-footer">
            <button type="button" className="modal-btn" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;