import React, { useState } from 'react';
import { Button, ActivityIndicator, Pressable, Text } from 'react-native';
import { commonStyles, DEFAULT_COLOURS } from '../../styles/commonStyles'

const SubmitButton = ({label, onSubmit}) => {
    const [loading, setLoading] = useState(false);

    return (
        <Pressable
            style={commonStyles.submitButton}
            disabled={loading}
            onPress={() => {setLoading(true); onSubmit()}}
        >
            {loading ? (
            <ActivityIndicator size="small" color={DEFAULT_COLOURS.tertiary} />
            ) : (
            <Text style={commonStyles.submitText}>{label}</Text>
            )}
        </Pressable>
    )
}

export default SubmitButton;