import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { updatePassword, updateUsername } from '../../ducks/reducer'
import {Link} from 'react-router-dom'


class Auth extends Component {
    constructor(){
        super()
        this.state={
            newArr:[]
       
        }
        this.createUser=this.createUser.bind(this)
    }
   
    createUser(){
        axios.post('/api/user').then(results=>this.setState({newArr:results.data})) 
       
    }
    findUser(){
        axios.get('/api/user').then(results=>this.setState({newArr:results.data}))
    }
    render(){
    //    const { updatePassword, updateUsername }=this.props
       console.log(this.props)
        return(
            <div>
                <input onChange={(e)=>this.props.updateUsername(e.target.value)}></input>
                <input onChange={(e)=>this.props.updatePassword(e.target.value)}></input>
                <Link to='/dashboard'><button onClick={()=>this.findUser()}>Login</button></Link>
               <button onClick={()=>this.createUser()}>Register</button>
            
            </div>
        )
    }
}
function mapStateToProps(state){
    const{username, password} =state
    return{username,password}
}
export default connect(mapStateToProps,{updatePassword,updateUsername}) (Auth)