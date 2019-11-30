import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Formik } from 'formik'


import { Card, CardBody,CardTitle } from 'reactstrap';

class Login extends Component {
    componentDidMount() { }
    showForm = ({ values, handleChange, handleSubmit, setFieldValue, isSubmitting }) => {
        return (
            <form onSubmit={handleSubmit} >
                <div className="form-group has-feedback">
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        className="form-control"
                        placeholder="Email"
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
                        placeholder="Password"
                    />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            disabled={isSubmitting} type="submit" className="btn btn-primary btn-block btn-flat" >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                    {/* /.col */}
                </div>


                <div className="row" style={{ marginTop: 8 }}>
                    <div className="col-md-12">
                        <Link to="/register">
                            <button  className="btn btn-default btn-block btn-flat">
                                สร้างบัญชีใหม่
                         </button>
                        </Link>
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
                                <CardTitle className='text-center mb-3'><h4>เข้าสู่ระบบ รายรับรายจ่าย</h4></CardTitle>
                                <div className='row justify-content-center'>
                                    <div className='col-6'>
                                        <Formik
                                                initialValues={{ username: "", password: "" }}
                                                onSubmit={(values, { setSubmitting }) => {
                                                    this.props.login(values, this.props.history)
                                                    setSubmitting(false)
                                                }}>
                                            {props => this.showForm(props)}
                                        </Formik>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div> 
                    {/* Error */}
                    {/*<span style={{ color: 'red' }}>{this.props.loginReducer.result &&
                        this.props.loginReducer.result.data.result != 'ok' &&
                    this.props.loginReducer.result.data.message}</span>*/} 
                 
            </div>
        );
    }
}

export default Login;