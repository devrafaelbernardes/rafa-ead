import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult } from './styles';
import Form from 'components/forms/Form';
import InputPassword from 'components/InputPassword';
import Texts from 'config/Texts';
import objectMutation, { UPDATE_PASSWORD } from 'services/api/mutation';

export function FormUpdatePassword({ children, ...props }) {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const [submit, { loading }] = useMutation(UPDATE_PASSWORD);

    const TEXTS = Texts.FORM_UPDATE_PASSWORD;

    useEffect(() => {
        if (result !== "") {
            let MOUNTED = true;
            const timeout = setTimeout(() => {
                if (MOUNTED) {
                    setResult("");
                }
            }, 2000);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const resetInputs = () => {
        setPassword("");
        setNewPassword("");
    }

    const update = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({ password, newPassword }))
                .then(async (response) => {
                    if (response && response.data && response.data.response) {
                        await resetInputs();
                        OKEY = true;
                    }
                })
                .catch(e => {})
        } catch (error) { }
        await setResult(OKEY);
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => update()}
            >
                <Line>
                    <InputPassword
                        required
                        value={password}
                        label={TEXTS.PASSWORD}
                        placeholder={TEXTS.PASSWORD}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Line>
                <Line>
                    <InputPassword
                        required
                        value={newPassword}
                        label={TEXTS.NEW_PASSWORD}
                        placeholder={TEXTS.NEW_PASSWORD}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Line>
                {
                    (result === true) &&
                    <BoxResult color={colors.success}>
                        {TEXTS.SUCCESS}
                    </BoxResult>
                }
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.ERROR}
                    </BoxResult>
                }
                <Line>
                    <Button
                        type="submit"
                        loading={loading}
                    >
                        {TEXTS.BUTTON_SUBMIT}
                    </Button>
                </Line>
            </Form>
        </Container>
    );
}
export default FormUpdatePassword;