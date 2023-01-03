import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Accordion, Badge, Button,Card } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listexercise,deleteNoteAction } from '../../actions/exerciseActions'
import Loading from '../../components/loading'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Errormessage from '../../components/Errormessage'
import '../createnote/Create.css'
const Myexercise = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
const exerciselist=useSelector((state)=>state.exerciseListreducers)
const {loading,notes,error}=exerciselist
const userinfo=useSelector((state)=>state.userLogin)
const noteCreate = useSelector((state) => state.createexercise);
const noteUpdate = useSelector((state) => state.updateexercise);
const {success:successupdate}=noteUpdate
// jab b koi change aye exercise list me useffect run krna iss par
  const { success:successCreate } = noteCreate;

const noteDelete=useSelector(state=>state.deleteexercise)  
const {loading:loadingDelete,error:errorDelete,success:successDelete}=noteDelete
    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure")) {
            dispatch( deleteNoteAction(id))
        }
    }
 
    useEffect(()=>{
       dispatch(listexercise())
      //  agr user login ni return bhj dia jye login page pr
       if(!userinfo){
        navigate('/')
       }
    },[dispatch,successCreate,userinfo,navigate,successupdate,successDelete])
    return (
        <>
        <div className='bg3'></div>
            <MainScreen title="Welcome Asad Butt" />
            <Link to="/create">
                <Button style={{position:"relative",left:"550px"}} size="lg" className='animate'>
                    Create new Exercise
                </Button>
                </Link>
                {error && <Errormessage variant='danger'>{error}</Errormessage>}
                {loading && <Loading/>}
                <div className='container'>
                        < div className='row'>
                {
                    notes?.reverse().map((exer,key) => (
              
                    
                      <div className="col-md-4 mt-5 text-center offset-1 col-sm-6 " style={{width:"280px"}} key={exer._id}>

                      <div className="card text-center" >
                        <div className="ribbon-wrapper moveribbon">
                          <div className="glow">&nbsp;</div>
                          <div className="ribbon-fronts">
                            {exer.title}
                          </div>
                          <div className="ribbon-edge-toplefts"></div>
                          <div className="ribbon-edge-toprights"></div>
                          <div className="ribbon-edge-bottomlefts"></div>
                          <div className="ribbon-edge-bottomrights"></div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Description</h5> <span>{exer.content}</span>
                          <h5 className="card-text">Activity Type</h5> {exer.category}
                          <h5>Duration </h5>{exer.duration}
                        </div>
                        <div className="card-footer">
                          <div className="ribbon-wrapper">
                            <div className="glow">&nbsp;</div>
                            <div className="ribbon-front">
                              Date: 
                            {exer.createdAt.substring(0, 10)}
                            </div>
                            <div className="ribbon-edge-topleft"></div>
                            <div className="ribbon-edge-topright"></div>
                            <div className="ribbon-edge-bottomleft"></div>
                            <div className="ribbon-edge-bottomright"></div>
                          </div>
                          <div className="iconseditdlt mt-4">
                          {/* to={`/exercise/${exer._id}`} */}
                          {/* {{pathname: `/${this.props.testvalue}` */}
                          <a href={`/exercise/${exer._id}`}><i className="fas fa-edit bg-danger text-white"></i></a>
                      <a  onClick={() => deleteHandler(exer._id)}> <i className="fa fa-trash" aria-hidden="true"></i></a>
                            
                          </div>

                    
                        </div>
          
                      </div>
                    </div>
                  
                    ))
                }
  </div></div>
            

        </>
    )
}

export default Myexercise