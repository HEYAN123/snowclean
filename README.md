# 1. 扫雪工作管理系统

<!-- TOC -->

- [1. 扫雪工作管理](#1-扫雪工作管理)
  - [1.1. 登录](#11-登录)
  - [1.2. 荣誉墙](#12-荣誉墙)
  - [1.3. 雪情论坛](#13-雪情论坛)
    - [1.3.1 获取雪情列表](#131-获取雪情列表)
    - [1.3.2 查看雪情内容](#132-查看雪情内容)
    - [1.3.3 获取评论列表](#133-获取评论列表)
    - [1.3.4 发表雪情](#134-发表雪情)
    - [1.3.5 发表评论](#135-发表评论)
  - [1.4. 绩效考察](#14-绩效考察)
  - [1.5. 员工端](#15-员工端)
    - [1.5.1 个人信息登记](#151-个人信息登记)
    - [1.5.2 个人状态更新](#152-个人状态更新)
        - [1.5.2.1 工作前打卡](#1521-工作前打卡)
        - [1.5.2.2 工作后打卡](#1522-工作后打卡)
        - [1.5.2.3 请假](#1523-请假)
  - [1.6. 组长端](#16-组长端)
    - [1.6.1 查询任务列表](#161-查询任务列表)
    - [1.6.2 查看任务内容](#162-查看任务内容)
    - [1.6.3 借调](#163-借调)
    - [1.6.4 更新组员工作进度](#164-更新组员工作进度)
    - [1.6.5 显示系统记录](#165-显示系统记录)
    - [1.6.6 打分](#166-打分)
  - [1.7. 审批端](#17-审批端)
    - [1.7.1 登记车辆基本信息](#171-登记车辆基本信息)
    - [1.7.2 登记工具基本信息](#172-登记工具基本信息)
    - [1.7.3 分配小组任务](#173-分配小组任务)
    - [1.7.4 获取申请列表](#174-获取申请列表)
    - [1.7.5 查看申请内容](#175-查看申请内容)
    - [1.7.6 申请处理](#176-申请处理)
    - [1.7.7 查看平均进度](#177-查看平均进度)
    - [1.7.8 开放打分系统](#178-开放打分系统)
    - [1.7.9 打分](#179-打分)
    - [1.7.10 开放投票系统](#1710-开放投票系统)
    - [1.7.11 投票](#1711-投票)


<!-- /TOC -->

## 1.1. 登录

- POST /snow/login
- payload :

```json
{
    "userId": "490817982@qq.com",
    "passWord" : "12334545"
}
```

- return :
  - type: S = 学生 | T = 评委 | Z = 专家 | C = 超级管理员

```json
{
    "code" : 0,
    "type" : "S",
    "token" : "s24gj3h4g53j4f5kh3f"
}
```

---

## 1.2. 学生端

### 1.2.1 注册

- POST /match/sign
- payload :
  - userId: 邮箱作为账号，不可重复

```json
{
    "userId": "490817982@qq.com",
    "leaderName": "贺妍",
    "members": ["小明", "小红", "小白"],
    "grade": "大三",
    "major": "计算机科学",
    "college": "林大",
    "phone": "18234343432",
    "passWord" : "12334545"
}
```

- return :

```json
{
    "code" : 0
}
```

---

### 1.2.2 上传

- POST /match/upload
- payload :
  - Content-Type =  multipart/form-data
  - file = xxxxx.doc
  - link: 作品链接
  - workName: 作品名称

```json
{
    "userId": "490817982@qq.com",
    "file": file,
    "link": "www.baidu.com",
    "workName": "xxx系统"
}
```

- return :

```json
{
    "code" : 0
}
```

---

### 1.2.3 查看

- GET /match/work/{userId}
  - 教师端未开启“公布”,则显示“未公布”

- return :
  - score: 不返回 = 未公布 | 92 = 已评分
  - honor: 不返回 = 未公布 | “二等奖” = 所获奖项

```json
{
    "code" : 0,
    "data" : {
      "leaderName" : "贺妍",
      "members": ["小明", "小红", "小白"],
      "workName" : "xxx系统",
      "link" : "www.baidu.com",
      "workUrl" : "222.27.227.135:8080/xxx.doc",
      "score": 92,
      "honor": "优秀奖"
    }
}
```

---

### 1.2.4 通知列表

- GET /match/news

- return :

```json
{
    "code" : 0,
    "data" : [
    {
      "newsId": 1234,
      "newsTime": "2019-4-25",
      "newsTitle": "比赛注意事项",
    }, {
      "newsId": 1234222,
      "newsTime": "2019-4-25",
      "newsTitle": "比赛注意事项2",
    }] 
}
```

---

### 1.2.5 查看具体通知

- GET /match/newsContent/{newsId}

- return :

```json
{
    "code" : 0,
    "data" : {
      "newsId": 1234222,
      "newsTime": "2019-4-25",
      "newsTitle": "比赛注意事项2",
      "newsContent": "比赛不许作弊。。。。。。"
    }
}
```

---

## 1.3. 教师端

### 1.3.1 查询报名列表

- GET /match/workList？
  - isScore = 0 未评完 | 1 已评完
  - workName = "Xxx系统" 作品名称
  - workId = "12312323" 作品编号
  - page = 1 当前第几页
  - 由大到小排序

- return :
  - score: null = 五个评委还没有都评完 | 92 = 已出分
  - honor: null = 未出分 | “二等奖” = 计算出的所得奖项

```json
{
  "code": 0,
  "data": {
    workList:[
    {
      "workId": "234232342",
      "workName": "xxx系统",
      "score": 92,
      "honor": "二等奖",
    },
    {
      "workId": "2345332342",
      "workName": "xxx系统",
      "score": null,
      "honor": null,
    }
  ],
  "page": {
    "totalPage": 10,
    "eachPage": 5,
    "nowPage": 1
  }
  }
}
```

---

### 1.3.2 查看评分情况

- GET /match/workScore?
  - userId = "admin" 只能看到当前管理员账号给的评分信息
  - workId = "234232342"

- return :
  - yytg: 运营推广分
  - kszx: 开设装修分
  - khfw: 客户服务分

```json
{
  "code": 0,
  "data": {
    "workId": "234232342",
    "workName": "xxx系统",
    "link" : "www.baidu.com",
    "workUrl" : "222.27.227.135:8080/xxx.doc",
    "yytg": null,
    "kszx": null,
    "khfw: null
  }
}
```

---

### 1.3.3 评分

- POST /match/score?
- payload:
  - workId: 作品编号

```json
{
    "workId": "234232342",
    "yytg": 12,
    "kszx": 32,
    "khfw: 43
}
```

- return :

```json
{
    "code" : 0
}
```

---

### 1.3.4 公布

- POST /match/publish
  - 发送此请求后学生端显示分数，教师端显示获奖名单，按分数由大到小排序
  - publishKey: 公布操作需要特殊密码

```json
{
    "publishKey": "1322132432"
}
```

- return :

```json
{
    "code": 0,
    "data": [
      {
        "leaderName" : "贺妍",
        "members": ["小明", "小红", "小白"],
        "workName" : "xxx系统",
        "score": 92,
        "honor": "一等奖"
      },
      {
        "leaderName" : "彭冲",
        "members": ["小李", "小张", "小赵"],
        "workName" : "xxx系统",
        "score": 90,
        "honor": "一等奖"
      }
    ]
}
```

---

### 1.3.5 发布通知

- POST /match/news

```json
{
    "newsTitle": "比赛须知",
    "newsTime": "2019-4-25",
    "newsContent": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

- return :

```json
{
    "code" : 0
}
```

---
