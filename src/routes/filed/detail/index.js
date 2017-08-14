import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import cs from 'classnames'
import styles from './index.less'
import { Row,Col,Icon} from 'antd'
import MissClockDetailPage from '../../../components/MissClockDetailPage'
import SalaryChangeDetailPage from '../../../components/SalaryChangeDetailPage'
import LeaveDetailPage from '../../../components/LeaveDetailPage'
import OverTimeDetailPage from '../../../components/OverTimeDetailPage'
import TravelDetailPage from '../../../components/TravelDetailPage'
import DimissionDetailPage from '../../../components/DimissionDetailPage'
import RegularDetailPage from '../../../components/RegularDetailPage'
import TravelReimburseDetailPage from '../../../components/TravelReimburseDetailPage'
import ContractDetailPage from '../../../components/ContractDetailPage'
import UseCarDetailPage from '../../../components/UseCarDetailPage'
import FlowImg from '../../../components/FlowImg'
import CommentTable from '../../../components/CommentTable'
import PurchaseApplyDetailPage from '../../../components/PurchaseApplyDetailPage'
import PurchaseDetailPage from '../../../components/PurchaseDetailPage'
import PaymentDetailPage from '../../../components/PaymentDetailPage'
import RecruitDetailPage from '../../../components/RecruitDetailPage'
import ReimburseDetailPage from '../../../components/ReimburseDetailPage'
import BudgetDetailPage from '../../../components/BudgetDetailPage'
import NoticeDetailPage from '../../../components/NoticeDetailPage'

const Detail = ({ filedDetail }) => {
  const { data,employeeList,dicList } = filedDetail
  let detailpage=null,
      printData={},
      _code='';
  if(data && data.busiData && data.userVo && data.userVo.employeeVo){
    _code=data.busiCode.substr(0,2);
    switch(_code){
      case 'TR':
      case 'PT':
      case 'RE':
      case 'BD':
      case 'PE':
      case 'PA':
        printData={
          busiData:data.busiData,
          employeeList:data.userVo.employeeVo,
          dicList:dicList
        }
        sessionStorage.setItem('printData', JSON.stringify(printData));
        break;
      default:
        break;
    }
    switch(_code){
      case 'MC':
        detailpage=<MissClockDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} />
        break
      case 'SC':
        detailpage=<SalaryChangeDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} />
        break
      case 'LE':
        detailpage=<LeaveDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} dicList={dicList}/>
        break
      case 'OT':
        detailpage=<OverTimeDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} dicList={dicList}/>
        break
      case 'TL':
        detailpage=<TravelDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} dicList={dicList}/>
        break
      case 'DN':
        detailpage=<DimissionDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} />
        break
      case 'RR':
        detailpage=<RegularDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} />
        break
      case 'TR':
        detailpage=<TravelReimburseDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} dicList={dicList} />
        break
      case 'CT':
        detailpage=<ContractDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'UC':
        detailpage=<UseCarDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} dicList={dicList} />
        break
      case 'PA':
        detailpage=<PurchaseApplyDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'PE':
        detailpage=<PurchaseDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'PT':
        detailpage=<PaymentDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'RT':
        detailpage=<RecruitDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'RE':
        detailpage=<ReimburseDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'BD':
        detailpage=<BudgetDetailPage data={data.busiData} employeeList={data.userVo.employeeVo}/>
        break
      case 'NE':
        detailpage=<NoticeDetailPage data={data.busiData} employeeList={data.userVo.employeeVo} dicList={dicList} />
        break
    }
  }
  //console.log(data,employeeList)
  return (
    <div className={cs({'content-inner':true,'audited':data && data.busiData && data.busiData.state===2})}>
        <div className="q-goback">
          <a href={`${location.origin}${location.pathname}#/print`} target="_black" className="q-print-link">
            打印表单
          </a>
          <a href="javascript:window.history.back();">
            <Icon type="close-circle-o" />
          </a>
        </div>
       {detailpage}
       {
        data.commentList && data.commentList[0]?
        <CommentTable data={data.commentList} />
        :null
      } 
      {
        data && data.flowImgSrc?
        <FlowImg path={data.flowImgSrc+'&_t='+Math.random()} />
        :null
      }
    </div>)
}

Detail.propTypes = {
  filedDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ filedDetail, loading }) => ({ filedDetail, loading: loading.models.filedDetail }))(Detail)
