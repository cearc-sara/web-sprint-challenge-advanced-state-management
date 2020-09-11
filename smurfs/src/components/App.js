import React, { useEffect } from "react";
import {connect} from 'react-redux';
import SmurfsList from './smurfsList';
import {fetchSmurfs, postSmurfs} from '../actions/index'
import Form from '../forms/form'
import "./App.css";

function App(props){
  const {fetchSmurfs, postSmurfs, loadingSmurfs, errorMessage} = props

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])

  useEffect(() => {
    postSmurfs();
  },[])


    return (
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
          {!loadingSmurfs ? (<SmurfsList/>) : (<div className='loading'>Searching for Smurfs</div>)}
          {errorMessage !== "" ? <div>{errorMessage}</div> : null}
          <Form/>
      </div>
    );

}
function mapStateToProps(state) {
  return{
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, {fetchSmurfs, postSmurfs})(App);
