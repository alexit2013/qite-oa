webpackJsonp([39],{76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return""+f+p.getDiagram+"?procDefId="+e.procDefId+"&procInstId="+e.procInstId}function r(e){return""+f+p.getDiagramByBusiness+"?busiId="+e.busiId+"&busiCode="+e.busiCode}Object.defineProperty(t,"__esModule",{value:!0}),t.getCommentListBybusiness=t.audit=t.getTaskInfo=t.getTaskFiledPage=t.getMyTaskDonePage=t.getMyTaskToDoPage=t.startProcess=t.getOrg=t.getDic=void 0;var u=a(34),d=n(u),i=a(62),s=n(i);t.getDic=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:m.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getOrg=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:_.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.startProcess=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.startProcess,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getMyTaskToDoPage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getMyTaskToDoPage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getMyTaskDonePage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getMyTaskDonePage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTaskFiledPage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getTaskFiledPage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTaskInfo=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getTaskInfo,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.audit=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.audit,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getCommentListBybusiness=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getCommentListBybusiness,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.getDiagram=l,t.getDiagramByBusiness=r;var c=a(20),o=c.config.api,f=c.config.baseURL,p=o.workflow,m=(o.employee,o.dictionary),_=o.organizations},299:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___3z5_5{line-height:2.4;font-size:13px}.content___3z5_5 .item___2fhgU{display:-webkit-box;display:-ms-flexbox;display:flex}.content___3z5_5 .item___2fhgU>div:first-child{width:100px}.q-detail___2uC4u .q-detail-conent___19kjZ,.q-detail___2uC4u .q-detail-html-conent___3ZBDB,.q-detail___2uC4u .q-detail-label___liCkl{padding-top:6px;padding-bottom:6px}.q-detail___2uC4u .q-detail-label___liCkl{text-align:right}.q-detail___2uC4u .q-detail-conent___19kjZ{text-align:left}.q-detail___2uC4u .q-detail-html-conent___3ZBDB{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___3z5_5",item:"item___2fhgU","q-detail":"q-detail___2uC4u","q-detail-label":"q-detail-label___liCkl","q-detail-conent":"q-detail-conent___19kjZ","q-detail-html-conent":"q-detail-html-conent___3ZBDB"}},300:function(e,t,a){var n=a(299);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},301:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(23),a(22)),r=n(l),u=(a(78),a(77)),d=n(u),i=(a(25),a(24)),s=n(i),c=(a(27),a(17)),o=n(c),f=a(29),p=n(f),m=a(5),_=n(m),x=a(6),g=n(x),y=a(8),h=n(y),q=a(7),v=n(q),b=a(2),k=n(b),E=a(3),w=(n(E),a(300)),L=n(w),I=a(9),N=(n(I),function(e){function t(){return(0,_.default)(this,t),(0,h.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this.props.data,t=[{title:"\u5e8f\u53f7",dataIndex:"index",render:function(e,t,a){return a+1}},{title:"\u53d1\u9001\u73af\u8282",dataIndex:"nodeName",key:"nodeName"},{title:"\u529e\u7406\u4eba",dataIndex:"auditerName",key:"auditerName"},{title:"\u5ba1\u6279\u610f\u89c1",dataIndex:"approvalOpinion",key:"approvalOpinion"},{title:"\u63a5\u6536\u65f6\u95f4",dataIndex:"receiveTime",key:"receiveTime"},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"finishTime",key:"finishTime"},{title:"\u5b8c\u6210\u8017\u65f6",dataIndex:"duration",key:"duration",render:function(e){return e?(parseFloat(e)/36e5).toFixed(2):"0.00"}}];return k.default.createElement(r.default,{gutter:24,className:L.default["q-detail"]},k.default.createElement(s.default,{span:24,className:"qite-list-title"},k.default.createElement(o.default,{type:"credit-card"}),"\u5ba1\u6279\u4fe1\u606f"),k.default.createElement(s.default,{span:24},k.default.createElement(d.default,{pagination:!1,dataSource:e,bordered:!0,scroll:{x:767},columns:t,simple:!0,rowKey:function(e){return e.taskId}})))}}]),t}(k.default.Component));N.propTypes={},t.default=N,e.exports=t.default},346:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".q-detail___kla6t .q-detail-conent___2eqcV,.q-detail___kla6t .q-detail-html-conent___1Q6o2,.q-detail___kla6t .q-detail-label___3xv-p{padding-top:6px;padding-bottom:6px}.q-detail___kla6t .q-detail-label___3xv-p{text-align:right}.q-detail___kla6t .q-detail-conent___2eqcV{text-align:left}.q-detail___kla6t .q-flow-container___34mq6{padding:5px}.q-detail___kla6t .q-flow-container___34mq6 img{width:100%}",""]),t.locals={"q-detail":"q-detail___kla6t","q-detail-label":"q-detail-label___3xv-p","q-detail-conent":"q-detail-conent___2eqcV","q-detail-html-conent":"q-detail-html-conent___1Q6o2","q-flow-container":"q-flow-container___34mq6"}},347:function(e,t,a){var n=a(346);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},348:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(23),a(22)),r=n(l),u=(a(25),a(24)),d=n(u),i=(a(27),a(17)),s=n(i),c=a(29),o=n(c),f=a(5),p=n(f),m=a(6),_=n(m),x=a(8),g=n(x),y=a(7),h=n(y),q=a(2),v=n(q),b=a(3),k=(n(b),a(347)),E=n(k),w=function(e){function t(){return(0,p.default)(this,t),(0,g.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return v.default.createElement(r.default,{gutter:24,className:E.default["q-detail"]},v.default.createElement(d.default,{span:24,className:"qite-list-title"},v.default.createElement(s.default,{type:"fork"}),"\u5904\u7406\u6d41\u7a0b"),v.default.createElement(d.default,{span:24,className:E.default["q-flow-container"]},v.default.createElement("img",{src:this.props.path||"",alt:"\u5904\u7406\u6d41\u7a0b\u56fe"})))}}]),t}(v.default.Component);w.propTypes={},t.default=w,e.exports=t.default},473:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___2FIs6{line-height:2.4;font-size:13px}.content___2FIs6 .item___3ecDy{display:-webkit-box;display:-ms-flexbox;display:flex}.content___2FIs6 .item___3ecDy>div:first-child{width:100px}.q-detail___2Yu9z .q-detail-conent___3HAw5,.q-detail___2Yu9z .q-detail-html-conent___3VNUu,.q-detail___2Yu9z .q-detail-label___2L5zd{padding-top:6px;padding-bottom:6px}.q-detail___2Yu9z .q-detail-label___2L5zd{text-align:right}.q-detail___2Yu9z .q-detail-conent___3HAw5{text-align:left}.q-detail___2Yu9z .q-detail-html-conent___3VNUu{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___2FIs6",item:"item___3ecDy","q-detail":"q-detail___2Yu9z","q-detail-label":"q-detail-label___2L5zd","q-detail-conent":"q-detail-conent___3HAw5","q-detail-html-conent":"q-detail-html-conent___3VNUu"}},490:function(e,t,a){var n=a(473);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},520:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(23),a(22)),r=n(l),u=(a(25),a(24)),d=n(u),i=(a(27),a(17)),s=n(i),c=(a(78),a(77)),o=n(c),f=a(4),p=n(f),m=a(29),_=n(m),x=a(5),g=n(x),y=a(6),h=n(y),q=a(8),v=n(q),b=a(7),k=n(b),E=a(2),w=n(E),L=a(3),I=(n(L),a(490)),N=n(I),D=a(9),B=(n(D),a(73)),T=n(B),C=a(20),R=function(e){function t(){return(0,g.default)(this,t),(0,v.default)(this,(t.__proto__||(0,_.default)(t)).apply(this,arguments))}return(0,k.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.employeeList,n=e.dicList,l=[];t.attachList&&t.attachList[0]&&(l=t.attachList.map(function(e){return(0,p.default)({},e,{uid:e.id,status:"done",url:e.attachUrl,name:e.attachName})}));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=n.filter(function(t){return String(t.dicValue)===String(e)});return a&&a[0]?t&&"\u5176\u4ed6"===a[0].dicName?t:a[0].dicName:""},i=parseFloat(t.actualExpense)-parseFloat(t.advanceExpense),c={};i>0?(c.surplus=0,c.validReimburse=i.toFixed(2)):i<0?(c.surplus=i.toFixed(2),c.validReimburse=0):(c.surplus=0,c.validReimburse=0);var f=[{title:"\u5e8f\u53f7",dataIndex:"index",render:function(e,t,a){return a+1}},{title:"\u51fa\u53d1\u65f6\u95f4",dataIndex:"departureTime"},{title:"\u51fa\u53d1\u5730\u70b9",dataIndex:"departurePlace"},{title:"\u5230\u8fbe\u65f6\u95f4",dataIndex:"arrivalTime"},{title:"\u5230\u8fbe\u5730\u70b9",dataIndex:"arrivalPlace"},{title:"\u4ea4\u901a\u5de5\u5177",dataIndex:"vehicle",render:function(e){return u(e)}},{title:"\u4ea4\u901a\u8d39\u7528",dataIndex:"vehicleCost",render:function(e){return"\xa5 "+(e?String(e.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00")||"\xa5 0.00"}},{title:"\u4f4f\u5bbf\u8d39",dataIndex:"livingCost",render:function(e){return"\xa5 "+(e?String(e.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00")||"\xa5 0.00"}},{title:"\u5176\u4ed6\u8d39\u7528",dataIndex:"otherCost",render:function(e){return"\xa5 "+(e?String(e.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00")||"\xa5 0.00"}},{title:"\u5408\u8ba1\u91d1\u989d",dataIndex:"total",render:function(e,t,a){var n=parseFloat(t.vehicleCost)+parseFloat(t.livingCost)+parseFloat(t.otherCost);return"\xa5 "+(n?n.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00")||"\xa5 0.00"}}],m=function(){return w.default.createElement(o.default,{bordered:!0,dataSource:t.detailList,columns:f,pagination:!1,scroll:{x:1200}})};return w.default.createElement("div",null,w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{span:24,className:"qite-list-title"},w.default.createElement(s.default,{type:"credit-card"}),"\u5dee\u65c5\u8d39\u62a5\u9500\u4fe1\u606f"),w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u59d3\u540d\uff1a"),w.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a?a.realName:"\u65e0"),w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u90e8\u95e8\uff1a"),w.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a.postList?a.postList[0].orgName||"\u65e0":"\u65e0"),w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u5c97\u4f4d\uff1a"),w.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a.postList?a.postList[0].postName||"\u65e0":"\u65e0"),w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u5355\u53f7\uff1a"),w.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.code),w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u65f6\u95f4\uff1a"),w.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.createTime||t.createTimeStr)),w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u62a5\u9500\u8bf4\u660e\uff1a"),w.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.remark?t.remark:"\u65e0")),w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px",paddingLeft:"0px"},className:N.default["q-detail-label"]},"\u51fa\u5dee\u7533\u8bf7\u5355\uff1a"),w.default.createElement(d.default,{xs:12,md:20,xl:14,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.travelCodes?t.travelCodes:"\u65e0")),w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{xs:24,md:24,xl:24,className:N.default["q-detail-conent"]},m())),w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u62a5\u9500\u603b\u989d\uff1a"),w.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},"\xa5 "+(t.actualExpense?String(t.actualExpense.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00"),"\xa0\xa0\xa0\xa0\u5927\u5199\uff1a",(0,C.changeMoneyToChinese)(t.actualExpense?t.actualExpense.toFixed(2):0))),w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u9884\u652f\u65c5\u8d39\uff1a"),w.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},"\xa5 "+(t.advanceExpense?t.advanceExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00")+" ","\xa0\xa0\xa0\xa0\u5f52\u8fd8\u591a\u4f59\uff1a","\xa5 "+(c.surplus?c.surplus.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00"),"\xa0\xa0\xa0\xa0\u5b9e\u9645\u62a5\u9500\uff1a","\xa5 "+(c.validReimburse?c.validReimburse.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00"))),w.default.createElement(r.default,{gutter:12,className:N.default["q-detail"],style:{marginLeft:"2px",marginRight:"2px"}},w.default.createElement("blockquote",null,w.default.createElement("p",null,"\u5907\u6ce8\uff1a",w.default.createElement("br",null),"1\u3001\u9884\u652f\u65c5\u8d39=\u51fa\u5dee\u7533\u8bf7\u5355\u603b\u7533\u8bf7\u8d39\u7528\uff1b",w.default.createElement("br",null),"2\u3001\u62a5\u9500\u603b\u989d-\u9884\u652f\u65c5\u8d39\uff1a\u6b63\u6570=\u5b9e\u9645\u62a5\u9500\uff1b\u8d1f\u6570=\u5f52\u8fd8\u591a\u4f59\u3002"))),l&&l[0]?w.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},w.default.createElement(d.default,{span:24,className:"qite-list-title"},w.default.createElement(s.default,{type:"paper-clip"}),"\u9644\u4ef6\u4fe1\u606f"),w.default.createElement(d.default,{span:24,style:{paddingLeft:"12px",paddingRight:"12px"}},w.default.createElement(T.default,{fileList:l,showRemoveIcon:!1}))):null)}}]),t}(w.default.Component);R.propTypes={},t.default=R,e.exports=t.default},793:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.queryEmployee=t.submit=t.deleteById=t.save=t.getTravelList=t.getDic=t.queryById=t.query=void 0;var l=a(34),r=n(l),u=a(62),d=n(u),i=(t.query=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryById=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.queryById,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getDic=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:f.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTravelList=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:p.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.save=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.save,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.deleteById=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.deleteById,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.submit=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.submit,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryEmployee=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(20)),s=i.config.api,c=s.travelReimburse,o=s.employee,f=s.dictionary,p=s.travel},2001:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(34),r=n(l),u=a(4),d=n(u),i=a(39),s=n(i),c=a(394),o=n(c),f=a(793),p=a(76);t.default={namespace:"travelReimburseDetail",state:{data:{},employeeList:[],dicList:[],commentList:[]},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(){var e=(0,o.default)("/travelReimburse/:id").exec(location.pathname);e&&(t({type:"query",payload:{id:e[1]}}),t({type:"getDic",payload:{dicType:"tripMode_item"}}))})}},effects:{query:r.default.mark(function e(t,a){var n,l,u,i,c,o,m,_=t.payload,x=a.call,g=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(f.queryById,_);case 2:if(n=e.sent,l=n.success,u=n.message,i=n.status,c=(0,s.default)(n,["success","message","status"]),!l){e.next=19;break}return e.next=7,x(p.getCommentListBybusiness,{busiCode:c.data.code,busiId:c.data.id});case 7:if(o=e.sent,m=null,0===c.data.state){e.next=13;break}return e.next=12,x(p.getDiagramByBusiness,{busiCode:c.data.code,busiId:c.data.id});case 12:m=e.sent;case 13:return e.next=15,g({type:"queryEmployee",payload:c.data.userId});case 15:return e.next=17,g({type:"querySuccess",payload:{data:(0,d.default)({},c.data,{flowImgSrc:m}),commentList:o&&o.success?o.data:null}});case 17:e.next=20;break;case 19:throw n;case 20:case"end":return e.stop()}},e,this)}),getDic:r.default.mark(function e(t,a){var n,l=t.payload,u=a.call,d=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.getDic,l);case 2:if(n=e.sent,!n){e.next=6;break}return e.next=6,d({type:"getDicSuccess",payload:n.data});case 6:case"end":return e.stop()}},e,this)}),queryEmployee:r.default.mark(function e(t,a){var n,l=t.payload,u=a.call,d=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.queryEmployee,{userId:l});case 2:if(n=e.sent,!n||!n.success){e.next=8;break}return e.next=6,d({type:"queryEmployeeSuccess",payload:{employeeList:n.data.rowsObject}});case 6:e.next=9;break;case 8:throw n;case 9:case"end":return e.stop()}},e,this)})},reducers:{querySuccess:function(e,t){var a=t.payload;return(0,d.default)({},e,a)},getDicSuccess:function(e,t){return(0,d.default)({},e,{dicList:t.payload})},queryEmployeeSuccess:function(e,t){var a=t.payload;return(0,d.default)({},e,{employeeList:a.employeeList[0]})}}},e.exports=t.default},2150:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),u=a(3),d=n(u),i=a(297),s=a(520),c=n(s),o=a(301),f=n(o),p=a(348),m=n(p),_=function(e){var t=e.travelReimburseDetail,a=t.data,n=t.employeeList,l=t.dicList,u=t.commentList;return r.default.createElement("div",{className:"content-inner"},r.default.createElement(c.default,{data:a,employeeList:n,dicList:l}),a&&a.flowImgSrc?r.default.createElement(m.default,{path:a.flowImgSrc}):null,u&&u[0]?r.default.createElement(f.default,{data:u}):null)};_.propTypes={travelReimburseDetail:d.default.object,loading:d.default.bool},t.default=(0,i.connect)(function(e){var t=e.travelReimburseDetail,a=e.loading;return{travelReimburseDetail:t,loading:a.models.travelReimburseDetail}})(_),e.exports=t.default}});