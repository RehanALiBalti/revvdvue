<template>
    <div>
        <h1>User Attributes</h1>
        <div v-if="userAttributes">
            <p><strong>Name:</strong> {{ getEmailAttributeValue() }}</p>
            <p><strong>Email:</strong> {{ getEmailAttributeValue() }}</p>
            <p><strong>Phone Number:</strong> {{ getPhoneNumberAttributeValue() }}</p>
            <!-- Render other attributes as needed -->
        </div>
        <div v-else>
            <p>No user attributes found.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userAttributes: null
        };
    },
    created() {
        this.fetchUserAttributes();
    },
    methods: {
        fetchUserAttributes() {
            const userDataString = localStorage.getItem('CognitoIdentityServiceProvider.3gdn1a64vc584t64t7e0up87el.50fc691c-30a1-70c7-4318-d2aa16c0de0b.userData');

            if (userDataString) {
                try {
                    const userData = JSON.parse(userDataString);
                    this.userAttributes = userData.UserAttributes;
                } catch (error) {
                    console.error('Error parsing user data:', error);
                }
            } else {
                console.warn('No user data found in local storage.');
            }
        },
        getEmailAttributeValue() {
            return this.getAttributeValue('email');
        },
        getPhoneNumberAttributeValue() {
            return this.getAttributeValue('phone_number');
        },
        getAttributeValue(attributeName) {
            if (this.userAttributes) {
                const attribute = this.userAttributes.find(attr => attr.Name === attributeName);
                return attribute ? attribute.Value : 'N/A';
            }
            return 'N/A';
        }
    }
};
</script>