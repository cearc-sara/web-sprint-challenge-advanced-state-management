import React, {useState} from 'react';
import {postSmurfs} from '../actions/index'

const initialFormValues = {
    name: '',
    age: '',
    height:''
}



const initialDisabled = true

export default function Form() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(initialDisabled)


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

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onInputChange = e => {
        const {name, value} = e.target
        inputChange(name, value)
    }


    return(
        <form onSubmit={onSubmit}>
            <div>
                <h3>Add a new Smurf to the Village</h3>
                <button >Add Smurf</button>
            </div>
            <div>
                <h4>Smurf Info</h4>

                <label>Name&nbsp;
                    <input
                    value={formValues.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Age&nbsp;
                    <input
                    value={formValues.age}
                    onChange={onInputChange}
                    name='age'
                    type='text'
                    />
                </label>

                <label>Height&nbsp;
                    <input
                    value={formValues.height}
                    onChange={onInputChange}
                    name='height'
                    type='text'
                    />
                </label>
            </div>
        </form>
    )
}