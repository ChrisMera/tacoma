import React, { Component } from "react";
import DashMenu from "../../components/DashMenu";
import API from "../../utils/API";
import "./AdminModal.css";

class AdminModal extends Component {

  state = {
    quote: {},
    companyName: "",
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    freightType: "",
    weight: "",
    frequency: ""
  };

  componentDidMount() {
    
  }

  loadNewQuotes = () => {
    API.getNewQuotes()
      .then(res => {
        console.log(res);
        this.setState({
          quote: res.data[0],
          companyName: res.data[0].company,
          name: res.data[0].name,
          phone: res.data[0].phone,
          email: "",
          origin: "",
          destination: "",
          freightType: "",
          weight: "",
          frequency: ""
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return(

    <div className="modal" id="newQuotesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">New Requests</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
        </div>
          <div classNAme="modal-footer">
            <button type="button" className="modal-btn" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

export default AdminModal;