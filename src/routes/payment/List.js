import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal,Tooltip } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import { getRecordAction } from '../../components';
import {getRecordState} from '../../utils';
const confirm = Modal.confirm

const List = ({ onSubmit,dicList, onEditItem,onDelete,onChange,location, ...tableProps }) => {
  const handleSubmit = (record,e) => {
      confirm({
        title: `你确定提交申请么?`,
        onOk () {
          onSubmit(record,e)
        },
      })
  }
  const handleDel=(id)=>{
    confirm({
      title:'你确定要删除这条申请么？',
      onOk(){
        onDelete(id);
      }
    })
  }
  const getDicType=(value,remark=null)=>{
    let n=dicList.filter(item=>String(item.dicValue)===String(value));
    //console.log(orgList,...n,value);
    if(n && n[0]){
      return remark&&n[0].dicName==='其他'?remark:n[0].dicName;
    }
    return '';
  }
  const getHours=(a,b)=>{
    if(!a||!b){
      return 0;
    }
    let timeA=new Date(a);
    let timeB=new Date(b);
    return ((timeB-timeA)/(3600*1000)).toFixed(2)
  }
  const columns = [
    {
      title: '申请单号',
      dataIndex: 'code',
      key: 'code',
    }, {
      title: '申请时间',
      dataIndex: 'createTime',width:170,
      key: 'createTime',
    }, {
      title: '收款方',
      dataIndex: 'payee',width:250,
      key: 'payee',
      render:(text)=>text && text.length>15?
                    <Tooltip title={text}>{`${text.substr(0,12)}...`}</Tooltip>
                    :<span>{text && text}</span>
    }, {
      title: '付款说明',width:250,
      dataIndex: 'remark',
      key: 'remark',
      render:(text)=>text && text.length>15?
                    <Tooltip title={text}>{`${text.substr(0,12)}...`}</Tooltip>
                    :<span>{text && text}</span>
    }, {
      title: '状态',width:120,
      dataIndex: 'state',
      key: 'state',
      render:(text)=>getRecordState(text),
    }, {
      title: '操作',
      key: 'operation',
      fixed:'right',
      width: 250,
      render: (text, record)=>getRecordAction('payment',record,onEditItem,handleSubmit,handleDel,onChange,true),
    },
  ]


  return (
    <div>
      <Table
        {...tableProps} onChange={onChange}
        className={classnames({ [styles.table]: true})}
        bordered
        scroll={{ x: 1150 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    </div>
  )
}

List.propTypes = {
  onSubmit: PropTypes.func,
  onItemChange: PropTypes.func,
  location: PropTypes.object,
}

export default List
