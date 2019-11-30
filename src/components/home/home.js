import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

import { Card, CardBody,CardTitle } from 'reactstrap';
class Home extends Component {
    state={
        labels:['รายรับ','รายจ่าย'],
        datasets:[{
            data:[20000,5000],
            backgroundColor:['#007bff','#dc3545']
        }]
    }
    render() {
        const total =  this.state.datasets[0].data[0] - this.state.datasets[0].data[1];
        return (
            <div className="row justify-content-center mt-3">
                <div className='col-md-6'>
                     
                    <Card> 
                        <CardBody>
                            <CardTitle className='text-center mb-3'><h4>สรุปรายรับรายจ่ายทั้งหมด</h4></CardTitle>
                            <Pie 
                                data={{labels:this.state.labels, datasets:this.state.datasets}}
                                options={{
                                    tooltips: {
                                        callbacks: {
                                          label: function(tooltipItem, data) {
                                            var dataset = data.datasets[tooltipItem.datasetIndex];
                                            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                            var total = meta.total;
                                            var currentValue = dataset.data[tooltipItem.index].toFixed(2);
                                            var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                            return currentValue + ' (' + percentage + '%)';
                                          },
                                          title: function(tooltipItem, data) {
                                            return data.labels[tooltipItem[0].index];
                                          }
                                        }
                                      }
                                }}
                            />

                            <div className='row'>
                                <div className="col-6 text-center" style={{color:this.state.datasets[0].backgroundColor[0]}}>
                                    รวมจ่าย {this.numberFormat(this.state.datasets[0].data[1])} บาท
                                </div>
                                <div className="col-6 text-center" style={{color:this.state.datasets[0].backgroundColor[1]}}>
                                    รวมรับ {this.numberFormat(this.state.datasets[0].data[0])} บาท
                                </div>
                                
                            </div>
                            <div className='row mt-3' >
                                <div className="col-12 text-center" style={{color:"#4CAF50"}}>
                                    คงเหลือ {this.numberFormat(total)} บาท
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
    numberFormat=(number)=>{
        return number.toFixed(2);
    }
}
export default Home;