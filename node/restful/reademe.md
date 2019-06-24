- json 格式是标准的数据格式
- 前后端开发， /api json格式交流
- 全栈

- restful认为 一切皆资源
- 设计URL
  /posts
  /posts/:id

  /comments
  /comments/:id

  /post/1/comments

GET 查询
加一条评论 增加一个资源
POST /comments
DELETE动词 /posts/2
修改 put
/comments/2 body

- restful 考点
认为一切皆资源，URL是唯一定位自愿的额符号
它有一定的设计原则
HTTP动词式web资源的状态转换动词
 

 操作     SOL方法       HTTP动词
 CREATE     INSERT         POST 
 READ        SELECT         GET
 UPDATE       UPDATE        PUT/PATCH
 DELETE         DELETE      DELETE