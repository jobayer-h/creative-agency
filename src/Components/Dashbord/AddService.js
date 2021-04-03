import React from 'react';

const AddService = () => {
    const handelAddService =(e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const data = {
            title: title,
            description:description
        }
        fetch('https://creative-agency-jobayer.herokuapp.com/addservice',{
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body:JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            if (data===true) {
                document.addserviceform.reset();
                alert('New Service added successfully!')
            }else{
                alert('error')
            }
        })
        
    }
    return (
        <form name="addserviceform">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label htmlFor="title">Enter Title</label>
                    <input class="form-control" type="text" name="title" id="title" placeholder="Enter Title" />
                </div>

                <div class="form-group col-md-2">
                    <label htmlFor="icon">Upload Icon</label>
                    <input type="file" name="icon" id="icon" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label htmlFor="description">Description</label>
                    <textarea class="form-control" name="description" id="description" cols="30" rows="5" placeholder="Enter Description"></textarea>
                </div>
            </div>
            <button onClick={handelAddService} class="btn btn-success">Submit</button>
        </form>
    );
};

export default AddService;