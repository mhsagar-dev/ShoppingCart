import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const Inventory = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { } } = useForm();
    const [imgURL, setImgURL] = useState(null);
    const onSubmit = data => {
        const productData = {
            key: data.key,
            category: data.category,
            name: data.name,
            seller: data.seller,
            price: data.price,
            shipping: data.shipping,
            imgURL: imgURL
        };

        console.log(data);
        const url = `http://localhost:8000/addProducts`;
        console.log(productData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Product Added')
                history.replace('/shop')
            })
    };


    const handleImgUpload = event => {
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set('key', '14efbff771cdb5d63e717ead5b878b49');
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div>
                    <h2>Add Your Products</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control" required placeholder="Key" {...register("key")} />
                        <br />
                        <input className="form-control" required placeholder="Category" {...register("category")} />
                        <br />
                        <input className="form-control" required placeholder="Product Name" {...register("name")} />
                        <br />
                        <input className="form-control" required placeholder="Seller" {...register("seller")} />
                        <br />
                        <input className="form-control" required placeholder="Product Price" {...register("price")} />
                        <br />
                        <input className="form-control" required placeholder="Shipping" {...register("shipping")} />
                        <br />
                        <input className="form-control" name="exampleRequired" type='file' onChange={handleImgUpload} />
                        <br />
                        <input className="form-control btn btn-primary" required type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;