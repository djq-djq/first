var local_database = [
  {
    proId:0,
    taskId:0,
    taskName: "编写软件任务书及相关文档",
    proName: "火星车载荷控制软件项目",
    status:0,//0表示进行中
    taskSort:"工程活动",//任务类型
    step:"需求分析阶段",//所属阶段
    startDate:"2019.11.12",//计划开始时间
    endDate: "2019.11.25",//计划结束时间
    finishDate:"",//实际完成时间
    managerImg: "../../images/touxiang.png",//任务负责人头像
    managerName: "唐红旗",//任务负责人
    taskMate:"宋頔 段嘉奇 赵方圆"//任务成员
  },
  {
    proId: 1,
    taskId:1,
    taskName: "任务名称1",
    proName: "项目名称1",
    status: 1,//1表示已完成
    taskSort: "工程活动",//任务类型
    step: "需求分析阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "王大宝",
    taskMate: "王晶 刘三"//任务成员
  },
  {
    proId: 2,
    taskId: 2,
    taskName: "任务名称2",
    proName: "项目名称2",
    status: 1,//1表示已完成
    taskSort: "工程活动",//任务类型
    step: "系统分析与设计阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "张小青",
    taskMate: "马六 王五"//任务成员
  },
  {
    proId: 3,
    taskId: 3,
    taskName: "任务名称3",
    proName: "项目名称3",
    status: 1,//1表示已完成
    taskSort: "测试活动",//任务类型
    step: "组装测试阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "段嘉奇",
    taskMate: "田荣荣 娄天宇"//任务成员
  },
  {
    proId: 4,
    taskId: 4,
    taskName: "任务名称4",
    proName: "项目名称4",
    status: 0,
    taskSort: "质量活动",//任务类型
    step: "验收交付阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "吕俊桥",
    taskMate: "武星皓 郑浩"//任务成员
  },
  {
    proId: 5,
    taskId: 5,
    taskName: "任务名称5",
    proName: "项目名称5",
    status: 0,
    taskSort: "质量活动",//任务类型
    step: "验收交付阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "赵婧",
    taskMate: "武星皓 郑浩"//任务成员
  },
  {
    proId: 6,
    taskId: 6,
    taskName: "任务名称6",
    proName: "项目名称6",
    status: 0,
    taskSort: "质量活动",//任务类型
    step: "验收交付阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "钱三",
    taskMate: "武星皓 郑浩"//任务成员
  },
  {
    proId: 7,
    taskId: 7,
    taskName: "任务名称7",
    proName: "项目名称7",
    status: 0,
    taskSort: "质量活动",//任务类型
    step: "验收交付阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "王五",
    taskMate: "武星皓 郑浩"//任务成员
  },
  {
    proId: 8,
    taskId: 8,
    taskName: "任务名称8",
    proName: "项目名称8",
    status: 0,
    taskSort: "质量活动",//任务类型
    step: "验收交付阶段",//所属阶段
    startDate: "2019.10.12",//计划开始时间
    endDate: "2019.11.22",//计划结束时间
    finishDate: "2019.11.20",//实际完成时间
    managerImg: "../../images/touxiang.png",
    managerName: "马六",
    taskMate: "杨松 段嘉奇"//任务成员
  }
]
module.exports = {
  taskList: local_database
}