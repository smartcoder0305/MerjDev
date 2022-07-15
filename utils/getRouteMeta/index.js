import { routes, SEO } from '../../config';

const { nav } = routes;

let targetRoute;

const findRoute = (routesArray, targetHref) => {
  routesArray.forEach((route) => {
    if (route.href && route.href === targetHref) {
      targetRoute = route;
    }

    if (route.routes) {
      findRoute(route.routes, targetHref);
    }

    return null;
  });

  return targetRoute;
};

const getRouteMeta = (pathname) => {
  const route = findRoute(nav, pathname);
  const title = route ? route.title : SEO.title;
  const description = route ? route.description : SEO.description;

  return {
    title,
    description,
  };
};

export default getRouteMeta;
