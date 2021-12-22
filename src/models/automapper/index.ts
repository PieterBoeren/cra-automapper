import { classes } from "@automapper/classes";
import { createMapper } from "@automapper/core";
import { testProfile } from "../models.profiles";

const mapper = createMapper({
  name: "test",
  pluginInitializer: classes,
});

mapper.addProfile(testProfile);

export { mapper };
