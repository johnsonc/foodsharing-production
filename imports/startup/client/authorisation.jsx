import {Accounts} from 'meteor/std:accounts-ui';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    onSignedInHook : () => browserHistory.push('/')
});
