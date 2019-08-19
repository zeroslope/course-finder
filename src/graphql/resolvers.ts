import { gql } from 'apollo-server-express'
import { find, filter, has } from 'lodash'

type CourseList = {
  cid: string,
  num: string,
  name: string,
  credit: number,
  tutor: string,
  title: string,
  limit: number,
  place: string,
  timing: string,
  depart: string
}

const data = require('../../data/courses.json')

const courseList: CourseList[] = Object.values(data).map((item: any) => {
  return {
    ...item,
    credit: parseInt(item['credit'], 10),
    limit: parseInt(item['limit'], 10)
  }
})
const courseArgs: { [key: string]: string } = {
  cid: 'string',
  num: 'string',
  name: 'string',
  credit: 'number',
  tutor: 'string',
  title: 'string',
  place: 'string',
  timing: 'string',
  depart: 'string'
}

const resolvers = {
  Query: {
    getCourse (parent: any, args: { [x: string]: string; }, context: any, info: any) {
      console.log(args)
      let res: CourseList[] = courseList
      Object.keys(courseArgs).forEach(arg => {
        const key = arg as keyof CourseList
        if (has(args, key)) {
          console.log(key)
          res = res.filter(item => {
            if (courseArgs[key] === 'number') {
              return item[key] === args[key]
            } else {
              return (item[key] as string).indexOf(args[key]) !== -1
            }
          })
        }
      })
      return res
    }
  }
}

export default resolvers
