import { CorsOptions } from "cors";
const whiteLists = [
  "http://localhost:3000",
  "http://localhost:6969",
  "http://example.com",
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteLists.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
  preflightContinue: false,
  exposedHeaders: ["Content-Length", "Content-Disposition"],
};

export default corsOptions;
