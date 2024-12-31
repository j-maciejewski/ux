import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("./routes/home.tsx"),
    route("settings", "./routes/settings.tsx"),
    route("add", "./routes/add-task.tsx"),
    route("edit/:id", "./routes/edit-task.tsx"),
  ]),
] satisfies RouteConfig;
