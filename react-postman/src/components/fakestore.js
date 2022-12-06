import {useState,useEffect,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Fakestore(){
const[product,setProduct]=useState([]);
useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=20')
    .then(response=>response.json())
    .then(json=>setProduct(json))
});
    return(
        <>
        <div className='container'>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>PRODUCT TITLE</th>
                                    <th>PRODUCT PRICE</th>
                                    <th>PRODUCT DESCRIPTION</th>
                                    <th>PRODUCT CATEGORY</th>
                                    <th>PRODUCT IMAGE</th>
                                    <th>PRODUCT RATE</th>
                                    <th>PRODUCT COUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((value,index)=>(
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.price}</td>
                                            <td>{value.description}</td>
                                            <td>{value.category}</td>
                                            <td><img src={value.image} className="img-fluid"/></td>
                                            <td>{value.rating.rate}</td>
                                            <td>{value.rating.count}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}