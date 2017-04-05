//.\node_modules\.bin\babel-node .\src\config\addTest.js
import db from '../firebase'

const test = [
    {category: 0,
    content: "创建tensorflow图像识别脚本",
    estimateHours: 3,
    evaluation: "实现功能。已github上的commit为准。",
    project: "AI图像识别",
    status: "confirm",
    target: "04-05 18:00"},

    {category: 1,
    content: "翻译标签到人类可读英语为汉语",
    estimateHours: 3,
    evaluation: "实现功能。已github上的commit为准。",
    project: "AI图像识别",
    status: "confirm",
    target: "04-05 18:00"}
]

const addTest = (obj) =>{db.ref('/objects/').push(obj);}

test.forEach(obj =>{
    addTest(obj)
})
