/// <reference types="react" />
declare const CommentsWrapper: {
    (props: {
        authKey: string;
    }): JSX.Element;
    defaultProps: {
        direction: string;
        textAreaPlaceholder: string;
        showTextWhenEmpty: boolean;
        showMessageTime: boolean;
        hasSendButton: boolean;
        sendButtonContent: string;
    };
};
export default CommentsWrapper;
