import axios from 'axios'
import db from './firebase'

const ticket = 'c27a9def61679d3aea3ec99eb60818e4'
const departmentUrl = "https://qy.bangongyi.com/address/api/department/list?ticket="

const getInfo =() =>{
        axios.get(departmentUrl+ticket)
        .then(resp => {
            //更新部门列表
            let apartments = resp.data.data.department_list
            db.ref().update({
                apartments
            })
        })
}

getInfo()