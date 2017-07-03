import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'

const Contract = ({ location, dispatch, contract, loading }) => {
  const { list,fileList,dicList,employeeList, pagination, currentItem, modalVisible, modalType } = contract
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    fileList,
    employeeList,
    dicList,
    maskClosable: false,
    submitLoading:loading.effects['contract/submit'],
    confirmLoading: loading.effects[`contract/${modalType}`],
    title: `${modalType === 'create' ? '新增合同申请' : '编辑合同申请'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `contract/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'contract/hideModal',
      })
    },
    
    getFileList(fileList){
      dispatch({
        type:'contract/setFileList',
        payload:fileList
      })
    },
    onSubmit (id,title) {
      dispatch({
        type: 'contract/submit',
        payload: {id,title},
      })
    },
  }

  const listProps = {
    dataSource:list,
    loading: loading.effects['contract/query'],
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
    onSubmit (id,title) {
      dispatch({
        type: 'contract/submit',
        payload: {id,title},
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'contract/editItem',
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
        type: 'contract/showModal',
        payload: {
          modalType: 'create',
          fileList:[],
        },
      })
    },
   
  }

  return (
    <div className="content-inner">
      {!modalVisible &&<Filter {...filterProps} />}
      {!modalVisible &&<List {...listProps} />}
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

Contract.propTypes = {
  contract: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ contract, loading }) => ({ contract, loading }))(Contract)
