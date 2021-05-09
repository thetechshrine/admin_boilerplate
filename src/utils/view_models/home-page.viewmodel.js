function extractSidebarMenus(privateRoutes = []) {
  return privateRoutes
    .filter(({ sidebarMenu }) => sidebarMenu)
    .map(({ icon, title, path }) => ({
      icon,
      title,
      url: path
    }));
}

export default { extractSidebarMenus };
