import React, {Component} from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class AddEditMatch extends Component {
    state = {
        matchId:'',
        formType: '',
        formError: false,
        formSuccess: '',
        teams:[],
        formdata: {
            date: {
                email:{
                    element:'input',
                    value:'',
                    config:{
                        name:'email_input',
                        type: 'email',
                        placeholder: 'Enter your email'
                    },
                    validation:{
                        required: true,
                        email: true
                    },
                    valid: false,
                    validationMessage:''
                }
            }
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AddEditMatch;