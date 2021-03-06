import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal,Tooltip } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import { Link } from 'dva/router';
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
    let n=dicList.filter(item=>String(item.id)===String(value));
    //console.log(orgList,...n,value);
    if(n && n[0]){
      return n[0].orgName;
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
  const isMyNotice=location.query && location.query.isMyNotice || false;

  const columns = isMyNotice
  ?[
    {
      title: '文件编号',
      dataIndex: 'fileNum',
      key: 'fileNum',
    }, {
      title: '文件标题',
      key: 'title',
      dataIndex:'title',
    },{
      title: '发文日期',
      dataIndex: 'postingTime',
      key: 'postingTime',
    }, {
      title: '操作',
      key: 'operation',
      fixed:'right',
      width: 80,
      render: (text, record) => <Link to={`/notice/${record.id}?noComment=true`} style={{marginRight:'8px'}}>查看</Link>
    }
  ]:[
    {
      title: '申请单号',
      dataIndex: 'code',
      key: 'code',
    }, {
      title: '申请时间',
      dataIndex: 'createTime',width:170,
      key: 'createTime',
    }, {
      title: '接收部门',width:120,
      dataIndex: 'orgNames',
      key: 'orgNames',
      render:(text)=>text&&text.length>8?<Tooltip title={text}>
                      {text && `${text.substr(0,5)}...`}
                    </Tooltip>:<span>{text}</span>
    }, {
      title: '文件编号',width:170,
      dataIndex: 'fileNum',
      key: 'fileNum',
    }, {
      title: '文件标题',width:170,
      key: 'title',
      dataIndex:'title',
    
    }, {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render:(text)=>getRecordState(text),
    }, {
      title: '操作',
      key: 'operation',
      fixed:'right',
      width: 250,
      render: (text, record)=>getRecordAction('notice',record,onEditItem,handleSubmit,handleDel,onChange,true),
    },
  ]


  return (
    <div>
      <Table
        {...tableProps} onChange={onChange}
        className={classnames({ [styles.table]: true})}
        bordered
        scroll={{ x: isMyNotice?767:1250 }}
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
