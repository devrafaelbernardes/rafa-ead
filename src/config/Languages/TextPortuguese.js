import { SITE_NAME } from 'config/infos';

export const TextPortuguese = {
    SITE_NAME,
    LOADING: {
        TITLE: 'Carregando',
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
    REMOVE_CONTAINER: {
        TITLE: 'Quer mesmo remover?',
        REMOVE: 'Sim',
        CANCEL: 'Não',
    },
    TEXT_EDITOR: {
        OPTIONAL: 'Opcional',
    },
    PAGE_DEFAULT_REGISTER_COURSE: {
        HOME : {
            BUTTON_REGISTER_COURSE : 'Entrar no curso',
            BUTTON_REGISTER : 'Cadastre-se',
            BUTTON_LOGON : 'Faça login',
            OR : 'Ou',
            ERROR : 'Desculpe-me, mas deu algum erro.',
        },
        LOGON : {
        },
        REGISTER : {
        },
    },
    PAGE_DEFAULT_HOME: {
        TEXTS : {
            COURSES_TITLE : 'Cursos',
            BUTTON_BUY : 'Adquirir curso',
            BUTTON_LOAD_MORE_COURSES : 'Ver mais cursos',
        },
        HEADER : {
            BUTTON_HOME : 'Início',
            BUTTON_REGISTER : 'Cadastre-se',
            BUTTON_LOGON : 'Login',
        },
    },
    PAGE_AUTH_HOME: {
        TEXTS : {
            TITLE : 'Meus cursos',
            BUTTON_ENTER_COURSE : 'Entrar',
            BUTTON_LOAD_MORE_COURSES : 'Ver mais cursos',
        },
    },
    PAGE_LOGON: {
        TITLE: 'Bem-vindo de volta!',
        OR: 'Ou',
        BUTTON_REGISTER: 'Cadastre-se',
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
        HEADER : {
            TITLE: 'Meu perfil',
        },
        MENU : {
            BUTTON_HOME: 'Informações',
            BUTTON_UPDATE_PASSWORD: 'Alterar senha',
        },
    },
    PAGE_AUTH_COURSE: {
        STRUCT: {
            NOT_FOUND: 'Curso não encontrado.',
        },
        HOME: {
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
            NOT_FOUND : 'Desculpe-me, mas não encontrei os vídeos desse curso.',
        },
        MENU: {
            BUTTON_HOME: 'Sobre',
            BUTTON_MATERIALS: 'Material complementar',
            BUTTON_VIDEOS: 'Videos',
        },
    },
    FORM_LOGON: {
        TITLE: 'Login',
        EMAIL: 'E-mail',
        PASSWORD: `Senha`,
        BUTTON_SUBMIT: 'Entrar',
        LOGIN_ERROR: 'Login inválido, verifique seus dados.',
    },
    FORM_REGISTER: {
        TITLE: 'Cadastro',
        NAME: 'Nome',
        LASTNAME: 'Sobrenome',
        EMAIL: 'E-mail',
        PASSWORD: `Senha`,
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