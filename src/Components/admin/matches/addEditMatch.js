import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formField';
import { validate } from '../../ui/misc';

class AddEditMatch extends Component {

    state = {
      matchId:'',
      formType:'',
      formError:false,
      formSuccess: '',
      teams: [],
      formdata: {
        date: {
            element: 'input',
            value: '',
            config: {
              label: 'Event date',
              name:"date_input",
              type: 'date'
            },
            validation: {
              required: true,
            },
            valid: false,
            validationMessage: '',
            showLabel: true
          },
          local: {
              element: 'select',
              value: '',
              config: {
                label: 'Select a local team',
                name:"select_local",
                type: 'select',
                options: []
              },
              validation: {
                required: true,
              },
              valid: false,
              validationMessage: '',
              showLabel: false
            },
        }
      }

render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>
            {this.state.formType}
          </h2>
          <div>
            <form onSubmit={e => this.submitForm(e)}>
              <FormField
                id={'date'}
                formdata={this.state.formdata.date}
                change={(e) => this.updateForm(e)}
                />

              <FormField
                id={'local'}
                formdata={this.state.formdata.local}
                change={(e) => this.updateForm(e)}
                />

            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}
export default AddEditMatch;
