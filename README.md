# 1. 扫雪工作管理系统

<!-- TOC -->

- [1. 扫雪工作管理](#1-扫雪工作管理)
  - [1.1. 登录](#11-登录)
    - [1.1.1 正常登录](#112-正常登录)
  - [1.2. 荣誉墙](#12-荣誉墙)
    - [1.2.1 获取荣誉墙](#121-获取荣誉墙)
    - [1.2.2 投票动作](#122-投票动作)
    - [1.2.3 获取投票人状态](#123-获取投票人状态)
    - [1.2.4 获取投票系统状态](#124-获取投票系统状态)
  - [1.3. 雪情论坛](#13-雪情论坛)
    - [1.3.1 获取雪情列表](#131-获取雪情列表)
    - [1.3.2 查看雪情内容](#132-查看雪情内容)
    - [1.3.3 发表雪情](#133-发表雪情)
    - [1.3.4 发表评论](#134-发表评论)
    - [1.3.5 获取评论](#135-获取评论)
  - [1.4. 绩效考察](#14-绩效考察)
    - [1.4.1 获取绩效列表](#141-获取绩效列表)
  - [1.5. 员工端](#15-员工端)
    - [1.5.1 个人信息登记](#151-个人信息登记)
    - [1.5.2 个人状态更新](#152-个人状态更新)
        - [1.5.2.1 工作打卡](#1521-工作打卡)
        - [1.5.2.2 获取当前工作状态](#1522-获取当前工作状态)
    - [1.5.3 获取任务](#153-获取任务)
    - [1.5.4 获取总工时](#154-获取总工时)
  - [1.6. 组长端](#16-组长端)
    - [1.6.1 查询任务](#161-查询任务)
    - [1.6.3 借调](#163-借调)
    - [1.6.4 更新组员工作进度](#164-更新组员工作进度)
    - [1.6.5 显示系统记录](#165-显示系统记录)
    - [1.6.6 对组员打分](#166-对组员打分)
    - [1.6.7 分配组员任务](#167-分配组员任务)
    - [1.6.9 更新工具状态](#169-更新工具状态)
    - [1.6.11 更新车辆状态](#1611-更新车辆状态)
  - [1.7. 审批端](#17-审批端)
    - [1.7.1 查看列表](#171-查看列表)
      - [1.7.1.1 获取员工列表](#1711-获取员工列表)
      - [1.7.1.2 获取小组列表](#1712-获取小组列表)
      - [1.7.1.3 获取车辆列表](#1712-获取车辆列表)
      - [1.7.1.4 获取工具列表](#1714-获取工具列表)
      - [1.7.1.5 获取申请列表](#1715-获取申请列表)
    - [1.7.2 新增](#172-新增)
      - [1.7.2.1 新增工具](#1721-新增工具)
      - [1.7.2.2 新增车辆](#1722-新增车辆)
    - [1.7.3 调配](#173-调配)
      - [1.7.3.1 调配员工](#1731-调配员工)
      - [1.7.3.2 调配车辆](#1732-调配车辆)
      - [1.7.3.3 调配工具](#1733-调配工具)
      - [1.7.3.4 调配任务](#1734-调配任务)
    - [1.7.4 处理申请](#174-处理申请)
    - [1.7.5 管理打分系统](#175-管理打分系统)
    - [1.7.6 对小组打分](#176-对小组打分)
    - [1.7.7 管理投票系统](#177-管理投票系统)


<!-- /TOC -->

## 1.1. 登录

### 1.1.1 正常登录

- POST /snow/login
- payload :

```json
{
    "userId": "160023",
    "passWord" : "abcdefg123"
}
```

- return :
  - type: A = 普通组员 | B = 组长 | C = 管理员

```json
{
    "code" : 0,
    "type" : "A",
    "token" : "s24gj3h4g53j4f5kh3f"
}
```

---

## 1.2. 荣誉墙

### 1.2.1 获取荣誉墙

- GET /snow/honor

- return :
- 按所得票数vote由大到小排序返回

```json
{
  "code" : 0,
  "data" : {
    "honorList": [
      {
        "userId": "123",
        "userName":"贺妍",
        "vote": 23
      },
      {
        "userId": "321",
        "userName":"小李",
        "vote": 22
      },
      {
        "userId": "222",
        "userName":"小张",
        "vote": 20
      }
    ],
    "page":{
      "totalSize": 25,
      "totalPage": 10,
      "eachPage": 5,
      "nowPage": 1
    }
  }
}
```

---

### 1.2.2 投票动作

- GET /match/vote?from=&to=
- from: 谁投的
- to: 给谁投的

- return :

```json
{
    "code" : 0
}
```

---

### 1.2.3 获取投票人状态

- GET /snow/voteState/{userId}

- return :
  - state: 0 = 未投票 | 1 = 已投票

```json
{
    "code" : 0,
    "state" : 0
}
```

---

### 1.2.4 获取投票系统状态

- GET /snow/voteSysState

- return :
  - state: 0 = 未开放 | 1 = 已开放

```json
{
    "code" : 0,
    "state" : 0
}
```

---

- GET /snow/voteState/{userId}

- return :
  - state: 0 = 未投票 | 1 = 已投票

```json
{
    "code" : 0,
    "state" : 0
}
```

---

## 1.3. 雪情论坛

### 1.3.1 获取雪情列表

- GET /snow/snowList
  - page = 1 当前第几页
  - 按时间先后顺序排序（越接近现在的越排前）

- return :

```json
{
  "code": 0,
  "data": {
    "snowList":[
      {
        "snowId": 123,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 123,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      }
    ],
    "page": {
      "totalSize": 25,
      "totalPage": 10,
      "eachPage": 5,
      "nowPage": 1
    }
  }
}
```

---

### 1.3.2 查看雪情内容

- GET /snow/snowContent?snowId=

- return :

```json
{
  "code": 0,
  "data": {
    "snowId": 123,
    "title": "重大事件",
    "content" : "严重严重严重",
    "time" : "2019/4/4 12:00:00",
    "author": "贺妍"
    }
  }
}
```

---

### 1.3.3 发表雪情

- POST /snow/newSnow
- payload:

```json
{
    "userId": "234232342",
    "title": "重大事件",
    "content": "林大来水了",
}
```

- return :
- 后台生成时间并存入数据库

```json
{
    "code" : 0
}
```

---

### 1.3.4 发表评论

- POST /snow/newComment
- payload:

```json
{
    "userId": "1322132432",
    "content": "hhhhhhhhhhhhhhh"
}
```

- return :

```json
{
    "code": 0
}
```

---

### 1.3.5 获取评论

- GET /snow/comments?snowId=&page=

- return:

```json
{
  "code": 0,
  "data": {
      "commentList": [
        {
          "commentId": "123",
          "content": "已上报",
          "time" : "2019/4/4 12:00:00",
          "author": "小李"
        },
        {
          "commentId": "123",
          "content": "已上报",
          "time" : "2019/4/4 12:00:00",
          "author": "小李"
        },
        {
          "commentId": "123",
          "content": "已上报",
          "time" : "2019/4/4 12:00:00",
          "author": "小李"
        },
      ],
    "page":{
      "totalSize": 25,
      "totalPage": 10,
      "eachPage": 5,
      "nowPage": 1
    }
  }
}
```

---

## 1.4. 绩效考察

### 1.4.1 获取绩效列表
- GET /snow/work

- return :
- 按score由大到小排序返回,前百分之30‘reward’字段为“有奖金”，其余为空或者不传

```json
{
  "code" : 0,
  "data" : {
    "workList": [
      {
        "userId": "123",
        "userName":"贺妍",
        "score": 23,
        "reward": "有奖金"
      },
      {
        "userId": "321",
        "userName":"小李",
        "score": 22,
        "reward": "有奖金"
      },
      {
        "userId": "222",
        "userName":"小张",
        "score": 20
      }
    ],
    "page":{
      "totalSize": 25,
      "totalPage": 10,
      "eachPage": 5,
      "nowPage": 1
    }
  }
}
```

---

## 1.5. 员工端

### 1.5.1 个人信息登记

- POST /snow/signin
- payload:

```json
{
  "name": "tony",
  "sex": "男",
  "id": "123454199809160023",
  "workAge": "两年",
  "address": "和兴路26号",
  "password": "123456"
}
```

- return :

```json
{
  "code": 0
}
```
---

### 1.5.2 个人状态更新

#### 1.5.2.1 工作打卡

- GET /snow/clock?state=0
- state : 0 = 开始工作（切换为工作中状态） | 1 = 结束工作（切换为待工作状态） | -1 = 请假

- return:
- 后台计算“开始工作”请求和“结束”请求的时间间隔，累计在1.5.2.2中返回总共工时

```json
{
  "code": 0
}
```
---

#### 1.5.2.2 获取当前工作状态

- GET /snow/clock

- return: 
- 0 = 工作中 | 1 = 待工作 | -1 = 请假

```json
{
  "code": 0,
  "data": {
    "workTime": "1小时28分",
    "state": -1,
    "task": "和兴路重灾区",
    "teamId": "123455"
  }
}
```
---

## 1.5.3 获取任务

- GET /snow/task/{userId}

- return:

```json
{
  "code": 0,
  "data": {
    "content": "xxxxxx任务，请在三天内完成",
    "time": "2019/10/10 12:00:00"
  }
}
```
---

## 1.5.4 获取总工时

- GET /snow/workTime/{userId}

- return:

```json
{
  "code": 0,
  "data": "12小时"
}
```

---

## 1.6. 组长端

### 1.6.1 查询任务

- GET /snow/teamTask/{teamId}

- return:

```json
{
  "code": 0,
  "data": {
    "content": "非常紧急，请在三日内完成",
    "time": "2019/4/4 20:00:00"
  }
}
```

## 1.7. 审批端

### 1.7.1 查看列表


### 1.7.7 管理投票系统

#### 1.7.7.1 获取投票系统状态

- get 





