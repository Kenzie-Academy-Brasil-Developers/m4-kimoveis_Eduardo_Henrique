import "reflect-metadata"
import "express-async-errors"
import express from "express"


const app = express()
app.use("/users", usersRoutes);
app.use("/schedules", schedulesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/categories", categoriesRoutes);
app.use(express.json())

export default app