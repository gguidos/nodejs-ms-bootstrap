export default function createServer({ 
  app, handler, cors, compression, helmet
}) {
  return Object.freeze({ server })

  function server({ hostname, port }) {
    const routes = handler.routes;
    app.use(helmet());
    app.options('*', cors({credentials: true, origin: true}));
    app.use(cors());
    app.use(compression());

    for(let route of routes) {
      app[route.method](`${ route.path }`, route.component);
    }

    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  }
}