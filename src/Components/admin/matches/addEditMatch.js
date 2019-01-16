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
                element:'input',
                value:'',
                config:{
                    label: 'Event date',
                    name:'date_input',
                    type: 'date',
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:'',
                showlable: true
            },
        }

    }

    render() {
        return (
            <div>
                <div className='editmatch_dialog_wrapper'>
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div className=''>
                        <form onSubmit={(event) => this.submitForm(event)}>
                            <FormField 
                                id={'date'}
                                formdata={this.state.formdata.date}
                                change={(element) => {this.updateForm(element)}}
                            />
                        </form>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default AddEditMatch;