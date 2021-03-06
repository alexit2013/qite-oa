import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'
import dimissionPng from '../../../assets/Dimission.png'

const Dimission = ({ location, dispatch, dimission, loading }) => {
  const { list,fileList,dicList,employeeList,taskData, pagination, currentItem, modalVisible, modalType } = dimission
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    fileList,
    employeeList,
    dicList,
    taskData,
    maskClosable: false,
    submitLoading:loading.effects['dimission/submit'],
    confirmLoading: loading.effects[`dimission/${modalType}`],
    auditLoading:loading.effects['dimission/audit'],
    title: `${modalType === 'create' ? '新增－离职申请' : modalType==='update'?'编辑－离职申请':'退回修改－离职申请'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `dimission/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'dimission/hideModal',
      })
    },
    
    getFileList(fileList){
      dispatch({
        type:'dimission/setFileList',
        payload:fileList
      })
    },
    onSubmit (formItem,nextUser) {
      dispatch({
        type: 'dimission/submit',
        payload: {formItem,nextUser},
      })
    },
    onAudit(formItem,taskItem){
      dispatch({
        type: 'dimission/audit',
        payload: {formItem,taskItem},
      })
    },
    onGoback(){
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname:query.from,
      }))
    },
  }

  const listProps = {
    dataSource:list,
    loading: loading.effects['dimission/query'],
    pagination,
    location,
    dicList,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
    onDelete (id) {
      dispatch({
        type: 'dimission/deleteById',
        payload: {id},
      })
    },
    onSubmit (formItem,nextUser) {
      dispatch({
        type: 'dimission/submit',
        payload: {formItem,nextUser},
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'dimission/editItem',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
  }

  const filterProps = {
    dicList,
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize,
        },
      }))
    },
    
    onAdd () {
      dispatch({
        type: 'dimission/showModal',
        payload: {
          modalType: 'create',
          fileList:[],
          taskData:{},
        },
      })
    },
   
  }

  return (
    <div className="content-inner">
      <img className="q-flow-img" src={dimissionPng} alt="离职流程图"/>
    </div>
  )
}
/*
{!modalVisible &&<Filter {...filterProps} />}
      {!modalVisible &&<List {...listProps} />}
      {modalVisible && <Modal {...modalProps} />}
*/
Dimission.propTypes = {
  dimission: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ dimission, loading }) => ({ dimission, loading }))(Dimission)
