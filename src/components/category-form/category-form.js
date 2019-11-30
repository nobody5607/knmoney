import React, { Component } from 'react';
import { Card, CardBody,CardTitle } from 'reactstrap';
import { Formik } from 'formik';
class CategoryForm extends Component {
    showForm = ({values, handleChange, handleSubmit, setFieldValue, isSubmitting})=>{
        return (
          <form onSubmit={handleSubmit} >
            
          <div className="form-group has-feedback">
             <label>ชื่อบัญชี</label>
              <input
                type="text"
                name="account_name"
                onChange={handleChange}
                value={values.account_name}
                className="form-control"
                placeholder="ชื่อบัญชี"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div> 
            <div className="form-group has-feedback">
             <label>สัญลักษณ์</label>
              <input
                type="text"
                name="account_name"
                onChange={handleChange}
                value={values.account_name}
                className="form-control"
                placeholder="สัญลักษณ์"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div> 
            <div className="form-group has-feedback">
             <label>ประเภท</label>
              <input
                type="text"
                name="account_type"
                onChange={handleChange}
                value={values.account_name}
                className="form-control"
                placeholder="ประเภท"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div> 
             
            <div className="">           
              <div className="col-xs-12">
                <button
                   disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  บันทึก
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
            <div className="row justify-content-center mt-3">
                <div className='col-md-6'>
                    <Card> 
                        <CardBody>
                            <CardTitle className='text-left mb-3'><h4>เพิ่มหมวดหมู่</h4></CardTitle>
                            <Formik 
                            initialValues={{username:"",password:""}} 
                            onSubmit={(values,{setSubmitting})=>{           
                             this.props.register(values, this.props.history)
                             setSubmitting(false)           
                            }}>
                             { props=> this.showForm(props)}
                             </Formik> 
                        </CardBody>
                </Card>
                </div>
            </div>
        );
    }
}

export default CategoryForm;