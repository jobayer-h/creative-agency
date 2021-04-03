import React from 'react';

const MakeAdmin = () => {

    const makeAdmin =(e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const data = {adminemail:email}
        fetch('https://creative-agency-jobayer.herokuapp.com/addadmin',{
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body:JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            if (data===true) {
                document.getElementById('email').value='';
                alert('Admin added Success!')
            }else{
                alert('error')
            }
        })
        
    }

    return (
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <input type="email" class="form-control" name="adminemail" id="email" placeholder="Email" />
                </div>
                <div class="form-group col-md-4">
                    <button className="btn btn-success" onClick={makeAdmin} >Submit</button>
                </div>
            </div>
        </form>
    );
};

export default MakeAdmin;