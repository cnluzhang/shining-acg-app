import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
	const { hostname, pathname } = url;

	let newPath = pathname;

	if (hostname === 'app.shiningacg.club') {
		newPath = `/app${pathname}`;
	} else if (hostname.includes('shiningacg.club')) {
		newPath = `/site${pathname}`;
  }

	return newPath;
};
