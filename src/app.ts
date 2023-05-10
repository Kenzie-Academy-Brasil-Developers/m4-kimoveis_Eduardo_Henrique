import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRoutes } from "./routes/categories.routes";
import { schedulesRoutes } from "./routes/schedule.routes";
import { realEstateRoutes } from "./routes/realEstate.routes";
import { categoriesRoutes } from "./routes/users.routes";


const app = express()
app.use("/users", usersRoutes);
app.use("/schedules", schedulesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/categories", categoriesRoutes);
app.use(express.json())

export default app