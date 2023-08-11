import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './AddSnack.css';
import { Button, Form, Input, Upload } from 'antd';
import axios from 'axios';
const { TextArea } = Input;



export default class AddSnack extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      popname: '',
      poppay: '',
      country: '',
      usedate: '',
      snackdetail: '',
      popimg: ''
    }
  }

changePopnameHandler = (e) => {
    this.setState({ popname: e.target.value });
    console.log('popname',this.state.popname);
}
changePoppayHandler = (e) => {
  this.setState({ poppay: e.target.value });
  console.log('poppay',this.state.poppay);
}
changeCountryHandler = (e) => {
  this.setState({ country: e.target.value });
  console.log('country',this.state.country);
}
changeUsedateHandler = (e) => {
  this.setState({ usedate: e.target.value });
  console.log('usedate',this.state.usedate);
}
changeSnackDetailHandler = (e) => {
  this.setState({ snackdetail: e.target.value });
  console.log('snackdetail',this.state.snackdetail);
}
changePopimgHandler = (e) => {
    this.setState({ popimg: e.file.name });
    console.log('popimg', this.state.popimg);
}

upload = (e) => {
 const upload_url = "http://192.168.0.108:8099/cinemuadmin/snackupload";
 e.preventDefault();
 let data = {
  popname: this.state.popname,
  poppay: this.state.poppay,
  country: this.state.country,
  usedate: this.state.usedate,
  snackdetail: this.state.snackdetail,
  popimg: this.state.popimg
 };

 
 axios.post(upload_url,data);
 console.log('popname=>',data.popname);
 console.log('poppay=>',data.poppay);
 window.location = "/addsnack"
}




  render() {
    return (
      <div>
         <Form className='formall'
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                maxWidth: 600,
              }}
            >
              <Form.Item className='formtitle'>
                <h1>Snack Upload</h1>
              </Form.Item>
              <Form.Item label="제품 이름" className='labeltext'>
                <Input className='inputmargin' name='popname' value={this.state.popname} onChange={this.changePopnameHandler}/>
              </Form.Item>
              
              <Form.Item label="가격">
                <Input className='inputmargin' name='poppay' value={this.state.poppay} onChange={this.changePoppayHandler}/>
              </Form.Item>
      
              <Form.Item label="원산지">
                <Input className='inputmargin' name='country' value={this.state.country} onChange={this.changeCountryHandler}/>
              </Form.Item>
      
              <Form.Item label="유통 기간">
                <Input className='inputmargin' name='usedate' value={this.state.usedate} onChange={this.changeUsedateHandler}/>
              </Form.Item>

              <Form.Item label="상품 정보">
                <TextArea rows={4} className='inputmargin' name='snackdetail' value={this.state.snackdetail} onChange={this.changeSnackDetailHandler} />
              </Form.Item>
              <Form.Item label="이미지" valuePropName="fileList">
                <Upload name='popimg' action="/upload.do" listType="picture-card" className='inputmargin' onChange={this.changePopimgHandler}>
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item label="등록하기">
                <Button className='inputmargin' onClick={this.upload}>등록</Button>
              </Form.Item>
            </Form>
      </div>
    )
  }
}