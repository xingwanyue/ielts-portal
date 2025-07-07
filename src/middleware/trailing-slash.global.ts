export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path.endsWith("/") && to.path !== "/") {
    return navigateTo({
      path: to.path.substring(0, to.path.length - 1),
      query: to.query,
    });
  }
});
