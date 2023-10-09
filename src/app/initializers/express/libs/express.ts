export default function createServer({ 
  express, app, handler, cors, compression, helmet, logger
}) {
  return Object.freeze({ server })

  function server({ hostname, port }) {
    const routes = handler.routes;

    app.use(helmet());
    app.options('*', cors({credentials: true, origin: true}));
    app.use(cors());
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))

    for(let route of routes) {
      app[route.method](`${ route.path }`, route.component);
    }

    app.listen(port, hostname, () => {
      logger.info(`[EXPRESS] Server running at http://${hostname}:${port}/`);
    });
  }
}