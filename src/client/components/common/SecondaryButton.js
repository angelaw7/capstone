import React, { useState } from 'react';
import { Button, ActivityIndicator, Pressable, Text } from 'react-native';
import { commonStyles, DEFAULT_COLOURS } from '../../styles/commonStyles'

const SecondaryButton = ({label, onSubmit, buttonStyle, textStyle}) => {
    const [loading, setLoading] = useState(false);

    return (
        <Pressable
            style={[commonStyles.secondaryButton, buttonStyle]}
            disabled={loading}
            onPress={() => {setLoading(true); onSubmit()}}
        >
            {loading ? (
                <ActivityIndicator size="small" color={DEFAULT_COLOURS.secondarySubmit} />
            ) : (
                <Text style={textStyle}>{label}</Text>
            )}
        </Pressable>
    )
}

export default SecondaryButton;