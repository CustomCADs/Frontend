import * as persistence from './persistence';

export const getCsrfCookie = () => persistence.getCookie('csrf') ?? undefined;
export const getRoleCookie = () => persistence.getCookie('role') ?? undefined;
