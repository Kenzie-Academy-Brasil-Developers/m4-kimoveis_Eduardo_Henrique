import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { schedulesRoutes } from "./routes/schedule.routes";
import { realEstateRoutes } from "./routes/realEstate.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { usersRoutes } from "./routes/users.routes";
import { errorHandler } from "./error";
import { loginRoutes } from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/schedules", schedulesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/categories", categoriesRoutes);
app.use(errorHandler);
export default app;
