import express, { Request, Response } from "express";
const app = express();
import ResponseHelper from "./src/helpers/ResponseHelper";
import cors from "cors";
import corsOptions from "./src/config/corsOption";
import helmet from "helmet";

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  ResponseHelper.success(
    res,
    null,
    "API initialized successfully. Ready to accept requests."
  );

  return;
});

export default app;
