import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //it is used to save file/folder

//import rountes
import studentRouter from "./routes/student.routes.js";
import courseRouter from "./routes/course.routes.js";
import departmentRouter from "./routes/department.routes.js";
import resultRouter from "./routes/result.routes.js";

//routes declaration
app.use("/api/v1/student", studentRouter);
app.use("api/v1/course", courseRouter);
app.use("/api/v1/department", departmentRouter);
app.use("api/v1/result", resultRouter);

export { app };
