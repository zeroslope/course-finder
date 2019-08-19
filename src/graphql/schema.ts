import { gql } from 'apollo-server-express'

const data = {
  'cid': '655498',
  'num': 'ATMO130001.01',
  'name': '\u5927\u6c14\u52a8\u529b\u5b66\u57fa\u7840',
  'credit': '4',
  'tutor': 'Wu Liguang\uff08\u5434\u7acb\u5e7f\uff09,\u8c2d\u8a00\u79d1',
  'title': '\u6559\u6388,',
  'limit': '25',
  'place': 'JA306 ',
  'timing': '\t\t\t\t\u661f\u671f\u4e8c 4-5 [9-16]  <br>\u661f\u671f\u4e8c 4-5 [1-8]  <br>\u661f\u671f\u56db 3-4 [9-16]  <br>\u661f\u671f\u56db 3-4 [1-8]  \r\n',
  'depart': '\u5927\u6c14\u4e0e\u6d77\u6d0b\u79d1\u5b66\u7cfb'
}

const typeDefs = gql`
  type Course {
    "课程ID"
    cid: String,
    "课程序号"
    num: String,
    "课程名称"
    name: String,
    "学分"
    credit: Int,
    "教师"
    tutor: String,
    "职称"
    title: String,
    "人数上限"
    limit: Int,
    "教室"
    place: String,
    "时间"
    timing: String,
    "开课院系"
    depart: String
  }

  type Query {
    "A simple type for getting started!"
    getCourse(cid: String, num: String, name: String, credit: Int, tutor: String, title: String, place: String, timing: String, depart: String): [Course]
}
`
export default typeDefs
