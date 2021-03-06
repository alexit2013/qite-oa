import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input,Select,Radio, InputNumber,Modal,Row,Col,DatePicker,Button,Icon,Affix,message } from 'antd'
import moment from 'moment';
import config from '../../utils/config'
import { FileUpload,SelectUser } from '../../components'
// import uploadImageCallBack from '../../services/uploadImageCallBack'
import styles from './Modal.less'
//import city from '../../utils/chinaCity'
import {changeMoneyToChinese} from '../../utils'
import CommentTable from '../../components/CommentTable'

const confirm = Modal.confirm
const { RangePicker } = DatePicker
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option=Select.Option;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: {
    span: 12,
  },
}

const twoFormItemLayout = {
  labelCol: { 
    xs: { span: 12 },
    md: { span: 4 }, 
    xl: { span: 3},
  },
  
}

const modal = ({
  item = {},
  isMD,
  onOk,
  title,
  onCancel,
  fileList,
  dicList,
  getFileList,
  confirmLoading,
  submitLoading,
  onSubmit,
  employeeList,
  purchaseList,
  defaultFileList=[],
  onAudit,
  taskData={},
  auditLoading,
  onGoback,
  contractList,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    getFieldsValue,
    setFieldsValue,
  },
  ...modalProps
}) => {
  const dateTimeFormat='YYYY-MM-DD HH:mm:ss'

  const getFields = () => {
    let data=null;
    validateFieldsAndScroll({scroll:{offsetBottom:30}},(err,values) => {
      if (err) {
        return null;
      }
      data = {...values}
      if(fileList && fileList.length>0){
        fileList.filter(fl=>fl.uid!=='invalid').map((f,index)=>{
          if(f.id) data[`attachList[${index}].id`]=f.id;
          data[`attachList[${index}].attachUrl`]=f.url;
          data[`attachList[${index}].attachName`]=f.name;
        })
      }else if(defaultFileList[0]){
        defaultFileList.filter(fl=>fl.uid!=='invalid').map((f,index)=>{
          if(f.id) data[`attachList[${index}].id`]=f.id;
          data[`attachList[${index}].attachUrl`]=f.url;
          data[`attachList[${index}].attachName`]=f.name;
        })
      }
      data.purchaseIds=data.purchaseIds && data.purchaseIds.join();
      if(data.purchaseIds){
        let _a=`,${data.purchaseIds}`;
        data.purchaseCodes=purchaseList.filter(f=>_a.indexOf(`,${f.id}`)>-1).map(m=>m.code).join();
      }
      data.contractCodes=data.contractCodes && data.contractCodes.join() || "";
      //console.log('-----',data)
      if(item.id){
        data.id=item.id;
        data.code=item.code;
      }
    })
    return data;
  }
  const handleOk = () => {
    let fields=getFields();
    if(fields){
      if(!fields['attachList[0].attachUrl']){
        message.error('请上传附件')
        return;
      }
      onOk(fields)
    }
  }
  if(fileList[0]){
    defaultFileList=fileList.map((temp)=>{
      if(temp.createTime)
        return {...temp,uid:temp.id,status:'done',url:temp.attachUrl,name:temp.attachName}
      return {...temp}
    })
  }else if(item.attachList&& item.attachList[0]){
    defaultFileList=item.attachList.map((temp)=>{
      return {...temp,uid:temp.id,status:'done',url:temp.attachUrl,name:temp.attachName}
    })
  }else{
    defaultFileList=[];
  }
  const handleSubmit=(data)=>{
    let fields=getFields();
    if(fields){
      if(!fields['attachList[0].attachUrl']){
        message.error('请上传附件')
        return;
      }
      confirm({
        title: `你确定提交申请么?`,
        onOk () {
          fields.isupdated=true;
          onSubmit(fields,data)
        },
      })
    }
  }
  const handleAudit=()=>{
    let taskItem={},formItem=getFields();
    if(formItem){
      taskItem.taskId=taskData.taskId;
      taskItem.busiId=taskData.busiId;
      taskItem.busiCode=taskData.busiCode;
      taskItem.action=formItem.action;
      // console.log('formItem')
      confirm({
        title:'你确定提交修改么？',
        onOk(){
            onAudit(formItem,taskItem)
        },
      })
    }
  }
  const actionRadio=taskData.actionMap?Object.keys(taskData.actionMap).map(act=><Radio value={act} key={act}>{taskData.actionMap[act]}</Radio>):null;
  
  const handleChange=(value)=>{
    item.payAmount=value;
  }
  const handleSelectChange=(value)=>{
    let selected=purchaseList.filter(item=>(value.findIndex(f=>String(f)===String(item.id)))>-1);
    //console.log('selected:',value,selected);
    if(selected && selected[0]){
      item.payAmount=0;
      // let codes=[];
      selected.map(sel=>{
        // codes.push(sel.code);
        item.payAmount+=parseFloat(sel.totalAmount);
      })
      // item.purchaseCodes=codes.join();
    }
  }
  
  const typeChange=(value)=>{
    if(value==='付款申请'){
      message.info('必须上传发票等附件哦，亲')
    }
  }
  const purchaseOption=purchaseList && purchaseList[0]&&purchaseList.map(pur=><Option key={pur.id}>{pur.code}</Option>) || null;
  const contractOption=contractList && contractList[0]&&contractList.map(contract=><Option key={contract.code}>{contract.code}</Option>) || null;
  const typeOption=dicList && dicList[0] && dicList.map(d=><Option key={d.dicValue}>{d.dicName}</Option>)
  const useUnitOption=config.useUnitList && config.useUnitList.map(u=><Option key={u}>{u}</Option>) || null;
  // return (<div>ddddd</div>)
  return (
      <Form layout='horizontal' onSubmit={handleOk}>
        <Row gutter={24} className={styles['q-detail']}>
          <Col span={24} style={{display:'flex',justifyContent:'space-between',marginBottom:'24px',paddingBottom:'12px',borderBottom:'1px solid #d9d9d9'}}>
            <div className='qite-title'>
            <Icon type={item.id?'edit':'plus'} />{title}</div>
           
            <Affix target={()=>document.getElementById('layout-main')}>
                {taskData && taskData.taskId?(
                  <div style={{backgroundColor:'#fff'}}>
                    <Button style={{ marginRight: 12 }} type="primary" loading={auditLoading} 
                    onClick={handleAudit} size="large">确定修改并提交</Button>
                    <Button  type="ghost" onClick={onGoback} size="large">返回待办</Button>
                  </div>
                  ):(
                  <div style={{backgroundColor:'#fff'}}>
                    <SelectUser type="button" callBack={handleSubmit}  loading={submitLoading}>提交</SelectUser>
                    <Button style={{ marginLeft: 12,marginRight: 12 }} type="primary" loading={confirmLoading} onClick={handleOk} size="large">暂存</Button>
                    <Button  type="ghost" onClick={onCancel} size="large">取消</Button>
                  </div>)
                }
            </Affix>

          </Col>
          <Col span={24} className='qite-list-title'>
            <Icon type="credit-card" />付款申请信息
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            姓名：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {employeeList.realName || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            部门：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem>
              {employeeList.postList[0].orgName || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            岗位：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {employeeList.postList[0].postName || '无'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            申请单号：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {item.code || '系统自动生成'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            申请时间：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {item.createTime || item.createTimeStr || '系统自动生成'}
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            申请类型：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem style={{width:'100%'}}>
              {getFieldDecorator('type', {
                initialValue:item.type?item.type:undefined,
                onChange:typeChange,
              })(<Select placeholder="请选择" >{typeOption}</Select>)}
              
            </FormItem>
            
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
            付款说明：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('remark', {
                initialValue:item.remark,
                rules: [
                  {
                    required: true,message:'不能为空',
                  },
                ],
              })(<Input type="textarea" autosize={{ minRows: 2, maxRows: 5 }}  style={{width:'100%'}}/>)}
              
            </FormItem>
            
          </Col>
         
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            合同申请单：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem style={{width:'100%'}}>
              {getFieldDecorator('contractCodes', {
                initialValue:typeof item.contractCodes ==='string' && item.contractCodes!="" ?item.contractCodes.split(','):[],
              })(<Select mode="multiple" >{contractOption}</Select>)}
              
            </FormItem>
            
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            采购申请单：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem style={{width:'100%'}}>
              {getFieldDecorator('purchaseIds', {
                initialValue:typeof item.purchaseIds ==='string' && item.purchaseIds!=""?item.purchaseIds.split(','):[],
                onChange:handleSelectChange,
              })(<Select mode="multiple" >{purchaseOption}</Select>)}
              
            </FormItem>
            
          </Col>
        </Row>
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px',paddingLeft:'0px' }} className={styles['q-detail-label-require']}>
            申请金额：
          </Col>
          <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-flex-conent']}>
            <FormItem>
              {getFieldDecorator('payAmount', {
                initialValue:item.payAmount!==undefined && item.payAmount!==null?parseFloat(item.payAmount):0,
                rules: [
                  {
                    required: true,message:'不能为空',
                   
                  },
                ],
                onChange:handleChange,
              })(
                <InputNumber step={1} style={{width:'150px'}}
                  formatter={value => `¥ ${value?value.toString().replace(/¥\s?|(,*)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','):'0.00'}`}
                  parser={value => value?value.toString().replace(/¥\s?|(,*)/g, ''):0}
                  
                />
              )}
            </FormItem>
            <FormItem style={{width:'100%'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;大写：{changeMoneyToChinese(item.payAmount)}
            </FormItem>
          </Col>
          
      </Row>
      {
        isMD?
        <Row gutter={24} className={styles['q-detail']}>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
            用款单位：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem >
              {
                getFieldDecorator('useUnit',{
                  initialValue: item.useUnit || undefined,
                  rules: [{
                      required: true,message:'不能为空',
                  }],
                })(<Select
                  style={{ width: '100%' }}
                  placeholder="选择用款单位"
                >
                {useUnitOption}
                </Select>)
              }
            </FormItem>
          </Col>
        </Row>
        :null
      } 
      <Row gutter={24} className={styles['q-detail']}>
          <Col span={24} className='qite-list-title'>
            <Icon type="credit-card" />收款方信息
          </Col>
          
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            采购合同编号：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('purchaseContract', {
                initialValue:item.purchaseContract,
                
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            账号：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('accountNumber', {
                initialValue:item.accountNumber,
                
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            联系方式：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('contactPhone', {
                initialValue:item.contactPhone,
                
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            收款方：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('payee', {
                initialValue:item.payee,
                
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
          </Col>

          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            开户行：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('bankName', {
                initialValue:item.bankName,
                
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
          </Col>
          <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label']}>
            联系人：
          </Col>
          <Col xs={18} md={8} xl={6} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
            <FormItem style={{width:'100%'}} >
              {getFieldDecorator('contacter', {
                initialValue:item.contacter,
                
              })(<Input style={{width:'100%'}}/>)}
              
            </FormItem>
          </Col>
          
      </Row> 
      
      <Row gutter={24} className={styles['q-detail']}>

          <Col span={24} className='qite-list-title'>
            <Icon type="paper-clip" />申请附件
          </Col>
          <Col span={24}>
            <FormItem >
              <FileUpload defaultFileList={defaultFileList} callbackParent={getFileList} />      
            </FormItem>    
          </Col>
          
        </Row>
        {
          taskData&&taskData.commentList?
            <CommentTable data={taskData.commentList} />
          :null
        }
        {taskData && taskData.taskId?
          <Row gutter={24} className={styles['q-detail']}>
            <Col span={24} className='qite-list-title'>
              <Icon type="edit" />流程办理
            </Col>
            <Col xs={6} md={4} xl={2} style={{ paddingRight:'0px' }} className={styles['q-detail-label-require']}>
              操&nbsp;&nbsp;&nbsp;&nbsp;作：
            </Col>
            <Col xs={18} md={20} xl={22} style={{ paddingLeft:'0px' }} className={styles['q-detail-conent']}>
              <FormItem >
                {getFieldDecorator('action', {
                  initialValue:null,
                  rules: [{required: true,message:'不能为空',},],
                })(<RadioGroup>{actionRadio}</RadioGroup>)}
              </FormItem>
            </Col>
          </Row>
        :null}
      </Form>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
