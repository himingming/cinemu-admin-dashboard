import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './AddMoive.css';
import { Button, Form, Input, Upload } from 'antd';
import axios from 'axios';
const { TextArea } = Input;



export default class AddMoive extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      mname: '',
      mdirec: '',
      mactor: '',
      msaram: '',
      mtype: '',
      mtime: '',
      mage: '',
      mstartday: '',
      mendday: '',
      mstory: '',
      mimg: '',
      mmain: ''
    }
  }

changeMnameHandler = (e) => {
    this.setState({ mname: e.target.value });
    console.log('popname',this.state.mname);
}
changeMdirecHandler = (e) => {
  this.setState({ mdirec: e.target.value });
  console.log('poppay',this.state.mdirec);
}
changeMactorHandler = (e) => {
  this.setState({ mactor: e.target.value });
  console.log('country',this.state.mactor);
}
changeMsaramHandler = (e) => {
  this.setState({ msaram: e.target.value });
  console.log('usedate',this.state.msaram);
}
changeMtypeHandler = (e) => {
  this.setState({ mtype: e.target.value });
  console.log('snackdetail',this.state.mtype);
}

changeMtimeHandler = (e) => {
  this.setState({ mtime: e.target.value });
  console.log('snackdetail',this.state.mtime);
}

changeMageHandler = (e) => {
  this.setState({ mage: e.target.value });
  console.log('snackdetail',this.state.mage);
}

changeMstartDayHandler = (e) => {
  this.setState({ mstartday: e.target.value });
  console.log('snackdetail',this.state.mstartday);
}

changeMendDayHandler = (e) => {
  this.setState({ mendday: e.target.value });
  console.log('snackdetail',this.state.mendday);
}

changeMstoryHandler = (e) => {
  this.setState({ mstory: e.target.value });
  console.log('snackdetail',this.state.mstory);
}

changeMimgHandler = (e) => {
  this.setState({ mimg: e.file.name });
  console.log('popimg', this.state.mimg);
}

changeMmainHandler = (e) => {
  this.setState({ mmain: e.file.name });
  console.log('popimg', this.state.mmain);
}


upload = (e) => {
 const upload_url = "http://192.168.0.108:8099/cinemuadmin/movieupload";
 e.preventDefault();
 let data = {
  mname: this.state.mname,
  mdirec: this.state.mdirec,
  mactor: this.state.mactor,
  msaram: this.state.msaram,
  mtype: this.state.mtype,
  mtime: this.state.mtime,
  mage: this.state.mage,
  mstartday: this.state.mstartday,
  mendday: this.state.mendday,
  mstory: this.state.mstory,
  mimg: this.state.mimg,
  mmain: this.state.mmain
 };

 
 axios.post(upload_url,data);
 console.log('popname=>',data.mname);
 console.log('poppay=>',data.mage);
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
                <h1>Movie Upload</h1>
              </Form.Item>
              <Form.Item label="영화 제목" className='labeltext'>
                <Input className='inputmargin' name='mname' value={this.state.mname} onChange={this.changeMnameHandler}/>
              </Form.Item>

              <Form.Item label="감독">
                <Input className='inputmargin' name='mdirec' value={this.state.mdirec} onChange={this.changeMdirecHandler}/>
              </Form.Item>

              <Form.Item label="배우">
                <Input className='inputmargin' name='mactor' value={this.state.mactor} onChange={this.changeMactorHandler}/>
              </Form.Item>
              
              <Form.Item label="관람 인원">
                <Input className='inputmargin' name='msaram' value={this.state.msaram} onChange={this.changeMsaramHandler}/>
              </Form.Item>
      
              <Form.Item label="장르">
                <Input className='inputmargin' name='mtype' value={this.state.mtype} onChange={this.changeMtypeHandler}/>
              </Form.Item>
      
              <Form.Item label="상영 시간">
                <Input className='inputmargin' name='mtime' value={this.state.mtime} onChange={this.changeMtimeHandler}/>
              </Form.Item>

              <Form.Item label="시청 연령">
                <Input className='inputmargin' name='mage' value={this.state.mage} onChange={this.changeMageHandler}/>
              </Form.Item>

              <Form.Item label="개봉 날짜">
                <Input type='date' className='inputmargin' name='mstartday' value={this.state.mstartday} onChange={this.changeMstartDayHandler}/>
              </Form.Item>

              <Form.Item label="상영 종료">
                <Input type='date' className='inputmargin' name='mendday' value={this.state.mendday} onChange={this.changeMendDayHandler}/>
              </Form.Item>



              <Form.Item label="영화 내용">
                <TextArea rows={4} className='inputmargin' name='mstory' value={this.state.mstory} onChange={this.changeMstoryHandler} />
              </Form.Item>
              <Form.Item label="포스터" valuePropName="fileList">
                <Upload name='mimg' action="/upload.do" listType="picture-card" className='inputmargin' onChange={this.changeMimgHandler}>
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

              <Form.Item label="썸네일" valuePropName="fileList">
                <Upload name='mmain' action="/upload.do" listType="picture-card" className='inputmargin' onChange={this.changeMmainHandler}>
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