import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import {
    Container,
    Header,
    Body,
    ButtonNo,
    ButtonYes,
} from './styles';

import Texts from 'config/Texts';
import { RESEND_VALIDATE_EMAIL } from 'services/api/mutation';

const STATE = {
    INITIAL : 1,
    RESEND : 2,
    SUCCESS : 3,
};

export function AlertValidateEmail({ children, ...props }) {
    const TEXTS = Texts.ALERT_VALIDATE_EMAIL;

    const [result, setResult] = useState(STATE.INITIAL);
    const [resendEmail, { loading }] = useMutation(RESEND_VALIDATE_EMAIL);

    const onResendEmail = async () => {
        try {
            await resendEmail()
                .then(response => {
                    if (response && response.data && response.data.response) {
                        const OKEY = response.data.response;
                        if (OKEY) {
                            setResult(STATE.RESEND);
                        }
                    }
                })
                .catch(e => { })
        } catch (error) { }
    }

    return (
        <Container
            {...props}
            title={TEXTS.TITLE}
        >
            {
                result === STATE.INITIAL &&
                <>
                    <Header>
                        {TEXTS.INITIAL.TITLE}
                    </Header>
                    <Body>
                        <ButtonNo
                            onClick={() => onResendEmail()}
                            loading={loading}
                        >
                            {TEXTS.INITIAL.BUTTON_NO}
                        </ButtonNo>
                        <ButtonYes
                            onClick={() => setResult(STATE.SUCCESS)}
                        >
                            {TEXTS.INITIAL.BUTTON_YES}
                        </ButtonYes>
                    </Body>
                </>
            }
            {
                result === STATE.RESEND &&
                <>
                    <Header>
                        {TEXTS.RESEND.TITLE}
                    </Header>
                    <Body>
                        <ButtonYes
                            onClick={() => window.location.reload()}
                        >
                            {TEXTS.RESEND.BUTTON_YES}
                        </ButtonYes>
                    </Body>
                </>
            }
            {
                result === STATE.SUCCESS &&
                <>
                    <Header>
                        {TEXTS.SUCCESS.TITLE}
                    </Header>
                    <Body>
                        <ButtonYes
                            onClick={() => window.location.reload()}
                        >
                            {TEXTS.SUCCESS.BUTTON_YES}
                        </ButtonYes>
                    </Body>
                </>
            }
        </Container>
    );
}
export default AlertValidateEmail;