import { log } from 'console'

import Myrequest from "./api"

import { Data } from "./types/image"
import { url } from 'inspector'
namespace myPick {
  type User = {
    Id: number
    Name: string
    Age: number
  }

  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type pickUser = MyPick<User, 'Id' | 'Name'>

  type uskey = pickUser[keyof pickUser]
  let uss: uskey = 10
  uss = '100'
  log(JSON.stringify(uss))

  type obj = Pick<OriginalObject, 'name'>

  class OriginalObject {
    name: string
    age: number
    location: string
    constructor(name: string, age: number, location: string) {
      this.name = name
      this.age = age
      this.location = location
    }
  }
  class NewObject {
    name: string
    //age: number
    location: string
    constructor(name: string, location: string) {
      this.name = name
      //this.age = age
      this.location = location
    }
  }
  const original = new OriginalObject('Jane', 27, 'New York')
  const updated = new NewObject('', '')
  Object.assign(updated, original) //
  console.log(updated)
  type j = Pick<OriginalObject, keyof NewObject>
  type aliceOjb = Array<j> | undefined
  function tem<aliceOjb>(param: OriginalObject[]) {
    type p = Pick<OriginalObject, "age" | "name">
    let pp: j;

  }
  var employees = {
    kiran: { age: 30, salary: 10000 },
    john: { age: 35, salary: 15000 },
    Tom: { age: 21, salary: 5000 }
  }

  export interface config {
    host: string;
    port: number;
    localhost: string;
  }

  function addIp() {
    let con: config = {
      host: "wangyingwen",
      port: 8080,
      localhost: "localhost"
    }
    //在对象中添加新的字段生成新的对象。 给config的变量con 添加IP字段。
    const c = { ...con, "Ip": '127.0.0.1' }
    console.log(c)
    return c
  }

  addIp()

  //变量定义

  type MyConfig = typeof addIp;
  let Mc: typeof addIp;

  //如何动态的增加对象属性。https://blog.csdn.net/weixin_47967031/article/details/127152256?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-127152256-blog-130320319.235%5Ev43%5Epc_blog_bottom_relevance_base3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-127152256-blog-130320319.235%5Ev43%5Epc_blog_bottom_relevance_base3&utm_relevant_index=2
  //https://blog.csdn.net/wangfei0225_/article/details/130320319?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130320319-blog-130287207.235%5Ev43%5Epc_blog_bottom_relevance_base3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130320319-blog-130287207.235%5Ev43%5Epc_blog_bottom_relevance_base3&utm_relevant_index=1

  //Record<K,T>构造具有给定类型T的一组属性K的类型。在将一个类型的属性映射到另一个类型的属性时，Record非常方便。

  type t1 = Record<string, string | boolean | never | undefined | number>

  let val: t1 = {}
  val.hh = "host"
  val.age = 10
  val.name = "x"
  val.isGirgl = false
  val.old = undefined

  let objj: Record<string, number | string | boolean>[] = [];
  objj.push({
    name: "10",
    sex: 13,
    isGirgl: false
  })

  //Partail 的使用场景

  interface UserInfo {
    Name: string,
    Id: number,
    Mail: string
  }

  function GetUserName(): Partial<UserInfo> {
    const u = {
      Name: 'hhahh'
    }
    return u
  }

  async function reqTest(): Promise<Data> {
    const reuslt = await Myrequest({
      url: 'http://127.0.0.1:5000/api/v1/kelong/banner_images',
      method: 'post',
      data: {
        page: 1,
        page_size: 10,
      }
    }).then((res: any) => {
      //请求成功
      console.log(JSON.stringify(res))
      return res.data
    }).catch((err) => {
      console.log(err)
    }).finally(

    )
    return reuslt
  }

  async function ttt() {
    const result = await reqTest()
    let list=[]
    list=[...result?.style_image_map?.pubgm?.banner_image_list.map((val: string) => {
      return {
        value: val,
        lable: val
      }
    })]
    console.log(list)
  }


  ttt()





};

//将原始对象的值复制到新对象console.log(updated); \u002F\u002F 打印新对象，注意值已更改但键未更改```在此示例中，我们首先创建了两个类，即OriginalObject和NewObject，它们具有相同的属性和构造函数。然后我们创建了一个原始对象并将其传递给一个空的新对象，并使用Object.assign()方法将原始对象的值复制到新对象中。最后我们打印出新对象作为输出。值已更改但键未更改。这就是将Typescript类对象转换为另一个对象，仅更改值而保留键的方法。"],
