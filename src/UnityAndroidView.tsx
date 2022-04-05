import * as React from "react";
import { requireNativeComponent, ViewProperties, View } from 'react-native';
import * as PropTypes from "prop-types";
const { ViewPropTypes } = require('react-native');

export interface UnityAndroidViewProps extends ViewProperties {
    /**
     * Receive string message from unity.
     */
    onMessage?: (message: string) => void;
}

export class UnityAndroidView extends React.Component<UnityAndroidViewProps> {
    public static propTypes = {
        ...ViewPropTypes,
        onMessage: PropTypes.func
    }

    public render() {
        const { onMessage, ...props } = this.props;
        return (
            <View {...props}>
                <NativeUnityView
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                    onMessage={onMessage}
                >
                </NativeUnityView>
                {this.props.children}
            </View>
        );
    }
}

// @ts-ignore
const NativeUnityView = requireNativeComponent<UnityAndroidViewProps>('UnityView', UnityAndroidView);