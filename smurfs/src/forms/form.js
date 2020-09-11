import Axios from 'axios';
import React, {useState} from 'react';
import {connect} from 'react-redux'


const initialFormValues = {
    name: '',
    age: 200,
    height:''
}





function Form(props) {
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const postSmurfs = (newSmurf) => {
        Axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setFormValues(initialFormValues)
        })
    }

    const inputChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const submit = () => {
        const newSmurf = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            height: formValues.height.trim(),
        }
        
        postSmurfs(newSmurf)
    }

   

    const onInputChange = e => {
        const {name, value} = e.target
        inputChange(name, value)
    }


    return(
        <form onSubmit={submit}>
            <div>
                <h3>Add a new Smurf to the Village</h3>
                <button >Add Smurf</button>
            </div>
            <div>
                <h4>Smurf Info</h4>

                <label>Name&nbsp;
                    <input
                    value={props.smurfs.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Age&nbsp;
                    <input
                    value={props.smurfs.age}
                    onChange={onInputChange}
                    name='age'
                    type='text'
                    />
                </label>

                <label>Height&nbsp;
                    <input
                    value={props.smurfs.height}
                    onChange={onInputChange}
                    name='height'
                    type='text'
                    />
                </label>
            </div>
        </form>
    )
}
function mapStateToProps(state) {
    return{
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {})(Form);