import axios from 'axios'
import db from './firebase'

const ticket = 'c27a9def61679d3aea3ec99eb60818e4'
const departmentUrl = "https://qy.bangongyi.com/address/api/department/list?ticket="

const getInfo =() =>{
        axios.get(departmentUrl+ticket)
        .then(resp => {
            console.log('sucess')
            console.log(resp.data.data)
        })
}

getInfo()
