import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/modules/middlewares/globalErrorHandler";
import notFound from "./app/modules/middlewares/notFound";
import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is healthy");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
