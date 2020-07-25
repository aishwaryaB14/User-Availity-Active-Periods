import React, { Component } from 'react'
import UserListModal from './UserListModal';
import '../../src/LoginStyle.css'

 class UserListTable extends Component {
    constructor(props) {
            super(props);
            this.state = {
                users: [],
                showModal: false,
                temp: {
                    id: ''
                }
            }
        }

  componentDidMount() {
            fetch('https://79a4a7a3-1373-4441-9fea-2a4b9ca78214.mock.pstmn.io/users')
            .then(res => res.json())
            .then(data => {
                console.log("rrests", data)
                this.setState({ users: data.members })
            });
        }
    
        toggleModal = (id) => {
           /*  let activeData = [] */
            console.log("useracctt",id);
            console.log("ddsss",this.showSelectedUserActivity)
            debugger;
            if (this.state.showModal === false)
                this.setState({ showModal: true });
            else if (this.state.showModal === true)
                this.setState({ showModal: false });
        this.showSelectedUserActivity(id);
        }
    
        renderTd = () => {
          let userData = this.state.users.map((members, index) => {
            return (
                    <tr key={index}>
                        <td>{members.id}</td>
                        <td><a href="#" onClick={() => { this.toggleModal(members.id); this.state.temp.id = members.id }}>{members.real_name}</a></td>
                        <td>{members.tz}</td>
                        
                    </tr>
                )
            });
       return userData; 
        }
    
        showSelectedUserActivity = (id) => {
            console.log("sdds0",id);
             let userDetails = this.state.users.filter((members) => id === members.id);
           return <UserListModal
                isOpen={this.state.showModal}
                toggle={this.toggleModal}
                userDetails={userDetails}
                onClick={this.toggleModal} />

              
        }
    
        render() {
            let userId = this.state.users.map((members, index) => members.id);
        return (
             <div className="backImg" style ={{ height:"100%",width:"100%"}}>
                 <div className="container ">
                 <header className="App-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 FullThrottle Labs Private Limited,Bangalore
             </header>
           <div className="d-flex justify-content-center h-100" style={{paddingBottom: 205}}>
            <div className="card1">
            <div className="card-header">
                <h3>User Details</h3>
              </div>
              <div className="main-div container">
                      <table className="table table-striped">
                            <thead>
                                <tr> 
                                    <th>Id</th>
                                    <th>UserName</th>
                                    <th>Time Zone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTd()}
                            </tbody>
                        </table>
                  </div>
                    </div>
                  
           {this.showSelectedUserActivity(userId)}
             {/*  </Card >  */}
             </div>
              </div>
              </div>
              
            )
    
        }
    }
    
  
export default UserListTable;