export default () =>
  async (req:any, res:any, next:any) => {
    const renderer = (await import('./render')).default;
    return renderer(req, res, next);
  };