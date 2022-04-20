import { classes } from "@automapper/classes";
import { addProfile, createMapper } from "@automapper/core";
import { testProfile } from "../models.profiles";

const mapper = createMapper({
  strategyInitializer: classes(),
});

addProfile(mapper, testProfile);

export { mapper };
