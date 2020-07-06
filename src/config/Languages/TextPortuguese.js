import { SITE_NAME } from 'config/infos';

export const TextPortuguese = {
    SITE_NAME,
    LOADING: {
        TITLE: 'Carregando',
    },
    DATE_EXPIRATION: {
        UNLIMITED: 'Tempo indeterminado',
        AND: 'e',
        ONE_MONTH: 'mês',
        MANY_MONTHS: 'meses',
        MANY_DAYS: 'dias',
        ONE_YEAR: 'ano',
        MANY_YEARS: 'anos',
    },
    COPYRIGHT: {
        TITLE: `Copyright © ${SITE_NAME} - Todos os direitos reservados`,
        SUBTITLE: `Desenvolvido por`,
    },
    MENU_PAGES_AUTH: {
        BUTTON_HOME: 'Meus cursos',
        BUTTON_PROFILE: 'Perfil',
        BUTTON_LOGOUT: 'Sair',
    },
    BUTTON: {
        OPTIONAL: 'Opcional',
    },
    ALERT_VALIDATE_EMAIL: {
        TITLE: 'Oie, preciso que você valide seu cadastro.',

        INITIAL : {
            TITLE: 'Você recebeu o email de verificação, clicou em "Validar cadastro" e deu tudo certo?',
            BUTTON_RESEND: 'Enviar email',
            BUTTON_NO: 'Não',
            BUTTON_YES: 'Sim',
        },
        RESEND : {
            TITLE: 'Email enviado novamente. Por favor, veja o email enviado e valide seu cadastro.',
            BUTTON_YES: 'Validei',
        },
        SUCCESS : {
            TITLE: 'Você já clicou no link?',
            BUTTON_YES: 'Sim',
        }
    },
    REMOVE_CONTAINER: {
        TITLE: 'Quer mesmo remover?',
        REMOVE: 'Sim',
        CANCEL: 'Não',
    },
    TEXT_EDITOR: {
        OPTIONAL: 'Opcional',
    },
    PAGE_DEFAULT_REGISTER_COURSE: {
        HOME: {
            BUTTON_REGISTER_COURSE: 'Entrar no curso',
            BUTTON_REGISTER: 'Cadastre-se',
            BUTTON_LOGON: 'Faça login',
            OR: 'Ou',
            ERROR: 'Desculpe-me, mas deu algum erro.',
        },
        LOGON: {
        },
        REGISTER: {
        },
    },
    PAGE_DEFAULT_HOME: {
        TEXTS: {
            COURSES_TITLE: 'Cursos',
            BUTTON_BUY: 'Adquirir curso',
            BUTTON_LOAD_MORE_COURSES: 'Ver mais cursos',
        },
        HEADER: {
            BUTTON_BUY_COURSES: 'Adquirir curso',
            BUTTON_HOME: 'Início',
            BUTTON_REGISTER: 'Cadastre-se',
            BUTTON_LOGON: 'Login',
        },
    },
    HEADER_DEFAULT: {
        BUTTON_BUY_COURSES: 'Adquirir curso',
        BUTTON_HOME: 'Início',
        BUTTON_REGISTER: 'Cadastre-se',
        BUTTON_LOGON: 'Login',
    },
    PAGE_AUTH_HOME: {
        TEXTS: {
            TITLE: 'Meus cursos',
            BUTTON_ENTER_COURSE: 'Entrar',
            BUTTON_LOAD_MORE_COURSES: 'Ver mais cursos',
        },
    },
    PAGE_LOGON: {
        TITLE: 'Bem-vindo de volta!',
        OR: 'Ou',
        BUTTON_REGISTER: 'Cadastre-se',
    },
    PAGE_RESET_PASSWORD: {
        TITLE: 'Trocar senha',
    },
    PAGE_FORGOT_PASSWORD: {
        TITLE: 'Esqueci minha senha',
    },
    PAGE_REGISTER: {
        TITLE: 'Crie sua conta!',
        OR: 'Ou',
        BUTTON_LOGON: 'Já possuo cadastro',
    },
    PAGE_NOT_FOUND: {
        TITLE: 'Desculpe, mas não consegui encontrar essa página.',
        OOPS: 'Ooops!',
        BUTTON_HOME: 'Início',
    },
    LIST: {
        NOT_FOUND: 'Me desculpa, não encontrei ninguém.',
    },
    PAGE_AUTH_PROFILE: {
        HEADER: {
            TITLE: 'Meu perfil',
        },
        MENU: {
            BUTTON_HOME: 'Informações',
            BUTTON_UPDATE_PASSWORD: 'Alterar senha',
        },
    },
    PAGE_AUTH_COURSE: {
        STRUCT: {
            NOT_FOUND: 'Curso não encontrado.',
        },
        HOME: {
            ACCESS: 'Seu acesso expira no dia',
            NO_DESCRIPTION: 'Nenhum descrição.',
            AUTHOR_TITLE: 'Autor do curso',
        },
        MATERIALS: {
            DESCRIPTION: 'Clique nos materiais para visualizá-los.',
        },
        VIDEOS: {
            TITLE: 'Quantidade de vídeos:',
            PLAYLIST_TITLE: 'Vídeos',
            BUTTON_VIEW: 'Ver detalhes',
            NOT_FOUND: 'Desculpe-me, mas não encontrei os vídeos desse curso.',
        },
        MENU: {
            BUTTON_HOME: 'Sobre',
            BUTTON_MATERIALS: 'Material complementar',
            BUTTON_VIDEOS: 'Videos',
        },
    },
    PAGE_VALIDATE_EMAIL: {
        SUCCESS: 'Cadastro validado com sucesso!',
        ERROR: 'Oie, você já validou o seu cadastro, ou o seu link expirou!',
        BUTTON_HOME: 'Voltar',
    },
    FORM_LOGON: {
        TITLE: 'Login',
        EMAIL: 'E-mail',
        PASSWORD: 'Senha',
        FORGOT_PASSWORD: 'Esqueceu sua senha?',
        BUTTON_SUBMIT: 'Entrar',
        LOGIN_ERROR: 'Login inválido, verifique seus dados.',
    },
    FORM_FORGOT_PASSWORD: {
        TITLE: 'Esqueceu sua senha?',
        SUBTITLE: 'Me diga o seu email.',
        EMAIL: 'E-mail',
        BUTTON_SUBMIT: 'Enviar',
        SUCCESS: 'Foi enviado um email com o passo a passo para alterar sua senha.',
        ERROR: 'Erro ao enviar o email, verifique seus dados.',
    },
    FORM_RESET_PASSWORD: {
        TITLE: 'Altere sua senha',
        EMAIL: 'E-mail',
        PASSWORD: 'Nova senha',
        BUTTON_SUBMIT: 'Enviar',
        NOT_FOUND: 'Link expirado!',
        SUCCESS: 'Senha alterada com sucesso.',
        ERROR: 'Erro ao alterar sua senha, verifique seus dados.',
    },
    FORM_REGISTER: {
        TITLE: 'Cadastro',
        NAME: 'Nome',
        LASTNAME: 'Sobrenome',
        EMAIL: 'E-mail',
        TERMS: 'Termos de uso',
        PASSWORD: 'Senha',
        DESCRIPTION_TERMS_START: 'Ao registrar-se você estará concordando com nossos',
        DESCRIPTION_TERMS_END: '.',
        BUTTON_SUBMIT: 'Registrar',
        REGISTER_ERROR: 'Cadastro inválido, verifique seus dados, ou se você já possui conta.',
    },
    FORM_UPDATE_PASSWORD: {
        PASSWORD: `Senha atual`,
        NEW_PASSWORD: `Nova senha`,
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS: 'Atualizado com sucesso.',
        ERROR: 'Erro ao atualizar, verifique seus dados.',
    },
    FORM_UPDATE_STUDENT: {
        NAME: 'Nome',
        LASTNAME: 'Sobrenome',
        BUTTON_IMAGE: 'Alterar foto',
        BUTTON_SUBMIT: 'Atualizar',
        BUTTON_CANCEL: 'Cancelar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar, por favor tente novamente mais tarde.',
    },
};

export default TextPortuguese;