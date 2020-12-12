import { React } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from './../../Common/FormsControls/FormsControls';
import { Contact } from './ProfileInfo';




const ProfileDataForm = ({ handleSubmit }) => {
    return (
        <div>
            <span>you are in editMode</span>
            {/* createField = (validate, placeholder, component, name, type) */}

            <form onSubmit={handleSubmit} >
                <div>
                    <button>save</button>
                </div>

                {/* full name */}
                <div>
                    <b>Full name: </b>
                    {createField([], 'Full name', Input, "fullName", 'text')}
                </div>

                {/* aboutme */}
                <div>
                    <b>abot me: </b>
                    {createField([], 'About me', Textarea, "aboutMe", 'text')}
                </div>
                {/* job */}
                <div>
                    <b>Looking wor a job: </b>
                    {createField([], '', Input, "lookingForAJob", 'checkbox')}
                </div>
                {/* job descriptoin */}
                <div>
                    <b>My professional skills: </b>
                    {createField([], 'lookingForAJobDescription', Textarea, "lookingForAJobDescription", 'text')}
                </div>
                {/* <div>
                    <b>Contacts: </b>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitel={key} ContactValue={profile.contacts[key]} />
                    })}
                </div> */}
            </form >


        </div>
    )
}


const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataReduxForm;