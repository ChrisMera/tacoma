import React, { Component } from "react";
import DashMenu from "../../components/DashMenu";
import "./AdminModal.css";

const AdminModal = props => (
  <div className="modal" id="newQuotesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">New Request From:</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        
            <button type="button" className="modal-btn">{props.modalTitle}</button>
        
        </div>
        <div classNAme="modal-footer">
          <button type="button" className="modal-btn" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div> 
  </div>
);

export default AdminModal;