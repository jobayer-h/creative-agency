import React from 'react';

const ReviewForm = () => {
    const handelAddReview =(e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const company = document.getElementById('company').value;
        const description = document.getElementById('description').value;
        const data = {
            username: username,
            company:company,
            description:description
        }
        fetch('https://creative-agency-jobayer.herokuapp.com/submitreview',{
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body:JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            if (data===true) {
                document.reviewform.reset();
                alert('Review added successfully!')
            }else{
                alert('error')
            }
        })
        
    }
    return (
        <form name="reviewform">
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" name="username" id="username" placeholder="Your name" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" name="company" id="company" placeholder="Company’s name, Designation" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <textarea class="form-control" name="description" id="description" cols="30" rows="5" placeholder="Description"></textarea>
            </div>
        </div>
        <button onClick={handelAddReview} class="btn btn-brand">Submit</button>
    </form>
    );
};

export default ReviewForm;