/*
 * Copyright (C) Pootle contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import React from 'react';

import FormCheckedInput from './FormCheckedInput';
import FormValueInput from './FormValueInput';
import FormSelectInput from './FormSelectInput';


const FormElement = React.createClass({

  propTypes: {
    type: React.PropTypes.string,
    attribute: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    formData: React.PropTypes.object.isRequired,
    help: React.PropTypes.string,
    errors: React.PropTypes.object,
  },

  /* Lifecycle */

  getDefaultProps() {
    return {
      type: 'text',
    };
  },


  /* Layout */

  render() {
    const { attribute } = this.props;
    const fieldId = `id_${attribute}`;
    const hint = this.props.help;

    const errors = (Object.keys(this.props.errors).length > 0 &&
                    this.props.errors[attribute]);

    const InputComponent = {
      text: FormValueInput,
      email: FormValueInput,
      password: FormValueInput,
      textarea: FormValueInput,

      checkbox: FormCheckedInput,
      radio: FormCheckedInput,

      select: FormSelectInput,
    }[this.props.type];

    const newProps = {
      id: fieldId,
      name: attribute,
      value: this.props.formData[attribute],
    };

    return (
      <div className="field-wrapper">
        <label htmlFor={fieldId}>{this.props.label}</label>
        <InputComponent {...this.props} {...newProps} />
      {errors &&
        <ul className="errorlist">{errors.map((msg, i) => {
          return <li key={i}>{msg}</li>;
        })}</ul>}
      {hint &&
        <span className="helptext">{hint}</span>}
      </div>
    );
  },

});


export default FormElement;
