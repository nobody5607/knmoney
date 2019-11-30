import React, { Component } from 'react';
import { Card, CardBody,CardTitle } from 'reactstrap';
class Account extends Component {
    render() {
        return (
            <div className="row justify-content-center mt-3">
                <div className='col-md-6'>
                    <Card> 
                        <CardBody>
                            <CardTitle className='text-left mb-3'><h4>บัญชี</h4></CardTitle>
                            
                            <div className='row justify-content-center'>
                            
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className="col-8">
                                            <input type='text' className="form-control inpt-sm" placeholder="ใส่คำค้นหาแล้วกด Enter"/>
                                        </div>
                                        <div className="col-4">
                                            <div className='text-right'>
                                                <button className='btn btn-success' type="button"
                                                onClick={()=> { 
                                                this.props.history.push(`/account/form`)
                                               }}>เพิ่มบัญชี</button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush mt-3">
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{width:'50px',borderRadius:'100%'}} src='https://img.wongnai.com/p/100x100/2019/02/05/f901aa44af574c70845cf6af02759456.jpg' alt='base_img' />
                                                </div>
                                                <div className="col-8">
                                                     Cras justo odio
                                                </div>
                                                <div className="col-2">
                                                <span className="badge badge-pill"><a href='#base_url'>แก้ไข</a> | <a href='#base_url'>ลบ</a></span>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{width:'50px',borderRadius:'100%'}} src='https://img.wongnai.com/p/100x100/2019/02/05/f901aa44af574c70845cf6af02759456.jpg' alt='base_img' />
                                                </div>
                                                <div className="col-8">
                                                     Cras justo odio
                                                </div>
                                                <div className="col-2">
                                                <span className="badge badge-pill"><a href='#base_url'>แก้ไข</a> | <a href='#base_url'>ลบ</a></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{width:'50px',borderRadius:'100%'}} src='https://img.wongnai.com/p/100x100/2019/02/05/f901aa44af574c70845cf6af02759456.jpg' alt='base_img' />
                                                </div>
                                                <div className="col-8">
                                                     Cras justo odio
                                                </div>
                                                <div className="col-2">
                                                <span className="badge badge-pill"><a href='#base_url'>แก้ไข</a> | <a href='#base_url'>ลบ</a></span>
                                                </div>
                                            </div>
                                        </li>
                                          
                                    </ul>
                                </div>
                            </div>
                        </CardBody>
                </Card>
                </div>
            </div>
        );
    }
}

export default Account;