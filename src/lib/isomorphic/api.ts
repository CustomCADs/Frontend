import * as persistence from './persistence';

export const getCsrfCookie = () => persistence.get('csrf') ?? undefined;
export const getRoleCookie = () => persistence.get('role') ?? undefined;
