webpackJsonp([40],{76:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return""+f+p.getDiagram+"?procDefId="+e.procDefId+"&procInstId="+e.procInstId}function r(e){return""+f+p.getDiagramByBusiness+"?busiId="+e.busiId+"&busiCode="+e.busiCode}Object.defineProperty(t,"__esModule",{value:!0}),t.getCommentListBybusiness=t.audit=t.getTaskInfo=t.getTaskFiledPage=t.getMyTaskDonePage=t.getMyTaskToDoPage=t.startProcess=t.getOrg=t.getDic=void 0;var u=a(34),d=l(u),i=a(62),s=l(i);t.getDic=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:m.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getOrg=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:_.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.startProcess=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.startProcess,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getMyTaskToDoPage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getMyTaskToDoPage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getMyTaskDonePage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getMyTaskDonePage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTaskFiledPage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getTaskFiledPage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTaskInfo=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getTaskInfo,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.audit=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.audit,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getCommentListBybusiness=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:p.getCommentListBybusiness,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.getDiagram=n,t.getDiagramByBusiness=r;var c=a(20),o=c.config.api,f=c.config.baseURL,p=o.workflow,m=(o.employee,o.dictionary),_=o.organizations},299:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___3z5_5{line-height:2.4;font-size:13px}.content___3z5_5 .item___2fhgU{display:-webkit-box;display:-ms-flexbox;display:flex}.content___3z5_5 .item___2fhgU>div:first-child{width:100px}.q-detail___2uC4u .q-detail-conent___19kjZ,.q-detail___2uC4u .q-detail-html-conent___3ZBDB,.q-detail___2uC4u .q-detail-label___liCkl{padding-top:6px;padding-bottom:6px}.q-detail___2uC4u .q-detail-label___liCkl{text-align:right}.q-detail___2uC4u .q-detail-conent___19kjZ{text-align:left}.q-detail___2uC4u .q-detail-html-conent___3ZBDB{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___3z5_5",item:"item___2fhgU","q-detail":"q-detail___2uC4u","q-detail-label":"q-detail-label___liCkl","q-detail-conent":"q-detail-conent___19kjZ","q-detail-html-conent":"q-detail-html-conent___3ZBDB"}},300:function(e,t,a){var l=a(299);"string"==typeof l&&(l=[[e.id,l,""]]);a(14)(l,{});l.locals&&(e.exports=l.locals)},301:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(a(23),a(22)),r=l(n),u=(a(78),a(77)),d=l(u),i=(a(25),a(24)),s=l(i),c=(a(27),a(17)),o=l(c),f=a(29),p=l(f),m=a(5),_=l(m),x=a(6),g=l(x),y=a(8),q=l(y),h=a(7),v=l(h),b=a(2),k=l(b),E=a(3),w=(l(E),a(300)),N=l(w),L=a(9),I=(l(L),function(e){function t(){return(0,_.default)(this,t),(0,q.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this.props.data,t=[{title:"\u5e8f\u53f7",dataIndex:"index",render:function(e,t,a){return a+1}},{title:"\u53d1\u9001\u73af\u8282",dataIndex:"nodeName",key:"nodeName"},{title:"\u529e\u7406\u4eba",dataIndex:"auditerName",key:"auditerName"},{title:"\u5ba1\u6279\u610f\u89c1",dataIndex:"approvalOpinion",key:"approvalOpinion"},{title:"\u63a5\u6536\u65f6\u95f4",dataIndex:"receiveTime",key:"receiveTime"},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"finishTime",key:"finishTime"},{title:"\u5b8c\u6210\u8017\u65f6",dataIndex:"duration",key:"duration",render:function(e){return e?(parseFloat(e)/36e5).toFixed(2):"0.00"}}];return k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(s.default,{span:24,className:"qite-list-title"},k.default.createElement(o.default,{type:"credit-card"}),"\u5ba1\u6279\u4fe1\u606f"),k.default.createElement(s.default,{span:24},k.default.createElement(d.default,{pagination:!1,dataSource:e,bordered:!0,scroll:{x:767},columns:t,simple:!0,rowKey:function(e){return e.taskId}})))}}]),t}(k.default.Component));I.propTypes={},t.default=I,e.exports=t.default},346:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".q-detail___kla6t .q-detail-conent___2eqcV,.q-detail___kla6t .q-detail-html-conent___1Q6o2,.q-detail___kla6t .q-detail-label___3xv-p{padding-top:6px;padding-bottom:6px}.q-detail___kla6t .q-detail-label___3xv-p{text-align:right}.q-detail___kla6t .q-detail-conent___2eqcV{text-align:left}.q-detail___kla6t .q-flow-container___34mq6{padding:5px}.q-detail___kla6t .q-flow-container___34mq6 img{width:100%}",""]),t.locals={"q-detail":"q-detail___kla6t","q-detail-label":"q-detail-label___3xv-p","q-detail-conent":"q-detail-conent___2eqcV","q-detail-html-conent":"q-detail-html-conent___1Q6o2","q-flow-container":"q-flow-container___34mq6"}},347:function(e,t,a){var l=a(346);"string"==typeof l&&(l=[[e.id,l,""]]);a(14)(l,{});l.locals&&(e.exports=l.locals)},348:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(a(23),a(22)),r=l(n),u=(a(25),a(24)),d=l(u),i=(a(27),a(17)),s=l(i),c=a(29),o=l(c),f=a(5),p=l(f),m=a(6),_=l(m),x=a(8),g=l(x),y=a(7),q=l(y),h=a(2),v=l(h),b=a(3),k=(l(b),a(347)),E=l(k),w=function(e){function t(){return(0,p.default)(this,t),(0,g.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,q.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return v.default.createElement(r.default,{gutter:24,className:E.default["q-detail"]},v.default.createElement(d.default,{span:24,className:"qite-list-title"},v.default.createElement(s.default,{type:"fork"}),"\u5904\u7406\u6d41\u7a0b"),v.default.createElement(d.default,{span:24,className:E.default["q-flow-container"]},v.default.createElement("img",{src:this.props.path||"",alt:"\u5904\u7406\u6d41\u7a0b\u56fe"})))}}]),t}(v.default.Component);w.propTypes={},t.default=w,e.exports=t.default},472:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___uIzIp{line-height:2.4;font-size:13px}.content___uIzIp .item___11sJ8{display:-webkit-box;display:-ms-flexbox;display:flex}.content___uIzIp .item___11sJ8>div:first-child{width:100px}.q-detail___JPUG8 .q-detail-conent___3S4S-,.q-detail___JPUG8 .q-detail-html-conent___1YPSl,.q-detail___JPUG8 .q-detail-label___2Otva{padding-top:6px;padding-bottom:6px}.q-detail___JPUG8 .q-detail-label___2Otva{text-align:right}.q-detail___JPUG8 .q-detail-conent___3S4S-{text-align:left}.q-detail___JPUG8 .q-detail-html-conent___1YPSl{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___uIzIp",item:"item___11sJ8","q-detail":"q-detail___JPUG8","q-detail-label":"q-detail-label___2Otva","q-detail-conent":"q-detail-conent___3S4S-","q-detail-html-conent":"q-detail-html-conent___1YPSl"}},489:function(e,t,a){var l=a(472);"string"==typeof l&&(l=[[e.id,l,""]]);a(14)(l,{});l.locals&&(e.exports=l.locals)},519:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(a(23),a(22)),r=l(n),u=(a(25),a(24)),d=l(u),i=(a(27),a(17)),s=l(i),c=a(4),o=l(c),f=a(29),p=l(f),m=a(5),_=l(m),x=a(6),g=l(x),y=a(8),q=l(y),h=a(7),v=l(h),b=a(2),k=l(b),E=a(3),w=(l(E),a(489)),N=l(w),L=a(9),I=(l(L),a(73)),D=l(I),T=a(20),P=function(e){function t(){return(0,_.default)(this,t),(0,q.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.employeeList,l=e.dicList,n=[];t.attachList&&t.attachList[0]&&(n=t.attachList.map(function(e){return(0,o.default)({},e,{uid:e.id,status:"done",url:e.attachUrl,name:e.attachName})}));var u=function(e,t){if(!e||!t)return 0;var a=new Date(e),l=new Date(t);return((l-a)/36e5).toFixed(2)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=l.filter(function(t){return String(t.dicValue)===String(e)});return a&&a[0]?t&&"\u5176\u4ed6"===a[0].dicName?t:a[0].dicName:""};return k.default.createElement("div",null,k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{span:24,className:"qite-list-title"},k.default.createElement(s.default,{type:"credit-card"}),"\u51fa\u5dee\u4fe1\u606f"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u59d3\u540d\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a?a.realName:"\u65e0"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u90e8\u95e8\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a.postList?a.postList[0].orgName||"\u65e0":"\u65e0"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u5c97\u4f4d\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a.postList?a.postList[0].postName||"\u65e0":"\u65e0"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u5355\u53f7\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.code),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u65f6\u95f4\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.createTime||t.createTimeStr)),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u540c\u884c\u4eba\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.colleaguesNames?t.colleaguesNames:"\u65e0")),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px",paddingLeft:"0px"},className:N.default["q-detail-label"]},"\u9884\u8ba1\u51fa\u5dee\u65f6\u95f4\uff1a"),k.default.createElement(d.default,{xs:12,md:20,xl:14,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.travelTimeStartStr||t.travelTimeStart||"\u65e0"," \u81f3",t.travelTimeEndStr||t.travelTimeEnd||"\u65e0","\uff0c\u5171 ",u(t.travelTimeStart,t.travelTimeEnd)," \u5c0f\u65f6")),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px",paddingLeft:"0px"},className:N.default["q-detail-label"]},"\u51fa\u5dee\u5730\u70b9\uff1a"),k.default.createElement(d.default,{xs:12,md:20,xl:14,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},""+(t.province?t.province:"")+(t.city?t.city:"")+(t.area?t.area:"")+(t.address?t.address:""))),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u62dc\u8bbf\u5ba2\u6237\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.customers?t.customers:"\u65e0")),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u51fa\u5dee\u4e8b\u7531\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.remark?t.remark:"\u65e0")),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u51fa\u884c\u65b9\u5f0f\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:14,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},i(t.tripMode,t.tripModeRemark)||"\u65e0")),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u8d39\u7528\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},"\xa5 "+(t.expense?t.expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0)+"   \u5927\u5199\uff1a",(0,T.changeMoneyToChinese)(t.expense))),k.default.createElement(r.default,{gutter:12,className:N.default["q-detail"],style:{marginLeft:"2px",marginRight:"2px"}},k.default.createElement("blockquote",null,k.default.createElement("p",null,"\u5907\u6ce8\uff1a",k.default.createElement("br",null),"1\u3001\u6b64\u7533\u8bf7\u8868\u4f5c\u4e3a\u501f\u6b3e\u3001\u6838\u9500\u5fc5\u5907\u51ed\u8bc1\u3002",k.default.createElement("br",null),"2\u3001\u5982\u51fa\u5dee\u9014\u4e2d\u53d8\u66f4\u884c\u7a0b\u8ba1\u5212\u9700\u53ca\u65f6\u6c47\u62a5\u3002",k.default.createElement("br",null),"3\u3001\u51fa\u5dee\u7533\u8bf7\u8868\u987b\u5728\u63a5\u5230\u7533\u8bf7\u540e48\u5c0f\u65f6\u5185\u6279\u590d\u3002"))),n&&n[0]?k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{span:24,className:"qite-list-title"},k.default.createElement(s.default,{type:"paper-clip"}),"\u9644\u4ef6\u4fe1\u606f"),k.default.createElement(d.default,{span:24,style:{paddingLeft:"12px",paddingRight:"12px"}},k.default.createElement(D.default,{fileList:n,showRemoveIcon:!1}))):null)}}]),t}(k.default.Component);P.propTypes={},t.default=P,e.exports=t.default},792:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.queryEmployee=t.submit=t.deleteById=t.save=t.getDic=t.queryById=t.query=void 0;var n=a(34),r=l(n),u=a(62),d=l(u),i=(t.query=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryById=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.queryById,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getDic=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:f.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.save=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.save,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.deleteById=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.deleteById,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.submit=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.submit,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryEmployee=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(20)),s=i.config.api,c=s.travel,o=s.employee,f=s.dictionary},1999:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(34),r=l(n),u=a(4),d=l(u),i=a(39),s=l(i),c=a(394),o=l(c),f=a(792),p=a(76);t.default={namespace:"travelDetail",state:{data:{},employeeList:[],dicList:[],commentList:[]},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(){var e=(0,o.default)("/travel/:id").exec(location.pathname);e&&(t({type:"query",payload:{id:e[1]}}),t({type:"getDic",payload:{dicType:"tripMode_item"}}))})}},effects:{query:r.default.mark(function e(t,a){var l,n,u,i,c,o,m,_=t.payload,x=a.call,g=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(f.queryById,_);case 2:if(l=e.sent,n=l.success,u=l.message,i=l.status,c=(0,s.default)(l,["success","message","status"]),!n){e.next=19;break}return e.next=7,x(p.getCommentListBybusiness,{busiCode:c.data.code,busiId:c.data.id});case 7:if(o=e.sent,m=null,0===c.data.state){e.next=13;break}return e.next=12,x(p.getDiagramByBusiness,{busiCode:c.data.code,busiId:c.data.id});case 12:m=e.sent;case 13:return e.next=15,g({type:"queryEmployee",payload:c.data.userId});case 15:return e.next=17,g({type:"querySuccess",payload:{data:(0,d.default)({},c.data,{flowImgSrc:m}),commentList:o&&o.success?o.data:null}});case 17:e.next=20;break;case 19:throw l;case 20:case"end":return e.stop()}},e,this)}),getDic:r.default.mark(function e(t,a){var l,n=t.payload,u=a.call,d=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.getDic,n);case 2:if(l=e.sent,!l){e.next=6;break}return e.next=6,d({type:"getDicSuccess",payload:l.data});case 6:case"end":return e.stop()}},e,this)}),queryEmployee:r.default.mark(function e(t,a){var l,n=t.payload,u=a.call,d=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.queryEmployee,{userId:n});case 2:if(l=e.sent,!l||!l.success){e.next=8;break}return e.next=6,d({type:"queryEmployeeSuccess",payload:{employeeList:l.data.rowsObject}});case 6:e.next=9;break;case 8:throw l;case 9:case"end":return e.stop()}},e,this)})},reducers:{querySuccess:function(e,t){var a=t.payload;return(0,d.default)({},e,a)},getDicSuccess:function(e,t){return(0,d.default)({},e,{dicList:t.payload})},queryEmployeeSuccess:function(e,t){var a=t.payload;return(0,d.default)({},e,{employeeList:a.employeeList[0]})}}},e.exports=t.default},2144:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(3),d=l(u),i=a(297),s=a(519),c=l(s),o=a(301),f=l(o),p=a(348),m=l(p),_=function(e){var t=e.travelDetail,a=t.data,l=t.employeeList,n=t.dicList,u=t.commentList;return r.default.createElement("div",{className:"content-inner"},r.default.createElement(c.default,{data:a,employeeList:l,dicList:n}),a&&a.flowImgSrc?r.default.createElement(m.default,{path:a.flowImgSrc}):null,u&&u[0]?r.default.createElement(f.default,{data:u}):null)};_.propTypes={travelDetail:d.default.object,loading:d.default.bool},t.default=(0,i.connect)(function(e){var t=e.travelDetail,a=e.loading;return{travelDetail:t,loading:a.models.travelDetail}})(_),e.exports=t.default}});