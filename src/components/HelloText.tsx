import React from "react"
import { Text } from 'react-native'

interface Props {
    text: string,
    color: string
}

export default ({ text, color }: Props) => <Text style={{ color }}>{text}</Text>