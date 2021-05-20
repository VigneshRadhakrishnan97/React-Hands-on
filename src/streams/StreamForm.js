import React from "react";
import { Field, reduxForm } from "redux-form";

class StramForm extends React.Component {

    rendererror = ({ touched, error }) => {

        if (error && touched)
            return (
                <div> {error} </div>
            );

    }

    renderInput = (forminput) => {
        return (
            <div className="field">
                <label>{forminput.label}</label>
                <input {...forminput.input} />
                <div>{this.rendererror(forminput.meta)}</div>
            </div>
        );
    };

    onsubmit = (formprops) => {
        this.props.onSubmit(formprops);
    };

    render() {
        return (
            <div>
                <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.onsubmit)}
                >
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Enter Title"
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Enter Description"
                    />
                    <button className="ui button primary ">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formvalue) => {
    const error = {};

    if (!formvalue.title) error.title = "You must enter title";
    if (!formvalue.description) error.description = "You must enter description";

    return error;
};

export default  reduxForm({ form: "streamform", validate: validate })(
    StramForm
);

