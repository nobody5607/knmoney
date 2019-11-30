import React, { Component } from 'react';
import { Formik } from 'formik';

import { Card,CardBody,CardTitle, } from 'reactstrap';

class Register extends Component {
    showForm = ({values, handleChange, handleSubmit, setFieldValue, isSubmitting})=>{
        return (
          <form onSubmit={handleSubmit} >
            <div className="form-group has-feedback">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                className="form-control"
                placeholder="ชื่อผู้ใช้งาน"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                className="form-control"
                placeholder="รหัสผ่าน"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                name="confirm_password"
                onChange={handleChange}
                value={values.confirm_password}
                className="form-control"
                placeholder="ยืนยันรหัสผ่าน"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            
            <div className='row'>
                <div className='col-md-6'>
                    <div className="form-group">
                        <input
                            type="text"
                            name="fname"
                            onChange={handleChange}
                            value={values.name}
                            className="form-control"
                            placeholder="ชื่อ"
                        />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-group">
                        <input
                            type="text"
                            name="lname"
                            onChange={handleChange}
                            value={values.name}
                            className="form-control"
                            placeholder="นามสกุล"
                        />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
            
                </div>
                
                
            </div>
          
                <div className='form-group has-feedback'>
                    <input
                    type="text"
                    name="tel"
                    onChange={handleChange}
                    value={values.tel}
                    className="form-control"
                    placeholder="เบอร์โทรศัพท์"
                    />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                </div>
            
            
             
            <div className="">           
              <div className="col-xs-12">
                <button
                   disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  สมัคร
                </button>
              </div>
              {/* /.col */}
            </div>
    
    
            <div className="row" style={{marginTop:8}}>           
              <div className="col-xs-12">
                <button
                    type="button"
                     onClick={()=> {
                     this.props.history.goBack()
                    }}
                  className="btn btn-default btn-block btn-flat"
                >
                  Cancel
                </button>
              </div>
              {/* /.col */}
            </div>
            
          </form>
      
        )
      }
    render() {
        return ( 
            <div className="login-box">
                <div className='mt-5 mb-sm-5'></div>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <Card> 
                            <CardBody>
                                <CardTitle className='text-center mb-3'><h4>สมัครสมาชิก รายรับรายจ่าย</h4></CardTitle>
                                <div className='row justify-content-center'>
                                    <div className='col-6'>
                                    <Formik 
                                    initialValues={{username:"",password:""}} 
                                    onSubmit={(values,{setSubmitting})=>{           
                                     this.props.register(values, this.props.history)
                                     setSubmitting(false)           
                                    }}>
                                     { props=> this.showForm(props)}
                                     </Formik> 
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div> 
                    {/* Error 
             <span style={{color: 'red'}}>{this.props.registerReducer.result &&
               this.props.registerReducer.result.data.result != 'ok' && 
               this.props.registerReducer.result.data.message}</span>
               */} 
                 
            </div>
        );
    }
}

export default Register;            