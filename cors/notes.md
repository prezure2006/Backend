# Cors

> > > > Cross Origin Resource Sharing this is a security mechanism Which allowes use to manage from where the request is coming to our server.

> > > > We can do Alot of things like we can grant only GET and POST request either than this they cant do anyhting

- In Production We Do this

```
const corsOptions = {
  origin: 'https://your-frontend-domain.com', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Allow cookies/authorization headers
};

app.use(cors(corsOptions));
```

> > > > Yes, setting origin: "\*" (or simply calling app.use(cors())) tells the server to accept requests from any origin.

Postman: It doesn't enforce browser CORS policies. It sends the HTTP request and reads the response.

Browser: It enforces the same-origin policy. Since localhost:5173 and localhost:5000 have different ports, they are different origins.
