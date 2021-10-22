import React, { FC } from 'react';

export interface SingleRoute<T = any> {
	path: string;
	component: any;
}

export interface MainRoutes {
	authenticated: SingleRoute[];
	unauthenticated: SingleRoute[];
}
