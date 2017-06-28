module.exports = [
  {
    id: 1,
    icon: 'laptop',
    name: 'Dashboard',
    router: '/dashboard',
  },
  
  {
    id: 2,
    bpid: 1,
    name: '我的工作',
    icon: 'user',
  },
  {
    id: 21,
    mpid: 2,
    bpid: 2,
    name: '我的待办',
    router: '/work',
  },
  {
    id: 22,
    mpid: 2,
    bpid: 2,
    name: '我的已办',
    router: '/work1',
  },
  {
    id: 23,
    mpid: 2,
    bpid: 2,
    name: '我的申请',
  },
  {
    id: 231,
    mpid: 23,
    bpid: 23,
    name: '考勤异常申请',
    router: '/missClock',
  },
  {
    id: 2311,
    mpid: -1,
    bpid: 231,
    name: '考勤异常申请详情',
    router: '/missClock/:id',
  },
  {
    id: 232,
    mpid: 23,
    bpid: 23,
    name: '请假申请',
    router: '/leave',
  },
  {
    id: 2321,
    mpid: -1,
    bpid: 232,
    name: '请假申请详情',
    router: '/leave/:id',
  },
  {
    id: 233,
    mpid: 23,
    bpid: 23,
    name: '加班申请',
    router: '/overtime',
  },
  {
    id: 2331,
    mpid: -1,
    bpid: 233,
    name: '加班申请详情',
    router: '/overtime/:id',
  },
  {
    id: 234,
    mpid: 23,
    bpid: 23,
    name: '出差申请',
    router: '/travel',
  },
  {
    id: 235,
    mpid: 23,
    bpid: 23,
    name: '差旅费报销申请',
    router: '/travelReimburse',
  },
  {
    id: 236,
    mpid: 23,
    bpid: 23,
    name: '合同申请',
    router: '/contract',
  },
  {
    id: 237,
    mpid: 23,
    bpid: 23,
    name: '用车申请',
    router: '/useCar',
  },
  
  {
    id: 24,
    mpid: 2,
    bpid: 2,
    name: '归档查询',
    router:'/work5',
  },
  {
    id: 3,
    bpid: 1,/*面包屑parentId*/
    name: '知识库',
    icon: 'book',
    router: '/knowledge',
  },
  {
    id: 31,
    mpid: -1,/*菜单parentId*/
    bpid: 3,
    name: '知识库详情',
    router: '/knowledge/:id',
  },
  {
    id: 6,
    bpid: 1,/*面包屑parentId*/
    name: '系统管理',
    icon: 'setting',
  },
  {
    id: 61,
    bpid: 6,
    mpid: 6,/*菜单parentId*/
    name: '组织机构',
    router: '/setting/organization',
  },
  {
    id: 62,
    bpid: 6,
    mpid: 6,
    name: '职位管理',
    router: '/setting/position',
  },
  {
    id: 63,
    bpid: 6,
    mpid: 6,
    name: '角色管理',
    router: '/setting/roles',
  },
  {
    id: 64,
    bpid: 6,
    mpid: 6,
    name: '菜单管理',
    router: '/setting/menu',
  },
  {
    id: 65,
    bpid: 6,
    mpid: 6,
    name: '权限管理',
    router: '/setting/auth',
  },
  {
    id: 66,
    bpid: 6,
    mpid: 6,
    name: '员工管理',
    router: '/setting/employee',
  },
  {
    id: 67,
    bpid: 6,
    mpid: 6,
    name: '数据字典',
    router: '/setting/dictionary',
  },
]
