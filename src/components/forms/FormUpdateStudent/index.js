import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, StudentPreviewContainer, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import Texts from 'config/Texts';
import { STUDENT, IMAGE } from 'services/api/responseAPI';
import objectMutation, { UPDATE_STUDENT } from 'services/api/mutation';
import Avatar from 'components/Avatar';
import { GET_CURRENTY_USER } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdateStudent({ ...props }) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_UPDATE_STUDENT;

    let { data: dataGetStudent, loading: loadingGetStudent } = useQuery(GET_CURRENTY_USER);
    const [submit, { loading }] = useMutation(UPDATE_STUDENT);

    useEffect(() => {
        if (image) {
            try {
                setImagePreview(URL.createObjectURL(image));
            } catch (error) { }
        } else {
            setImagePreview(null);
        }
    }, [image]);

    useEffect(() => {
        (async () => {
            if (dataGetStudent && dataGetStudent.response) {
                const student = dataGetStudent.response;
                setName(student[STUDENT.NAME]);
                setLastname(student[STUDENT.LASTNAME]);
                setImagePreview(student[STUDENT.PROFILE_IMAGE] && student[STUDENT.PROFILE_IMAGE][IMAGE.URL]);
            }
        })()
    }, [dataGetStudent]);

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

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const update = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({ name, lastname }, { image }))
                .then(response => {
                    if (response && response.data && response.data.response) {
                        const student = response.data.response;
                        setName(student[STUDENT.NAME]);
                        setLastname(student[STUDENT.LASTNAME]);
                        setImagePreview(student[STUDENT.PROFILE_IMAGE] && student[STUDENT.PROFILE_IMAGE][IMAGE.URL]);

                        OKEY = true;
                    }
                })
                .catch(e => {})
        } catch (error) { }
        await setResult(OKEY);
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetStudent}>
                <Form
                    onSubmit={() => update()}
                >
                    <StudentPreviewContainer>
                        <Avatar
                            size={200}
                            title={name}
                            image={imagePreview}
                        />
                    </StudentPreviewContainer>
                    <Line>
                        <ContainerInputFile>
                            <InputFile
                                id="formAddStudent1"
                                name={"image"}
                                onChange={(e) => setImage(getFile(e))}
                            >
                                {TEXTS.BUTTON_IMAGE}
                            </InputFile>
                        </ContainerInputFile>
                    </Line>
                    <Line>
                        <Input
                            required
                            name={"name"}
                            value={name}
                            label={TEXTS.NAME}
                            placeholder={TEXTS.NAME}
                            onChange={e => setName(String(e.target.value))}
                        />
                    </Line>
                    <Line>
                        <Input
                            required
                            name={"lastname"}
                            value={lastname}
                            label={TEXTS.LASTNAME}
                            placeholder={TEXTS.LASTNAME}
                            onChange={e => setLastname(String(e.target.value))}
                        />
                    </Line>
                    {
                        (result === true) &&
                        <BoxResult color={colors.success}>
                            {TEXTS.SUCCESS_UPDATE}
                        </BoxResult>
                    }
                    {
                        (result === false) &&
                        <BoxResult color={colors.error}>
                            {TEXTS.ERROR_UPDATE}
                        </BoxResult>
                    }
                    <Line>
                        <Button
                            type={"submit"}
                            loading={loading}
                        >
                            {TEXTS.BUTTON_SUBMIT}
                        </Button>
                    </Line>
                </Form>
            </ComponentLoading>
        </Container>
    );
}

export default FormUpdateStudent;