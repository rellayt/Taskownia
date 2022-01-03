import { SnackbarType } from '../../models/Snackbar.model';

export const AUTHENTICATE_ERROR = { content: 'Błąd uwierzytelniania', type: SnackbarType.ERROR };

export const LOGIN_SUCCESS = { content: 'Zalogowano', type: SnackbarType.SUCCESS };

export const LOGIN_ERROR = { content: 'Błędne dane', type: SnackbarType.ERROR };

export const LOGOUT = { content: 'Wylogowano', type: SnackbarType.SUCCESS };

export const CREATE_PROJECT_SUCCESS = { content: 'Utworzono projekt', type: SnackbarType.SUCCESS };

export const STANDARD_ERROR = { content: 'Wystąpił błąd', type: SnackbarType.ERROR };

export const UPDATE_PERSONAL_DATA_SUCCESS = { content: 'Zaktualizowano dane personalne', type: SnackbarType.SUCCESS };

export const UPDATE_ADDRESS_SUCCESS = { content: 'Zaktualizowano adres', type: SnackbarType.SUCCESS };

export const CHANGE_PASSWORD_SUCCESS = { content: 'Hasło zostało zmienione', type: SnackbarType.SUCCESS };

export const CHANGE_PASSWORD_ERROR = { content: 'Hasło jest niepoprawne', type: SnackbarType.ERROR };

export const TAKE_PROJECT_SUCCESS = { content: 'Projekt został przyjęty', type: SnackbarType.SUCCESS };

export const TAKE_PROJECT_ERROR = { content: 'Nie udało się przyjąć projektu', type: SnackbarType.ERROR };
