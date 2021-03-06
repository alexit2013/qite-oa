import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal} from 'antd'
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
  const getTripMode=(value,remark=null)=>{
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
      title: '预计出差时间',
      dataIndex: 'travelTimeStart',width:350,
      key: 'travelTimeStart',
      render:(text,record)=>`${record.travelTimeStart}至${record.travelTimeEnd}`,
    }, {
      title: '预计出差时长',width:120,
      key: 'travelHours',
      dataIndex: 'travelHours',
      render:(text,record)=>text?text:getHours(record.travelTimeStart,record.travelTimeEnd),
    }, {
      title: '出差地点',
      dataIndex: 'address',
      key: 'address',
      render:(text,record)=>`${record.province?record.province:''}${record.city?record.city:''}${record.area?record.area:''}${text?text:''}`,
    }, {
      title: '出行方式',width:120,
      dataIndex: 'tripMode',
      key: 'tripMode',
      render:(text,record)=>getTripMode(text,record.tripModeRemark),
    }, {
      title: '状态',width:120,
      dataIndex: 'state',
      key: 'state',
      render:(text)=>getRecordState(text,1),
    }, {
      title: '操作',
      key: 'operation',
      fixed:'right',
      width: 250,
      render: (text, record)=>getRecordAction('travel',record,onEditItem,handleSubmit,handleDel,onChange,true),
    },
  ]


  return (
    <div>
      <Table
        {...tableProps} onChange={onChange}
        className={classnames({ [styles.table]: true})}
        bordered
        scroll={{ x: 1600 }}
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
